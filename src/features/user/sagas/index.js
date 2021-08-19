import {push}                                                   from 'connected-react-router'
import cryptoRandomString                                       from 'crypto-random-string'
import {signin, signout, signup}                                from 'features/site/services'
import {confirmTwilioVerification, sendTwilioVerification}      from 'features/site/services/twilio'
import {
    addFlaggedReview,
    addPlaceSubmissionToUserHistory,
    getPurchaseHistory,
    getUser,
    getUsers,
    verifyUserEmail
} from 'features/user/services'
import {takeEvery}                                              from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm'
import {call, put}                                              from 'redux-saga/effects'
import {createEntity}                                           from 'utils/abstractions/crud'
import {setFormData}                                            from 'utils/abstractions/setFormData'
import {formatPhone}                                            from 'utils/helpers'

export function* signIn({payload}) {
    try {
        const user = yield call(signin, payload)
        if (!user.error) {
            yield put({type: 'user/signInSuccess', payload: user})
            yield put({type: 'user/authenticate', payload: user})
            yield put(push(user?.user?.role === 0 ? '/admin' : '/dashboard'))

            if (payload.signUp) {
                yield put({type: 'user/signUpSignInSuccess', payload: user})
            }
        } else {
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: user.error,
                    theme: 'red'
                }
            })
        }
    } catch (error) {
        yield put({type: 'site/signInFailure', error})
    }
}

export function* signUpSignInSuccess({payload}) {
    const {token, user} = payload
    const verificationToken = cryptoRandomString({length: 128})

    yield put({
        type: 'user/createVerificationToken',
        payload: {
            email: user.email,
            user: user._id,
            slug: user.slug,
            verificationToken: verificationToken,
            token: token,
            _id: user._id
        }
    })
}

export function* signOut() {
    const payload = yield call(signout)
    if (!payload.error) {
        yield put({type: 'user/signOutSuccess', payload})
        yield put(push('/signin'))
    } else {
        yield put({type: 'user/signOutFailure', payload})
    }
}

export function* signUp({payload}) {
    const verificationToken = yield call(sendTwilioVerification, payload)
    if (verificationToken === 'pending') {
        yield put({
            type: 'user/requestTwilioCodeConfirmation',
            payload: {
                verificationToken: verificationToken,
                ...payload
            }
        })
    }
}

export function* confirmUser({payload}) {
    const confirmedUser = yield call(confirmTwilioVerification, payload)
    const {acceptTerms, email, nameFirst, password, tel, verificationCode,} = payload

    if (confirmedUser === 'approved') {
        const user = yield call(signup, {
            acceptTerms,
            email,
            nameFirst,
            password,
            tel: formatPhone(tel),
            verificationCode,
        })
        try {
            if (!user.error) {
                yield put({type: 'user/signUpSuccess', payload: user})
                yield put({
                    type: 'site/setNotification',
                    payload: {
                        notification: 'account created!',
                        theme: 'green'
                    }
                })
                yield put({
                    type: 'user/signIn',
                    payload: {
                        tel: formatPhone(tel),
                        password: password,
                        signUp: true
                    }
                })
            } else {
                yield put({
                    type: 'site/setNotification',
                    payload: {
                        notification: user.error,
                        theme: 'red'
                    }
                })
            }
        } catch (error) {
            yield put({type: 'user/signUpFailure', payload: error})
        }
    } else {
        yield put({
            type: 'site/setNotification',
            payload: {
                notification: 'incorrect code',
                theme: 'red'
            }
        })
    }
}

export function* purchaseHistory({payload}) {
    try {
        const user = yield call(getPurchaseHistory, payload)
        if (!user.error) {
            yield put({type: 'user/getPurchaseHistorySuccess', payload: user})
        } else {
            yield put({type: 'user/getPurchaseHistoryFailure', payload: user})
        }
    } catch (error) {
        yield put({type: 'user/getPurchaseHistoryFailure', error})
    }
}

export function* getUsersListing() {
    try {
        const payload = yield call(getUsers)
        if (!payload.error) {
            yield put({type: 'user/getUsersSuccess', payload})
        } else {
            yield put({type: 'user/getUsersFailure', payload})
        }
    } catch (error) {
        yield put({type: 'user/getUsersFailure', error})
    }
}

export function* getUserDetail({payload}) {
    try {
        const user = yield call(getUser, payload)
        if (!user.error) {
            yield put({type: 'user/getUserSuccess', payload: user})
        } else {
            yield put({type: 'user/getUserFailure', payload: user})
        }
    } catch (error) {
        yield put({type: 'user/getUserFailure', error})
    }
}

