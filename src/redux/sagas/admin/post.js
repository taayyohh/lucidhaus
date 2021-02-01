import {push} from 'connected-react-router'
import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects'
import {
    addPost,
    deletePost,
    updatePost
} from 'services/apiPost'
import {
    getSignedRequest,
    uploadFile
} from 'services/apiS3'

export function* createPost({payload}) {
    const {_id, token, name, description, photo, primaryArtist, photoFile, isPublished} = payload

    //add to formdata so api can read
    const post = new FormData()
    post.set('name', name)
    post.set('description', description)
    post.set('photo', photo)
    post.set('isPublished', isPublished)
    if(!!primaryArtist) {
        post.set('primaryArtist', primaryArtist)
    }

    const s3Payload = yield call(getSignedRequest, photoFile)
    if (!!s3Payload.signedRequest) {
        const uploadImage = yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
        console.log('upload', uploadImage)

        const createdPost = yield call(addPost, {_id, token: token, post: post})
        console.log('createdPost', createdPost)
        if (!createdPost.error) {
            yield put({type: 'post/getPosts'})
            yield put(push('/admin/posts/update/' + createdPost.slug))

        } else {
            yield put({type: 'admin/createPostsFailure', payload})

        }

    }
}

export function* updatePostDetail({payload}) {
    const {slug, _id, token, name, description, photo, primaryArtist, isPublished, photoFile} = payload

    //add to formData so api can read
    const updatedPost = new FormData()
    updatedPost.set('name', name)
    updatedPost.set('description', description)
    updatedPost.set('photo', photo)
    updatedPost.set('isPublished', isPublished)
    if(!!primaryArtist) {
        updatedPost.set('primaryArtist', primaryArtist)
    }

    if (!!photoFile) {
        const s3Payload = yield call(getSignedRequest, photoFile)
        if (!!s3Payload.signedRequest) {
            const uploadImage = yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
            console.log('upload', uploadImage)
        }
    }

    try {
        const updated = yield call(updatePost, {slug: slug, _id: _id, token: token, post: updatedPost})
        if (!updated.error) {
            yield put({type: 'post/updatePostSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated Post',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'post/updatePostFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'post/updatePostFailure'})
    }
}

export function* attemptDestroyPost({payload}) {
    yield put({type: 'admin/confirmDestroyPost', payload: payload})
}

export function* destroyPost({payload}) {
    const destroyed = yield call(deletePost, payload)
    const {objectID} = payload

    if (!destroyed.error) {
        yield put({type: 'admin/destroyPostSuccess'})
        yield put({type: 'post/destroyPostSuccess', payload: {objectID}})
        yield put({type: 'post/getPosts'})
        yield put(push('/admin/posts'))
    } else {
        yield put({type: 'admin/destroyPostFailure'})
    }
}

export function* destroyPostSuccess() {
    yield put(push('/admin/posts'))
}

/**
 *
 *
 * ADMIN POST WATCHERS
 *
 *
 */

export function* watchCreatePost() {
    yield takeLatest('admin/createPost', createPost)
}

export function* watchAttemptDestroyPost() {
    yield takeLatest('admin/attemptDestroyPost', attemptDestroyPost)
}

export function* watchDestroyPost() {
    yield takeLatest('admin/destroyPost', destroyPost)
}

export function* watchDestroyPostSuccess() {
    yield takeLatest('admin/attemptDestroyPostSuccess', destroyPostSuccess)
}

export function* watchUpdatePost() {
    yield takeLatest('admin/updatePost', updatePostDetail)
}