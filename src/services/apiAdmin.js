import {API} from '../config'


/**
 *
 *
 *
 s3
 *
 *
 *
 **/
export const uploadFile = ({file, signedRequest}) => {
    return fetch(signedRequest, {
        method: 'PUT',
        body: file
    }).then(response => {
        return response.json()
    }).catch(error => {
        return error
    })
}

export const getSignedRequest = ({croppedImage}) => {
    return fetch(`${API}/sign-s3?file-name=${encodeURIComponent(croppedImage.name)}&file-type=${croppedImage.type}`, {
        method: 'GET',
    }).then(response => {
        return response.json()
    }).catch(error => {
        return error
    })
}

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

export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    }).then(response => {
        console.log(response)
        return response.json()
    }).catch(error => {
        return error
    })
}

export const updateCategory = (categoryId, userId, token, category) => {
    return fetch(`${API}/category/${categoryId}/${userId}`, {
        method: 'PUT',
        headers: {
            // content type?
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        }).catch(error => {
            return error
        })
}

export const getCategory = categoryId => {
    return fetch(`${API}/category/${categoryId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}


/**
 * to perform crud on product
 * get all products
 * get a single product
 * update single product
 * delete single product
 */
export const addProduct = ({userId, token, product}) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(response => {
        console.log(response)
        return response.json()
    }).catch(error => {
        return error
    })
}

export const getProducts = () => {
    return fetch(`${API}/products?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

export const deleteProduct = ({slug, _id, token}) => {
    return fetch(`${API}/product/${slug}/${_id}`, {
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

export const getProduct = ({slug}) => {
    return fetch(`${API}/product/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

export const updateProduct = ({slug, userId, token, product}) => {
    return fetch(`${API}/product/${slug}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}


/**
 * to perform crud on admin
 * get all businesses
 * get a single admin
 * update single admin
 * delete single admin
 */
export const addBusiness = ({userId, token, business}) => {
    return fetch(`${API}/business/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: business
    }).then(response => {
        return response.json()
    }).catch(error => {
        return error
    })
}

export const getBusinesses = () => {
    return fetch(`${API}/businesses?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

export const deleteBusiness = ({_id, token, slug}) => {
    return fetch(`${API}/business/${slug}/${_id}`, {
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

export const getBusiness = ({slug}) => {
    return fetch(`${API}/business/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}

export const updateBusiness = ({slug, userId, token, business}) => {
    return fetch(`${API}/business/${slug}/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: business
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}


/**
 * Manage ManageOrders
 */

export const listOrders = ({_id, token}) => {
    return fetch(`${API}/order/list/${_id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json()
        }).catch(error => {
            return error
        })
}

export const listStatusValues = ({_id, token}) => {
    return fetch(`${API}/order/status-values/${_id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json()
        }).catch(error => {
            return error
        })
}

export const updateOrderStatus = ({_id, token, orderId, status}) => {
    return fetch(`${API}/order/${orderId}/status/${_id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(status)
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })
}
