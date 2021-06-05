import {push}                                     from 'connected-react-router'
import {addProduct, deleteProduct, updateProduct} from 'features/shop/services/product/product'
import {call, put, takeLatest}        from 'redux-saga/effects'
import {getSignedRequest, uploadFile} from 'features/site/services/s3'
import {updateItem}                   from 'utils/cartHelpers'

export function* createProduct({payload}) {
    const {_id, token, name, description, photo, photoFile, quantity, price, isPublished, category} = payload

    //add to formdata so api can read
    const product = new FormData()
    product.set('name', name)
    product.set('description', description)
    product.set('photo', photo)
    product.set('quantity', quantity)
    product.set('price', price)
    product.set('category', category)
    product.set('isPublished', isPublished)

    const s3Payload = yield call(getSignedRequest, photoFile)
    if (!!s3Payload.signedRequest) {
        //TODO: implement error catch
        yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
        const createdProduct = yield call(addProduct, {_id, token, product})

        if (!createdProduct.error) {
            yield put({type: 'shop/getShop'})
            yield put(push('/admin/shop/update/' + createdProduct.slug))

        } else {
            yield put({type: 'admin/createProductFailure', payload})

        }

    } else {
    }
}

export function* updateProductDetail({payload}) {
    const {slug, _id, token, name, description, photo, photoFile, quantity, price, isPublished, category} = payload

    //add to formData so api can read
    const updatedProduct = new FormData()
    updatedProduct.set('name', name)
    updatedProduct.set('description', description)
    updatedProduct.set('photo', photo)
    updatedProduct.set('quantity', quantity)
    updatedProduct.set('price', price)
    updatedProduct.set('category', category)
    updatedProduct.set('isPublished', isPublished)


    if (!!photoFile) {
        const s3Payload = yield call(getSignedRequest, photoFile)
        if (!!s3Payload.signedRequest) {
            const uploadImage = yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
            console.log('upload photoFile', uploadImage)
        }
    }

    try {
        const updated = yield call(updateProduct, {slug, _id, token, product: updatedProduct})
        if (!updated.error) {
            yield put({type: 'product/updateProductSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated Product',
                    theme: 'green'
                }
            })
        } else {
            yield put({type: 'product/updateProductFailure', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: updated.error,
                    theme: 'red'
                }
            })
        }
    } catch (error) {
        yield put({type: 'product/updateProductFailure'})
    }
}

export function* attemptDestroyProduct({payload}) {
    yield put({type: 'admin/confirmDestroyProduct', payload: payload})
}

export function* destroyProduct({payload}) {
    const destroyed = yield call(deleteProduct, payload)
    const {objectID} = payload

    if (!destroyed.error) {
        yield put({type: 'admin/destroyProductSuccess'})
        yield put({type: 'shop/destroyProductSuccess', payload: {objectID}})
        yield put({type: 'shop/getShop'})
        yield put(push('/admin/shop'))
    } else {
        yield put({type: 'admin/destroyProductFailure'})
    }
}

export function* destroyProductSuccess() {
    yield put(push('/admin/shop'))
}

export function* updateProductQuantity({payload}) {
    const cart = yield call(updateItem, payload)
    yield put({type: 'shop/updateCartSuccess', payload: {cart: cart}})
}

/**
 *
 *
 * ADMIN PRODUCT WATCHERS
 *
 *
 */



export function* watchCreateProduct() {
    yield takeLatest('admin/createProduct', createProduct)
}

export function* watchAttemptDestroyProduct() {
    yield takeLatest('admin/attemptDestroyProduct', attemptDestroyProduct)
}

export function* watchDestroyProduct() {
    yield takeLatest('admin/destroyProduct', destroyProduct)
}

export function* watchDestroyProductSuccess() {
    yield takeLatest('admin/attemptDestroyProductSuccess', destroyProductSuccess)
}

export function* watchUpdateProduct() {
    yield takeLatest('admin/updateProduct', updateProductDetail)
}

export function* watchUpdateProductQuantity() {
    yield takeLatest('shop/updateProductQuantity', updateProductQuantity)
}
