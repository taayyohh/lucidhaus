import {takeLatest} from '@redux-saga/core/effects'
import {push}       from 'connected-react-router'
import {
    call,
    put
}                   from 'redux-saga/effects'
import {
    addBusiness,
    deleteBusiness,
    updateBusiness
}                   from '../../services/apiAdmin'
import {
    getSignedRequest,
    uploadFile
}                   from '../../services/apiS3'

export function* createBusiness({payload}) {
    const {_id, token, name, description, photo, image} = payload

    //add to formdata so api can read
    const business = new FormData()
    business.set('name', name)
    business.set('description', description)
    business.set('photo', photo)

    const s3Payload = yield call(getSignedRequest, {croppedImage: image})
    if (!!s3Payload.signedRequest) {
        const uploadImage = yield call(uploadFile, {file: image, signedRequest: s3Payload.signedRequest})
        console.log('upload', uploadImage)

        const createdBusiness = yield call(addBusiness, {userId: _id, token: token, business: business})
        console.log('createdBusiness', createdBusiness)
        if (!createdBusiness.error) {
            yield put({type: 'admin/createBusinessesSuccess', createdBusiness})
            yield put(push('/admin/marketplace/update/' + createdBusiness.slug))

        } else {
            yield put({type: 'admin/createBusinessesFailure', payload})

        }

    }
}

export function* updateBusinessDetail({payload}) {
    const {slug, _id, token, name, description, photo, image} = payload

    //add to formData so api can read
    const updatedBusiness = new FormData()
    updatedBusiness.set('name', name)
    updatedBusiness.set('description', description)
    updatedBusiness.set('photo', photo)

    if (!!image) {
        const s3Payload = yield call(getSignedRequest, {croppedImage: image})
        if (!!s3Payload.signedRequest) {
            const uploadImage = yield call(uploadFile, {file: image, signedRequest: s3Payload.signedRequest})
            console.log('upload', uploadImage)
        }
    }

    try {
        const updated = yield call(updateBusiness, {slug: slug, _id: _id, token: token, business: updatedBusiness})
        if (!updated.error) {
            yield put({type: 'business/updateBusinessSuccess', payload: updated})
        } else {
            yield put({type: 'business/updateBusinessFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'business/updateBusinessFailure'})
    }
}

export function* attemptDestroyBusiness({payload}) {
    yield put({type: 'admin/confirmDestroyBusiness', payload: payload})
}

export function* destroyBusiness({payload}) {
    const destroyed = yield call(deleteBusiness, payload)
    if (!destroyed.error) {
        yield put({type: 'admin/destroyBusinessSuccess'})
        yield put(push('/admin/marketplace'))
    } else {
        yield put({type: 'admin/destroyBusinessFailure'})
    }
}

export function* destroyBusinessSuccess() {
    yield put(push('/admin/marketplace'))
}/* Business */
export function* watchCreateBusiness() {
    yield takeLatest('admin/createBusiness', createBusiness)
}

export function* watchAttemptDestroyBusiness() {
    yield takeLatest('admin/attemptDestroyBusiness', attemptDestroyBusiness)
}

export function* watchDestroyBusiness() {
    yield takeLatest('admin/destroyBusiness', destroyBusiness)
}

export function* watchDestroyBusinessSuccess() {
    yield takeLatest('admin/attemptDestroyBusinessSuccess', destroyBusinessSuccess)
}

export function* watchUpdateBusiness() {
    yield takeLatest('admin/updateBusiness', updateBusinessDetail)
}