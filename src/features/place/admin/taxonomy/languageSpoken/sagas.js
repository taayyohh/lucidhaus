import {takeEvery}                                from '@redux-saga/core/effects'
import {getLanguageSpoken, getLanguageSpokenList} from 'features/place/admin/taxonomy/languageSpoken/services'
import {call, put}                                from 'redux-saga/effects'
import {createEntity, updateEntity}               from 'utils/abstractions'

export function* createLanguageSpoken({payload}) {
    const {_id, token, name, description,} = payload

    //add to formdata so api can read
    const languageSpoken = new FormData()
    languageSpoken.set('name', name)
    languageSpoken.set('description', description)

    const createdLanguageSpoken = yield call(createEntity, {
        _id: _id,
        token: token,
        body: languageSpoken,
        slug: 'language-spoken'
    })
    if (!createdLanguageSpoken.error) {
        console.log('success', createdLanguageSpoken)
        yield put({type: 'place/listLanguageSpoken'})
        // yield put(push('/admin/places/update/' + crea.slug))

    } else {
        yield put({type: 'place/createLanguageSpokenFailure', payload})

    }
}

export function* listLanguageSpoken() {
    try {
        const payload = yield call(getLanguageSpokenList)
        if (!payload.error) {
            yield put({type: 'place/listLanguageSpokenSuccess', payload})
        } else {
            yield put({type: 'place/listLanguageSpokenFailure', payload})
        }
    } catch (error) {
        yield put({type: 'place/listLanguageSpokenFailure', error})
    }
}

export function* getLanguageSpokenDetail({payload}) {
    try {
        const languageSpoken = yield call(getLanguageSpoken, payload)
        if (!languageSpoken.error) {
            yield put({type: 'place/getLanguageSpokenSuccess', payload: languageSpoken})
        } else {
            yield put({type: 'place/getLanguageSpokenFailure', payload: languageSpoken})
        }
    } catch (error) {
        yield put({type: 'place/getLanguageSpokenFailure', payload: error})
    }
}

export function* updateLanguageSpokenDetail({payload}) {
    const {slug, _id, token, name, description} = payload

    //add to formData so api can read
    const updatedLanguageSpoken = new FormData()
    updatedLanguageSpoken.set('name', name)
    updatedLanguageSpoken.set('description', description)

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'language-spoken',
            body: updatedLanguageSpoken,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'place/updateLanguageSpokenSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated LanguageSpoken',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'place/updateLanguageSpokenFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'place/updateLanguageSpokenFailure'})
    }
}


export function* watchCreateLanguageSpoken() {
    yield takeEvery('place/createLanguageSpoken', createLanguageSpoken)
}

export function* watchGetLanguageSpokenList() {
    yield takeEvery('place/listLanguageSpoken', listLanguageSpoken)
}

export function* watchGetLanguageSpokenDetail() {
    yield takeEvery('place/getLanguageSpoken', getLanguageSpokenDetail)
}

export function* watchUpdateLanguageSpokenDetail() {
    yield takeEvery('place/updateLanguageSpoken', updateLanguageSpokenDetail)
}

