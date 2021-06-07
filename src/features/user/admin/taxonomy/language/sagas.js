import {takeEvery}                    from '@redux-saga/core/effects'
import {getLanguage, getLanguageList} from 'features/user/admin/taxonomy/language/services'
import {call, put}                    from 'redux-saga/effects'
import {createEntity, updateEntity}   from 'utils/abstractions'

export function* createLanguage({payload}) {
    const {_id, token, name, description,} = payload

    //add to formdata so api can read
    const language = new FormData()
    language.set('name', name)
    language.set('description', description)

    const createdLanguage = yield call(createEntity, {
        _id: _id,
        token: token,
        body: language,
        slug: 'language'
    })
    if (!createdLanguage.error) {
        console.log('success', createdLanguage)
        yield put({type: 'user/listLanguage'})
        // yield put(push('/admin/places/update/' + crea.slug))

    } else {
        yield put({type: 'user/createLanguageFailure', payload})

    }
}

export function* listLanguage() {
    try {
        const payload = yield call(getLanguageList)
        if (!payload.error) {
            yield put({type: 'user/listLanguageSuccess', payload})
        } else {
            yield put({type: 'user/listLanguageFailure', payload})
        }
    } catch (error) {
        yield put({type: 'user/listLanguageFailure', error})
    }
}

export function* getLanguageDetail({payload}) {
    try {
        const language = yield call(getLanguage, payload)
        if (!language.error) {
            yield put({type: 'user/getLanguageSuccess', payload: language})
        } else {
            yield put({type: 'user/getLanguageFailure', payload: language})
        }
    } catch (error) {
        yield put({type: 'user/getLanguageFailure', payload: error})
    }
}

export function* updateLanguageDetail({payload}) {
    const {slug, _id, token, name, description} = payload

    //add to formData so api can read
    const updatedLanguage = new FormData()
    updatedLanguage.set('name', name)
    updatedLanguage.set('description', description)

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'language',
            body: updatedLanguage,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'user/updateLanguageSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated Language',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'user/updateLanguageFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'user/updateLanguageFailure'})
    }
}


export function* watchCreateLanguage() {
    yield takeEvery('user/createLanguage', createLanguage)
}

export function* watchGetLanguageList() {
    yield takeEvery('user/listLanguage', listLanguage)
}

export function* watchGetLanguageDetail() {
    yield takeEvery('user/getLanguage', getLanguageDetail)
}

export function* watchUpdateLanguageDetail() {
    yield takeEvery('user/updateLanguage', updateLanguageDetail)
}

