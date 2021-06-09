import {takeEvery}                  from '@redux-saga/core/effects'
import {getPronoun, getPronounList} from 'features/user/admin/taxonomy/pronoun/services'
import {call, put}                  from 'redux-saga/effects'
import {createEntity, updateEntity} from 'utils/abstractions/crud'
import {setFormData}                from 'utils/abstractions/setFormData'

export function* createPronoun({payload}) {
    const {_id, token, name, description, subjectiveSingular, objectiveSingular, objectivePossessive} = payload

    //add to formdata so api can read
    const pronoun = new FormData()
    const fields = [{name}, {description}, {subjectiveSingular}, {objectiveSingular}, {objectivePossessive}]
    for (let field of fields)
        setFormData(pronoun, field)


    const createdPronoun = yield call(createEntity, {
        _id: _id,
        token: token,
        body: pronoun,
        slug: 'pronoun'
    })
    if (!createdPronoun.error) {
        yield put({type: 'user/listPronoun'})
        // yield put(push('/admin/places/update/' + crea.slug))

    } else {
        yield put({type: 'user/createPronounFailure', payload})

    }
}

export function* listPronoun() {
    try {
        const payload = yield call(getPronounList)
        if (!payload.error) {
            yield put({type: 'user/listPronounSuccess', payload})
        } else {
            yield put({type: 'user/listPronounFailure', payload})
        }
    } catch (error) {
        yield put({type: 'user/listPronounFailure', error})
    }
}

export function* getPronounDetail({payload}) {
    try {
        const pronoun = yield call(getPronoun, payload)
        if (!pronoun.error) {
            yield put({type: 'user/getPronounSuccess', payload: pronoun})
        } else {
            yield put({type: 'user/getPronounFailure', payload: pronoun})
        }
    } catch (error) {
        yield put({type: 'user/getPronounFailure', payload: error})
    }
}

export function* updatePronounDetail({payload}) {
    const {slug, _id, token, name, description, subjectiveSingular, objectiveSingular, objectivePossessive} = payload

    //add to formData so api can read
    const pronoun = new FormData()
    const fields = [{name}, {description}, {subjectiveSingular}, {objectiveSingular}, {objectivePossessive}]
    for (let field of fields)
        setFormData(pronoun, field)

    try {
        const updated = yield call(updateEntity, {
            slug: slug,
            parentSlug: 'pronoun',
            body: pronoun,
            _id: _id,
            token: token,
        })
        if (!updated.error) {
            yield put({type: 'user/updatePronounSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated Pronoun',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'user/updatePronounFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'user/updatePronounFailure'})
    }
}


export function* watchCreatePronoun() {
    yield takeEvery('user/createPronoun', createPronoun)
}

export function* watchGetPronounList() {
    yield takeEvery('user/listPronoun', listPronoun)
}

export function* watchGetPronounDetail() {
    yield takeEvery('user/getPronoun', getPronounDetail)
}

export function* watchUpdatePronounDetail() {
    yield takeEvery('user/updatePronoun', updatePronounDetail)
}

