import {push} from 'connected-react-router'
import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects'
import {
    addCollaborator,
    deleteCollaborator,
    updateCollaborator
} from 'services/apiCollaborator'
import {
    getSignedRequest,
    uploadFile
} from 'services/apiS3'

export function* createCollaborator({payload}) {
    const {_id, token, name, description, photo, photoFile, isPublished} = payload

    //add to formdata so api can read
    const collaborator = new FormData()
    collaborator.set('name', name)
    collaborator.set('description', description)
    collaborator.set('photo', photo)
    collaborator.set('isPublished', isPublished)

    const s3Payload = yield call(getSignedRequest, photoFile)
    if (!!s3Payload.signedRequest) {
        yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})

        const createdCollaborator = yield call(addCollaborator, {_id: _id, token: token, collaborator: collaborator})
        if (!createdCollaborator.error) {
            yield put({type: 'collaborator/getCollaborators'})
            yield put(push('/admin/collaborators/update/' + createdCollaborator.slug))

        } else {
            yield put({type: 'admin/createCollaboratorsFailure', payload})

        }

    }
}

export function* updateCollaboratorDetail({payload}) {
    const {slug, _id, token, name, description, photo, isPublished, photoFile} = payload

    //add to formData so api can read
    const updatedCollaborator = new FormData()
    updatedCollaborator.set('name', name)
    updatedCollaborator.set('description', description)
    updatedCollaborator.set('photo', photo)
    updatedCollaborator.set('isPublished', isPublished)

    if (!!photoFile) {
        const s3Payload = yield call(getSignedRequest, photoFile)
        if (!!s3Payload.signedRequest) {
            yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
        }
    }

    try {
        const updated = yield call(updateCollaborator, {slug: slug, _id: _id, token: token, collaborator: updatedCollaborator})
        if (!updated.error) {
            yield put({type: 'collaborator/updateCollaboratorSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated Collaborator',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'collaborator/updateCollaboratorFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'collaborator/updateCollaboratorFailure'})
    }
}

export function* attemptDestroyCollaborator({payload}) {
    yield put({type: 'admin/confirmDestroyCollaborator', payload: payload})
}

export function* destroyCollaborator({payload}) {
    const destroyed = yield call(deleteCollaborator, payload)
    const {objectID} = payload

    if (!destroyed.error) {
        yield put({type: 'admin/destroyCollaboratorSuccess'})
        yield put({type: 'collaborator/destroyCollaboratorSuccess', payload: {objectID}})
        yield put({type: 'collaborator/getCollaborators'})
        yield put(push('/admin/collaborators'))
    } else {
        yield put({type: 'admin/destroyCollaboratorFailure'})
    }
}

export function* destroyCollaboratorSuccess() {
    yield put(push('/admin/collaborators'))
}

/**
 *
 *
 * ADMIN COLLABORATOR WATCHERS
 *
 *
 */

export function* watchCreateCollaborator() {
    yield takeLatest('admin/createCollaborator', createCollaborator)
}

export function* watchAttemptDestroyCollaborator() {
    yield takeLatest('admin/attemptDestroyCollaborator', attemptDestroyCollaborator)
}

export function* watchDestroyCollaborator() {
    yield takeLatest('admin/destroyCollaborator', destroyCollaborator)
}

export function* watchDestroyCollaboratorSuccess() {
    yield takeLatest('admin/attemptDestroyCollaboratorSuccess', destroyCollaboratorSuccess)
}

export function* watchUpdateCollaborator() {
    yield takeLatest('admin/updateCollaborator', updateCollaboratorDetail)
}
