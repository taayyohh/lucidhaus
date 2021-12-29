import {getCollaborator, getCollaborators} from 'features/collaborator/services'
import {call, put, takeEvery}              from 'redux-saga/effects'


/**
 *
 *
 * @param POST
 *
 *
 */


export function* getCollaboratorsDetail() {
    try {
        const payload = yield call(getCollaborators)
        if (!payload.error) {
            yield put({type: 'collaborator/getCollaboratorsSuccess', payload})
        } else {
            yield put({type: 'collaborator/getCollaboratorsFailure', payload})
        }
    } catch (error) {
        yield put({type: 'admin/getCollaboratorsFailure', error})
    }
}

export function* getCollaboratorDetail({payload}) {
    try {
        const collaborator = yield call(getCollaborator, payload)
        if (!collaborator.error) {
            yield put({type: 'collaborator/getCollaboratorSuccess', payload: collaborator})
        } else {
            yield put({type: 'collaborator/getCollaboratorFailure', payload: collaborator})
        }
    } catch (error) {
        yield put({type: 'collaborator/getCollaboratorFailure'})
    }
}

/**
 *
 *
 * POST WATCHERS
 *
 *
 */

export function* watchGetCollaborators() {
    yield takeEvery('collaborator/getCollaborators', getCollaboratorsDetail)
}

export function* watchGetCollaboratorDetail() {
    yield takeEvery('collaborator/getCollaborator', getCollaboratorDetail)
}
