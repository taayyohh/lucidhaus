import {push}                                                    from 'connected-react-router'
import {addCollaborator, deleteCollaborator, updateCollaborator} from 'features/collaborator/services'
import {getSignedRequest, uploadFile}                            from 'features/site/services/s3'
import {call, put, takeLatest}                                   from 'redux-saga/effects'
import {setFormData}                                             from 'utils/abstractions/setFormData'


export function* createCollaborator({payload}) {
    const {_id, token, name, description, photo, photoFile, isPublished} = payload

    //add to formdata so api can read
    const collaborator = new FormData()
    const fields = [
        {name},
        {description},
        {photo},
        {isPublished}
    ]
    for (let field of fields)
        setFormData(collaborator, field)


    const s3Payload = yield call(getSignedRequest, photoFile)
    if (!!s3Payload.signedRequest) {
        yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})

        const createdCollaborator = yield call(addCollaborator, {_id: _id, token: token, collaborator: collaborator})
        if (!createdCollaborator.error) {
            yield put({type: 'collaborator/getCollaborators'})
            yield put(push('/admin/collaborators/update/' + createdCollaborator.slug))

        } else {
            yield put({type: 'album/createCollaboratorsFailure', payload})

        }

    }
}

export function* updateCollaboratorDetail({payload}) {
    const {slug, _id, token, name, description, photo, isPublished, photoFile} = payload

    //add to formData so api can read
    const updatedCollaborator = new FormData()
    const fields = [
        {name},
        {description},
        {photo},
        {isPublished}
    ]

    for (let field of fields)
        setFormData(updatedCollaborator, field)

    if (!!photoFile) {
        const s3Payload = yield call(getSignedRequest, photoFile)
        if (!!s3Payload.signedRequest) {
            yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
        }
    }

    try {
        const updated = yield call(updateCollaborator, {
            slug: slug,
            _id: _id,
            token: token,
            collaborator: updatedCollaborator
        })
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
    yield takeLatest('album/createCollaborator', createCollaborator)
}


export function* watchUpdateCollaborator() {
    yield takeLatest('admin/updateCollaborator', updateCollaboratorDetail)
}
