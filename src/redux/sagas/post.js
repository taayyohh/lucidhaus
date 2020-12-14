import {
    call,
    put,
    takeEvery
} from 'redux-saga/effects'
import {
    getPost,
    getPosts
} from 'services/apiAdmin'

/**
 *
 *
 * @param POST
 *
 *
 */


export function* getPostsDetail() {
    try {
        const payload = yield call(getPosts)
        if (!payload.error) {
            yield put({type: 'post/getPostsSuccess', payload})
        } else {
            yield put({type: 'post/getPostsFailure', payload})
        }
    } catch (error) {
        yield put({type: 'admin/getPostsFailure', error})
    }
}

export function* getPostDetail({payload}) {
    try {
        const post = yield call(getPost, payload)
        if (!post.error) {
            yield put({type: 'post/getPostSuccess', payload: post})
        } else {
            yield put({type: 'post/getPostFailure', payload: post})
        }
    } catch (error) {
        yield put({type: 'post/getPostFailure'})
    }
}

/**
 *
 *
 * POST WATCHERS
 *
 *
 */

export function* watchGetMarketplace() {
    yield takeEvery('post/getPosts', getPostsDetail)
}

export function* watchGetPostDetail() {
    yield takeEvery('post/getPost', getPostDetail)
}