import {addPlaceSubmissionToUserHistory} from 'features/user/services'
import {call, put, takeLatest}           from 'redux-saga/effects'
import {submitEntity}                    from 'utils/abstractions/crud'
import {setFormData}                     from 'utils/abstractions/setFormData'

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
            type: 'user/submitPlaceSuccess',
            payload: {
                _id,
                token,
                submissionId: submission._id
            }
        })
        yield put({
            type: 'site/setNotification',
            payload: {
                notification: 'Successful Submission!',
                theme: 'green'
            }
        })

    } else {
        yield put({type: 'place/submitPlaceFailure', payload})
    }
}

export function* submitPlaceSuccess({payload}) {
    const {_id, token, submissionId} = payload

    const place = new FormData()
    const fields = [
        {submissionId}
    ]

    for (let field of fields)
        setFormData(place, field)


    const submission = yield call(addPlaceSubmissionToUserHistory, {
        _id,
        token,
        place
    })

    if (!submission.error) {
        console.log('submission', submission)
        // yield put({
        //     type: 'user/getUser',
        //     payload: {
        //         slug: slug,
        //         _id: _id,
        //         token: token
        //     }
        // })
    }


}


export function* watchSubmitPlace() {
    yield takeLatest('user/submitPlace', submitPlace)
}

export function* watchSubmitPlaceSuccess() {
    yield takeLatest('user/submitPlaceSuccess', submitPlaceSuccess)
}
