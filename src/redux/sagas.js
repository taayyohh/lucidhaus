import {takeLatest}         from '@redux-saga/core/effects'
import {
    all,
    put,
    takeEvery
}                           from 'redux-saga/effects'
import {stripTrailingSlash} from '../utils/url'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
    console.log('Hello Sagas!')
}

/**
 * Generator function that manages what should happen when the URL changes via react-router.
 *
 * @param {object} payload
 */
function* pathChange({payload}) {
    // stripping trailing slash by default
    const {pathname, search} = payload.location

    let slug = stripTrailingSlash(pathname)

    yield put({
        type: 'REQUEST_DATA',
        pathname: slug,
        search: search
    })
}



// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
 //   yield takeLatest('@@router/LOCATION_CHANGE', pathChange)

    yield all([
        helloSaga(),
       // watchIncrementAsync()
    ])
}
