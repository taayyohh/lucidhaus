import {push} from 'connected-react-router'
import {
    call,
    put,
    takeEvery
}             from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm'
import {
    update,
    updateUser
}             from '../../services/apiUser'

export function* updateProfile({payload}) {
    try {
        const {_id, token, name} = payload
        const profile = yield call(update, {_id, token, user: {name: name}})

        if (!profile.error) {
            yield call(updateUser, {
                user: {
                    name: profile.name,
                    email: profile.email,
                    _id: profile._id,
                    role: profile.role
                }
            })
            yield put({type: 'user/updateSuccess', payload: profile})
            yield put(push(profile?.role === 1 ? '/admin' : '/user/dashboard'))
        } else {
            yield put({type: 'user/updateFailure', profile})
        }

    } catch (error) {
        yield put({type: 'user/updateFailure', error})
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
    yield takeEvery('user/updateProfile', updateProfile)
}