export function* createVerificationToken({payload}) {
    const {_id, token, verificationToken} = payload

    //add to formdata so api can read
    const vToken = new FormData()
    const fields = [{verificationToken}, {user: _id}]
    for (let field of fields)
        setFormData(vToken, field)

    const createdVerificationToken = yield call(createEntity, {
        _id: _id,
        token: token,
        body: vToken,
        slug: 'verification-token'
    })
    if (!createdVerificationToken.error) {
        yield put({type: 'user/createVerificationTokenSuccess'})
        // yield put(push('/admin/places/update/' + crea.slug))

    } else {
        yield put({type: 'place/createVerificationTokenFailure', payload})

    }
}

export function* verifyUser({payload}) {
    const {_id, token, verificationToken} = payload
    const vToken = new FormData()
    const fields = [{verificationToken}, {user: _id}]
    for (let field of fields)
        setFormData(vToken, field)

    const confirmedUser = yield call(verifyUserEmail, {_id, token, verificationToken})
    if (!confirmedUser.error) {
        yield put({type: 'user/userEmailVerificationSuccess'})
        yield put({
            type: 'site/setNotification',
            payload: {
                notification: 'Email Verified!',
                theme: 'green'
            }
        })
        yield put(push('/dashboard'))
    } else {
        yield put({type: 'user/userEmailVerificationFailure', payload: confirmedUser})
        yield put({
            type: 'site/setNotification',
            payload: {
                notification: 'Invalid Verification Link',
                theme: 'red'
            }
        })
        yield put(push('/dashboard'))
    }
}

export function* getUserSuccess({payload}) {
    if (payload?.bookmarks?.length > 0) {
        for (const bookmark of payload.bookmarks) {
            // if (bookmarks.filter(place => place._id === bookmark).length === 0)
            yield put({type: 'user/getBookmark', payload: {bookmark}})
        }
    }
}

export function* flagReview({payload}) {
    const {reviewId, token, _id} = payload

    const review = new FormData()
    const fields = [
        {reviewId}
    ]

    for (let field of fields)
        setFormData(review, field)


    const flagged = yield call(addFlaggedReview, {
        _id,
        token,
        review
    })

    if (!flagged.error) {
        console.log('flagged', flagged)
        // yield put({
        //     type: 'user/getUser',
        //     payload: {
        //         slug: slug,
        //         _id: _id,
        //         token: token
        //     }
        // })
    }
}

export function* submitPlaceSuccess({payload}) {
    const {_id, token, submissionId} = payload

    const place = new FormData()
    const fields = [
        {submissionId}
    ]

    for (let field of fields)
        setFormData(place, field)


    const submission = yield call(addPlaceSubmissionToUserHistory, {
        _id,
        token,
        place
    })

    if (!submission.error) {
        // console.log('submission', submission)
        // yield put({
        //     type: 'user/getUser',
        //     payload: {
        //         slug: slug,
        //         _id: _id,
        //         token: token
        //     }
        // })
    }
}



/**
 *
 *
 * USER WATCHERS
 *
 *
 */

export function* watchSignIn() {
    yield takeEvery('user/signIn', signIn)
}

export function* watchSignUpSignInSuccess() {
    yield takeEvery('user/signUpSignInSuccess', signUpSignInSuccess)
}

export function* watchSignOut() {
    yield takeEvery('user/signOut', signOut)
}

export function* watchSignUp() {
    yield takeEvery('user/signUp', signUp)
}

export function* watchUserHistory() {
    yield takeEvery('user/getPurchaseHistory', purchaseHistory)
}

export function* watchConfirmUser() {
    yield takeEvery('user/confirmUser', confirmUser)
}

export function* watchGetUsers() {
    yield takeEvery('user/getUsers', getUsersListing)
}

export function* watchGetUserSuccess() {
    yield takeEvery('user/getUserSuccess', getUserSuccess)
}

export function* watchGetUser() {
    yield takeEvery('user/getUser', getUserDetail)
}

export function* watchCreateVerificationToken() {
    yield takeEvery('user/createVerificationToken', createVerificationToken)
}

export function* watchVerifyUser() {
    yield takeEvery('user/verifyUser', verifyUser)
}

export function* watchFlagReview() {
    yield takeEvery('user/flagReview', flagReview)
}



