import {API} from '../variables/config'

/**
 *
 *
 *
 * to perform crud on category
 * get all categories
 * get a single category
 * update single category
 * delete single category
 *
 *
 *
 **/


export const getProductCategory = ({slug}) => {
    return fetch(`${API}/product-category/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

export const addProductCategory = ({_id, token, category}) => {
    return fetch(`${API}/product-category/create/${_id}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: category
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

export const updateProductCategory = ({categoryId, _id, token, productCategory}) => {
    console.log('product', productCategory)
    return fetch(`${API}/product-category/${categoryId}/${_id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: productCategory
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

export const allProductCategories = () => {
    return fetch(`${API}/product-categories`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        }).catch(error => {
            return error
        })
}

export const deleteProductCategory = ({slug, _id, token}) => {
    return fetch(`${API}/product-category/${slug}/${_id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}