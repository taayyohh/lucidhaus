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
import {API} from 'config/variables'


export const getProductCategory = ({slug}) =>
    fetch(`${API}/product-category/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const addProductCategory = ({_id, token, category}) =>
    fetch(`${API}/product-category/create/${_id}`, {
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


export const updateProductCategory = ({categoryId, _id, token, productCategory}) =>
    fetch(`${API}/product-category/${categoryId}/${_id}`, {
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


export const allProductCategories = () =>
    fetch(`${API}/product-categories`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        }).catch(error => {
        return error
    })


export const deleteProductCategory = ({slug, _id, token}) =>
    fetch(`${API}/product-category/${slug}/${_id}`, {
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


export const getProductCategoryList = () =>
    fetch(`${API}/product-category?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })

