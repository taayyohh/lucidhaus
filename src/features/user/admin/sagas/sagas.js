import {getSignedRequest, uploadFile} from 'features/site/services/s3'
import {updateUser}                   from 'features/user/services'
import {call, put, takeEvery}         from 'redux-saga/effects'
import {updateEntity}                 from 'utils/abstractions'

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
    const updatedUser = new FormData()
    updatedUser.set('avatar', avatar)
    updatedUser.set('nameFirst', nameFirst)
    updatedUser.set('nameMiddle', nameMiddle)
    updatedUser.set('nameLast', nameLast)
    updatedUser.set('email', email)
    updatedUser.set('tel', tel)
    updatedUser.set('handle', handle)
    updatedUser.set('ethnicHispanicOrigin', ethnicHispanicOrigin)

    if (!!avatarFile) {
        const s3Payload = yield call(getSignedRequest, avatarFile)
        if (!!s3Payload.signedRequest) {
            const uploadImage = yield call(uploadFile, {file: avatarFile, signedRequest: s3Payload.signedRequest})
        }
    }


    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'user',
            body: updatedUser,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            console.log('UPDATED', updated)
            const updateCookie = yield call(updateUser, updated)
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


/**
 *
 *
 * USER WATCHERS
 *
 *
 */


export function* watchUpdateProfile() {
    yield takeEvery('user/updateUser', updateProfile)
}


