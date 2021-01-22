import {API} from 'config'


/**
 * to perform crud on admin
 * get all posts
 * get a single admin
 * update single admin
 * delete single admin
 */
export const addPost = ({_id, token, post}) =>
    fetch(`${API}/post/create/${_id}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: post
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const getPosts = () =>
    fetch(`${API}/posts?limit=undefined`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const deletePost = ({_id, token, slug}) =>
    fetch(`${API}/post/${slug}/${_id}`, {
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


export const getPost = ({slug}) =>
    fetch(`${API}/post/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })


export const updatePost = ({slug, _id, token, post}) =>
    fetch(`${API}/post/${slug}/${_id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: post
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        })



