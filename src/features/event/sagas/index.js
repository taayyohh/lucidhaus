import {getEvent, getEvents}  from 'features/event/services'
import {call, put, takeEvery} from 'redux-saga/effects'


/**
 *
 *
 * @param POST
 *
 *
 */


export function* getEventsDetail() {
    try {
        const payload = yield call(getEvents)
        if (!payload.error) {
            yield put({type: 'event/getEventsSuccess', payload})
        } else {
            yield put({type: 'event/getEventsFailure', payload})
        }
    } catch (error) {
        yield put({type: 'admin/getEventsFailure', error})
    }
}

export function* getEventDetail({payload}) {
    try {
        const event = yield call(getEvent, payload)
        if (!event.error) {
            yield put({type: 'event/getEventSuccess', payload: event})
        } else {
            yield put({type: 'event/getEventFailure', payload: event})
        }
    } catch (error) {
        yield put({type: 'event/getEventFailure'})
    }
}

/**
 *
 *
 * POST WATCHERS
 *
 *
 */

export function* watchGetEvents() {
    yield takeEvery('event/getEvents', getEventsDetail)
}

export function* watchGetEventDetail() {
    yield takeEvery('event/getEvent', getEventDetail)
}
