import {getSignedRequest, uploadFile} from 'features/site/services/s3'
import {updateUserJwt}                from 'features/user/services'
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
        email,
        handle,
        ethnicHispanicOrigin,
        tel
    } = payload

    //add to formData so api can read
    const user = new FormData()
    const fields = [{avatar}, {nameFirst}, {nameMiddle}, {nameLast}, {email}, {tel}, {handle}, {ethnicHispanicOrigin}]
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
        email,
        handle,
        ethnicHispanicOrigin,
        tel
    } = payload

    //add to formData so api can read
    const user = new FormData()
    const fields = [{avatar}, {nameFirst}, {nameMiddle}, {nameLast}, {email}, {tel}, {handle}, {ethnicHispanicOrigin}]
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
    const {_id, token, placeId} = payload
    const bookmark = new FormData()
    const fields = [{placeId}]
    for (let field of fields)
        setFormData(bookmark, field)

    try {
        yield call(updateEntity, {
            slug: 'place',
            parentSlug: 'bookmark',
            body: bookmark,
            _id: _id,
            token: token,
        })

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


