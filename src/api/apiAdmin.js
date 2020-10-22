import {API} from '../config'


/**
 s3
 */
export const uploadFile = (file, signedRequest, url) => {
    return fetch(signedRequest, {
        method: 'PUT',
        body: file
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))

}

export const getSignedRequest = (userId, token, file, directory) => {
    return fetch(`${API}/sign-s3?file-name=${encodeURIComponent(file.name)}&file-type=${file.type}&directory=${directory}`, {
        method: 'GET',
    }).then(response => {
        return response.json()
    }).then(response => {
        uploadFile(file, response.signedRequest, response.url)
    }).catch(err => {
        console.log(err)
    })
}


/**
 * to perform crud on category
 * get all categories
 * get a single category
 * update single category
 * delete single category
 */
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
    }).catch(err => {
        console.log(err)
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
        .catch(err => console.log(err))
}

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        }).catch(err => {
            console.log(err)
        })
}

export const getCategory = categoryId => {
    return fetch(`${API}/category/${categoryId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}




/**
 * to perform crud on product
 * get all products
 * get a single product
 * update single product
 * delete single product
 */
export const createProduct = (userId, token, product) => {
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
    }).catch(err => {
        console.log(err)
    })
}

export const getProducts = () => {
    return fetch(`${API}/products?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
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
        .catch(err => console.log(err))
}

export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const updateProduct = (productId, userId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
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
        .catch(err => console.log(err))
}


/**
 * to perform crud on admin
 * get all businesses
 * get a single admin
 * update single admin
 * delete single admin
 */
export const createBusiness = (userId, token, business) => {
    return fetch(`${API}/business/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: business
    }).then(response => {
        return response.json()
    }).catch(err => {
        console.log(err)
    })
}

export const getBusinesses = () => {
    return fetch(`${API}/businesses?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const deleteBusiness = (businessId, userId, token) => {
    return fetch(`${API}/business/${businessId}/${userId}`, {
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
        .catch(err => console.log(err))
}

export const getBusiness = slug => {
    return fetch(`${API}/business/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const updateBusiness = (slug, userId, token, business) => {
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
        .catch(err => console.log(err))
}


/**
 * Manage ManageOrders
 */

export const listOrders = (userId, token) => {
    return fetch(`${API}/order/list/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            console.log(response)
            return response.json()
        }).catch(err => {
            console.log(err)
        })
}

export const getStatusValues = (userId, token) => {
    return fetch(`${API}/order/status-values/${userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json()
        }).catch(err => {
            console.log(err)
        })
}

export const updateOrderStatus = (userId, token, orderId, status) => {
    return fetch(`${API}/order/${orderId}/status/${userId}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({status, orderId})
    })
        .then(response => {
            console.log(response)
            return response.json()
        }).catch(err => {
            console.log(err)
        })
}
