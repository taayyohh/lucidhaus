import {takeEvery}               from '@redux-saga/core/effects'
import {push}                    from 'connected-react-router'
import cryptoRandomString        from 'crypto-random-string'
import {signin, signout, signup} from 'features/site/services'
import {
    confirmTwilioEmailVerification,
    confirmTwilioVerification,
    sendTwilioEmailVerification,
    sendTwilioVerification
}                                from 'features/site/services/twilio'
import {
    addFlaggedReview,
    addPlaceSubmissionToUserHistory,
    getPurchaseHistory,
    getUser,
    getUserById,
    getUsers,
    verifyUserEmail
}                                from 'features/user/services'
import {call, put}                  from 'redux-saga/effects'
import {createEntity, updateEntity} from 'utils/abstractions/crud'
import {setFormData}                from 'utils/abstractions/setFormData'
import {formatPhone}                                       from 'utils/helpers'

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

export function* updateUserPhoneNumber({payload}) {
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

export function* confirmUpdatePhoneNumber({payload}) {
    const confirmedUser = yield call(confirmTwilioVerification, payload)
    const {tel, slug, _id, token} = payload

    const user = new FormData()
    const fields = [{tel}]
    for (let field of fields)
        setFormData(user, field)

    if (confirmedUser === 'approved') {
        try {
            const updated = yield call(updateEntity, {
                slug: slug,
                parentSlug: 'user',
                body: user,
                _id: _id,
                token: token,
            })
            if (!updated.error) {
                yield put({type: 'user/updateUserPhoneNumberSuccess', payload: updated})
                yield put({
                    type: 'site/setNotification',
                    payload: {
                        notification: 'Your phone number has been updated.',
                        theme: 'green'
                    }
                })

            } else {
                yield put({type: 'user/updateUserFailure', payload: updated})
            }
        } catch (error) {
            yield put({type: 'user/updateUserFailure'})
        }
    } else {
        yield put({
            type: 'site/setNotification',
            payload: {
                notification: 'The Verification code entered is invalid. Please Re-enter the code.',
                theme: 'red'
            }
        })
    }
}

export function* updateUserEmail({payload}) {
    const verificationToken = yield call(sendTwilioEmailVerification, payload)
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

export function* confirmUpdateEmail({payload}) {
    const confirmedUser = yield call(confirmTwilioEmailVerification, payload)
    const {email, slug, _id, token} = payload

    const user = new FormData()
    const fields = [{email}]
    for (let field of fields)
        setFormData(user, field)

    if (confirmedUser === 'approved') {
        try {
            const updated = yield call(updateEntity, {
                slug: slug,
                parentSlug: 'user',
                body: user,
                _id: _id,
                token: token,
            })
            if (!updated.error) {
                yield put({type: 'user/updateUserEmailSuccess', payload: updated})
                yield put({
                    type: 'site/setNotification',
                    payload: {
                        notification: 'Your email address has been successfully updated.',
                        theme: 'green'
                    }
                })

            } else {
                yield put({type: 'user/updateUserFailure', payload: updated})
            }
        } catch (error) {
            yield put({type: 'user/updateUserFailure'})
        }
    } else {
        yield put({
            type: 'site/setNotification',
            payload: {
                notification: 'The Verification code entered is invalid. Please Re-enter the code.',
                theme: 'red'
            }
        })
    }
}



export function* confirmUser({payload}) {
    const confirmedUser = yield call(confirmTwilioVerification, payload)
    const {acceptTerms, email, nameFirst, password, tel, verificationCode} = payload

    if (confirmedUser === 'approved') {
        const user = yield call(signup, {
            acceptTerms,
            email,
            nameFirst,
            password,
            tel: formatPhone(tel),
            verificationCode
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
                notification: 'The Verification code entered is invalid. Please Re-enter the code.',
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

export function* getSubmittedByUser({payload}) {
    try {
        const user = yield call(getUserById, payload)
        if (!user.error) {
            yield put({type: 'place/getSubmittedByUserSuccess', payload: user})
        } else {
            yield put({type: 'place/getSubmittedByUserFailure', payload: user})
        }
    } catch (error) {
        yield put({type: 'place/getSubmittedByUserFailure', error})
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
    const {reason, placeSlug, token, _id} = payload

    const review = new FormData()
    const fields = [
        {reviewId: payload.review.id},
        {reason}
    ]

    for (let field of fields)
        setFormData(review, field)


    const user = yield call(addFlaggedReview, {
        _id,
        token,
        reviewId: payload.review.id,
        review
    })

    if (!user.error) {
        yield put({
            type: 'user/flagReviewSuccess',
        })
        //TODO: make this call more specific so the entire place doesn't need to be reloaded
        yield put({type: 'place/getPlace', payload: {slug: placeSlug}})


        //  yield put({
        //      type: 'user/getUser',
        //      payload: {
        //          slug: slug,
        //          _id: _id,
        //          token: token
        //      }
        //  })
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

export function* watchUpdateUserPhoneNumber() {
    yield takeEvery('user/updatePhoneNumber', updateUserPhoneNumber)
}

export function* watchConfirmUpdatePhoneNumber() {
    yield takeEvery('user/confirmUpdatePhoneNumber', confirmUpdatePhoneNumber)
}

export function* watchUpdateUserEmail() {
    yield takeEvery('user/updateEmail', updateUserEmail)
}

export function* watchConfirmUpdateEmail() {
    yield takeEvery('user/confirmUpdateEmail', confirmUpdateEmail)
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

export function* watchGetSubmittedBy() {
    yield takeEvery('user/getSubmittedByUser', getSubmittedByUser)
}

export function* watchCreateVerificationToken() {
    yield takeEvery('user/createVerificationToken', createVerificationToken)
}

export function* watchVerifyUser() {
    yield takeEvery('user/verifyUser', verifyUser)
}

