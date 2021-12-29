import {push}                                     from 'connected-react-router'
import {addProduct, deleteProduct, updateProduct} from 'features/shop/services/product'
import {getSignedRequest, uploadFile}             from 'features/site/services/s3'
import {call, put, takeLatest}                    from 'redux-saga/effects'
import {setFormData}                              from 'utils/abstractions/setFormData'
import {updateItem}                               from 'utils/cartHelpers'

export function* createProduct({payload}) {
    const {_id, token, name, description, photo, photoFile, quantity, price, internationalShippingCost, isPublished, category} = payload

    //add to formdata so api can read
    const product = new FormData()
    const fields = [{name}, {description}, {photo}, {quantity}, {price}, {internationalShippingCost}, {category}, {isPublished}]
    for (let field of fields)
        setFormData(product, field)

    const s3Payload = yield call(getSignedRequest, photoFile)
    if (!!s3Payload.signedRequest) {
        //TODO: implement error catch
        yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
        const createdProduct = yield call(addProduct, {_id, token, product})

        if (!createdProduct.error) {
            yield put({type: 'shop/getShop'})
            yield put(push('/admin/shop/update/' + createdProduct.slug))

        } else {
            yield put({type: 'shop/createProductFailure', payload})

        }

    } else {
    }
}

export function* updateProductDetail({payload}) {
    const {slug, _id, token, name, description, photo, photoFile, quantity, price, internationalShippingCost, isPublished, category} = payload

    //add to formData so api can read
    const updatedProduct = new FormData()
    const fields = [{name}, {description}, {photo}, {quantity}, {price}, {category}, {internationalShippingCost}, {isPublished}]
    for (let field of fields)
        setFormData(updatedProduct, field)

    if (!!photoFile) {
        const s3Payload = yield call(getSignedRequest, photoFile)
        if (!!s3Payload.signedRequest) {
            yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
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
    yield takeLatest('shop/createProduct', createProduct)
}

export function* watchUpdateProduct() {
    yield takeLatest('shop/updateProduct', updateProductDetail)
}

export function* watchUpdateProductQuantity() {
    yield takeLatest('shop/updateProductQuantity', updateProductQuantity)
}
