import {takeEvery}                              from '@redux-saga/core/effects'
import {getBusinessOwner, getBusinessOwnerList} from 'features/place/admin/taxonomy/businessOwner/services'
import {getSignedRequest, uploadFile}           from 'features/site/services/s3'
import {call, put}                              from 'redux-saga/effects'
import {createEntity, updateEntity}             from 'utils/abstractions/crud'
import {setFormData}                            from 'utils/abstractions/setFormData'

export function* createBusinessOwner({payload}) {
    const {_id, token, avatar, avatarFile, description, email, name, tel} = payload

    //add to formdata so api can read
    const businessOwner = new FormData()
    const fields = [{avatar}, {email}, {description}, {name}, {tel}]
    for (let field of fields)
        setFormData(businessOwner, field)

    const s3Payload = yield call(getSignedRequest, avatarFile)
    if (!!s3Payload.signedRequest) {
        yield call(uploadFile, {file: avatarFile, signedRequest: s3Payload.signedRequest})

        const createdBusinessOwner = yield call(createEntity, {
            _id: _id,
            token: token,
            body: businessOwner,
            slug: 'business-owner'
        })
        if (!createdBusinessOwner.error) {
            yield put({type: 'place/listBusinessOwner'})
            // yield put(push('/admin/places/update/' + createdBusinessOwner.slug))

        } else {
            yield put({type: 'place/createBusinessOwnerFailure', payload})

        }
    }
}

export function* listBusinessOwner() {
    try {
        const payload = yield call(getBusinessOwnerList)
        if (!payload.error) {
            yield put({type: 'place/listBusinessOwnerSuccess', payload})
        } else {
            yield put({type: 'place/listBusinessOwnerFailure', payload})
        }
    } catch (error) {
        yield put({type: 'place/listBusinessOwnerFailure', error})
    }
}

export function* getBusinessOwnerDetail({payload}) {
    try {
        const businessOwner = yield call(getBusinessOwner, payload)
        if (!businessOwner.error) {
            yield put({type: 'place/getBusinessOwnerSuccess', payload: businessOwner})
        } else {
            yield put({type: 'place/getBusinessOwnerFailure', payload: businessOwner})
        }
    } catch (error) {
        yield put({type: 'place/getBusinessOwnerFailure', payload: error})
    }
}

export function* updateBusinessOwnerDetail({payload}) {
    const {slug, _id, token, name, avatar, avatarFile, email, tel, description} = payload

    //add to formData so api can read
    const businessOwner = new FormData()
    const fields = [{avatar}, {email}, {description}, {name}, {tel}]
    for (let field of fields)
        setFormData(businessOwner, field)

    if (!!avatarFile) {
        const s3Payload = yield call(getSignedRequest, avatarFile)
        if (!!s3Payload.signedRequest) {
            yield call(uploadFile, {file: avatarFile, signedRequest: s3Payload.signedRequest})
        }
    }

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'business-owner',
            body: businessOwner,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'place/updateBusinessOwnerSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated BusinessOwner',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'place/updateBusinessOwnerFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'place/updateBusinessOwnerFailure'})
    }
}


export function* watchCreateBusinessOwner() {
    yield takeEvery('place/createBusinessOwner', createBusinessOwner)
}

export function* watchGetBusinessOwnerList() {
    yield takeEvery('place/listBusinessOwner', listBusinessOwner)
}

export function* watchGetBusinessOwnerDetail() {
    yield takeEvery('place/getBusinessOwner', getBusinessOwnerDetail)
}

export function* watchUpdateBusinessOwnerDetail() {
    yield takeEvery('place/updateBusinessOwner', updateBusinessOwnerDetail)
}

