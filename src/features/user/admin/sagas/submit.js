import {call, put, takeLatest} from 'redux-saga/effects'
import {submitEntity}          from 'utils/abstractions/crud'
import {setFormData}           from 'utils/abstractions/setFormData'

export function* submitPlace({payload}) {
    const {
        _id,
        token,
        address1,
        address2,
        city,
        zip,
        country,
        state,
        categories,
        communitiesServed,
        isPendingSubmission,
        name,
        website,
    } = payload

    //add to formdata so api can read
    const place = new FormData()
    const fields = [
        {address1},
        {address2},
        {city},
        {zip},
        {country},
        {state},
        {categories},
        {communitiesServed},
        {isPendingSubmission},
        {name},
        {website},
    ]

    for (let field of fields)
        setFormData(place, field)


    const submission = yield call(submitEntity, {
        slug: 'place',
        body: place,
        _id: _id,
        token: token,
    })
    if (!submission.error) {
        yield put({
            type: 'site/setNotification',
            payload: {
                notification: 'Successful Submission!',
                theme: 'green'
            }
        })
        yield put({type: 'place/getPlaces'})

    } else {
        yield put({type: 'place/submitPlaceFailure', payload})
    }


}


export function* watchSubmitPlace() {
    yield takeLatest('user/submitPlace', submitPlace)
}
