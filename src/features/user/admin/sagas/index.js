import {push}                 from 'connected-react-router'
import {update, updateUser}   from 'features/user/services'
import {call, put, takeEvery} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm'

export function* updateProfile({payload}) {
    try {
        const {_id, token, firstName} = payload
        const profile = yield call(update, {_id, token, user: {firstName: firstName}})

        if (!profile.error) {
            yield call(updateUser, {
                user: {
                    firstName: profile.firstName,
                    tel: profile.tel,
                    _id: profile._id,
                    role: profile.role
                }
            })
            yield put({type: 'user/updateSuccess', payload: profile})
            yield put(push(profile?.role === 0 ? '/admin' : '/dashboard'))
        } else {
            yield put({type: 'user/updateFailure', profile})
        }

    } catch (error) {
        yield put({type: 'user/updateFailure', error})
    }
}


export function* createAdaptiveEquipment({payload}) {
    const {_id, token, name, description,} = payload

    //add to formdata so api can read
    const adaptiveEquipment = new FormData()
    adaptiveEquipment.set('name', name)
    //  place.set('description', description)

    console.log('name', name)
}


/**
 *
 *
 * USER WATCHERS
 *
 *
 */


export function* watchUpdateProfile() {
    yield takeEvery('user/updateProfile', updateProfile)
}


export function* watchCreateAdaptiveEquipment() {
    yield takeEvery('admin/createAdaptiveEquipment', createAdaptiveEquipment)
}
