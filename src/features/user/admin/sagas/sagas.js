import {call, put, takeEvery} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm'
import {updateEntity}         from '../../../../utils/abstractions'

export function* updateProfile({payload}) {
    const {
        slug,
        _id,
        token,
        nameFirst,
        nameMiddle,
        nameLast,
        avatar,
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

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'user',
            body: updatedUser,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'place/updateUserSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated User',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'place/updateUserFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'place/updateUserFailure'})
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


