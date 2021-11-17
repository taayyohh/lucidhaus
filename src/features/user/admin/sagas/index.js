import {push}                         from 'connected-react-router'
import {getSignedRequest, uploadFile} from 'features/site/services/s3'
import {
    confirmUserResetToken,
    getReviewsByUser,
    resendVerification,
    resetUserPassword,
    sendRecoverPassword,
    updateUserJwt
}                                     from 'features/user/services'
import {call, put, takeEvery}         from 'redux-saga/effects'
import {getEntityById, updateEntity}  from 'utils/abstractions/crud'
import {setFormData}                  from 'utils/abstractions/setFormData'

export function* updateUser({payload}) {
    const {
        slug,
        _id,
        token,
        nameFirst,
        nameMiddle,
        nameLast,
        avatar,
        avatarFile,
        dateOfBirth,
        email,
        handle,
        ethnicHispanicOrigin,
        tel,
        zip
    } = payload

    //add to formData so api can read
    const user = new FormData()
    const fields = [{avatar}, {nameFirst}, {nameMiddle}, {nameLast}, {dateOfBirth}, {email}, {tel}, {handle}, {ethnicHispanicOrigin}, {zip}]
    for (let field of fields)
        setFormData(user, field)

    if (!!avatarFile) {
        const s3Payload = yield call(getSignedRequest, avatarFile)
        if (!!s3Payload.signedRequest) {
            yield call(uploadFile, {file: avatarFile, signedRequest: s3Payload.signedRequest})
        }
    }

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'user',
            body: user,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'user/updateUserSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated User',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'user/updateUserFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'user/updateUserFailure'})
    }
}

export function* updateIdentity({payload}) {
    const {
        slug,
        _id,
        token,
        adaptiveEquipment,
        bodyModification,
        blind,
        deaf,
        gender,
        guideAnimal,
        languagePrimary,
        languageSecondary,
        methodOfCommunication,
        physicalAppearance,
        pronoun,
        race,
        serviceAnimal,
        sexualOrientation,
        transgender
    } = payload

    //add to formData so api can read
    const user = new FormData()
    const fields = [
        {adaptiveEquipment},
        {bodyModification},
        {blind},
        {deaf},
        {gender},
        {guideAnimal},
        {languagePrimary},
        {languageSecondary},
        {methodOfCommunication},
        {physicalAppearance},
        {pronoun},
        {race},
        {serviceAnimal},
        {sexualOrientation},
        {transgender}
    ]
    for (let field of fields)
        setFormData(user, field)


    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'user',
            body: user,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'user/updateUserIdentitySuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated User',
                    theme: 'green'
                }
            })
            // yield put({
            //     type: 'user/getUser',
            //     payload: {
            //         slug: slug,
            //         _id: _id,
            //         token: token
            //     }
            // })

        } else {
            yield put({type: 'user/updateUserFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'user/updateUserFailure'})
    }
}

export function* updateProfile({payload}) {
    const {
        slug,
        _id,
        token,
        nameFirst,
        nameMiddle,
        nameLast,
        avatar,
        avatarFile,
        dateOfBirth,
        email,
        handle,
        ethnicHispanicOrigin,
        tel,
        zip
    } = payload

    //add to formData so api can read
    const user = new FormData()
    const fields = [{avatar}, {nameFirst}, {nameMiddle}, {nameLast}, {dateOfBirth}, {email}, {tel}, {handle}, {ethnicHispanicOrigin}, {zip}]
    for (let field of fields)
        setFormData(user, field)

    if (!!avatarFile) {
        const s3Payload = yield call(getSignedRequest, avatarFile)
        if (!!s3Payload.signedRequest) {
            yield call(uploadFile, {file: avatarFile, signedRequest: s3Payload.signedRequest})
        }
    }

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'user',
            body: user,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield call(updateUserJwt, updated)
            yield put({type: 'user/updateUserProfileSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated User',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'user/updateUserProfileFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'user/updateUserProfileFailure'})
    }
}

export function* manageBookmark({payload}) {
    const {_id, token, slug, placeId} = payload
    const bookmark = new FormData()
    const fields = [{placeId}]
    for (let field of fields)
        setFormData(bookmark, field)

    try {
        const updated = yield call(updateEntity, {
            slug: 'place',
            parentSlug: 'bookmark',
            body: bookmark,
            _id: _id,
            token: token,
        })

        if (!updated.error) {
            yield put({
                type: 'user/getUser',
                payload: {
                    slug: slug,
                    _id: _id,
                    token: token
                }
            })
        }


    } catch (error) {

    }
}

export function* getBookmark({payload}) {
    const {bookmark} = payload
    const place = yield call(getEntityById, {
        entityId: bookmark,
        path: 'place'
    })
    yield put({type: 'user/getBookmarkSuccess', payload: {place: place}})

}

export function* getUserReviews({payload}) {
    const {_id, token} = payload
    const reviews = yield call(getReviewsByUser, {
        _id,
        token
    })
    if (!reviews.error) {
        yield put({type: 'user/getUserReviewsSuccess', payload: {reviews: reviews}})
    }
}

export function* resendVerificationLink({payload}) {
    const {_id, token} = payload

    yield call(resendVerification, {_id, token})
    //TODO: make this dependent on successful send verified from server
    yield put({
        type: 'site/setNotification',
        payload: {
            notification: 'Email resent',
            theme: 'green'
        }
    })

}

export function* recoverPassword({payload}) {
    try {
        const recover = yield call(sendRecoverPassword, {payload})

        if (!recover?.error) {
            yield put({type: 'place/recoverPasswordSuccess'})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: recover.message,
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'place/recoverPasswordFailure'})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: recover.error,
                    theme: 'red'
                }
            })
        }
    } catch (error) {
        yield put({type: 'place/recoverPasswordFailure'})
    }

}

export function* confirmResetToken({payload}) {
    const reset = yield call(confirmUserResetToken, {payload})

    if (!reset.error) {
        //TODO: confirm link is valid front end response?
    } else {
        yield put({
            type: 'site/setNotification',
            payload: {
                notification: reset.error,
                theme: 'red'
            }
        })
        yield push(yield put(push('/signin')))

    }
}

export function* resetPassword({payload}) {
    const reset = yield call(resetUserPassword, {payload})
    if (!reset.error) {
        yield put({
            type: 'site/setNotification',
            payload: {
                notification: reset.message,
                theme: 'green'
            }
        })
        yield push(yield put(push('/signin')))
    } else {
        //TODO: error handle
    }
}


/**
 *
 *
 * USER WATCHERS
 *
 *
 */


export function* watchUpdateProfile() {
    yield takeEvery('user/updateUserProfile', updateProfile)
}

export function* watchUpdateUser() {
    yield takeEvery('user/updateUser', updateUser)
}

export function* watchUpdateUserIdentity() {
    yield takeEvery('user/updateUserIdentity', updateIdentity)
}

export function* watchManageBookmark() {
    yield takeEvery('user/manageBookmark', manageBookmark)
}

export function* watchGetBookmark() {
    yield takeEvery('user/getBookmark', getBookmark)
}

export function* watchGetUserReviews() {
    yield takeEvery('user/getUserReviews', getUserReviews)
}

export function* watchResendVerificationLink() {
    yield takeEvery('user/resendVerificationLink', resendVerificationLink)
}

export function* watchRecoverPassword() {
    yield takeEvery('user/recoverPassword', recoverPassword)
}

export function* watchConfirmResetToken() {
    yield takeEvery('user/confirmResetToken', confirmResetToken)
}

export function* watchResetPassword() {
    yield takeEvery('user/resetPassword', resetPassword)
}

