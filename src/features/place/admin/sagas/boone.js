import {push}                  from 'connected-react-router'
import {addPlaceFromBoone}     from 'features/place/services'
import {call, put, takeLatest} from 'redux-saga/effects'
import {createEntity}          from 'utils/abstractions/crud'
import {setFormData}           from 'utils/abstractions/setFormData'

export function* createPlaceFromBoone({payload}) {
    const {
        _id,
        token,
        boonePlace
    } = payload

    const booneCategories = []
    for (const category of boonePlace.categories) {
        const placeCategory = new FormData()
        const fields = [{name: category.name}, {description: category.name}]
        for (let field of fields)
            setFormData(placeCategory, field)

        const createdPlaceCategory = yield call(createEntity, {
            _id: _id,
            token: token,
            body: placeCategory,
            slug: 'place-category'
        })

        if (!createdPlaceCategory.error) {
            booneCategories.push(createdPlaceCategory.id)
        } else {
            if (!!createdPlaceCategory.error.id)
                booneCategories.push(createdPlaceCategory.error.id)
        }
    }

    const hours = []
    if (!!boonePlace?.hours?.['<default>']) {
        const array = Object.entries(boonePlace?.hours?.['<default>'])
        for (const entry of array) {
            hours.push(`&${entry[0]}/${entry[1]}`)
        }
    }

    const place = new FormData()
    const fields = [
        {booneId: boonePlace.id},
        {name: boonePlace.name},
        {address1: boonePlace?.locations?.[0].address1},
        {address2: boonePlace?.locations?.[0].address2},
        {city: boonePlace?.locations?.[0].city},
        {categories: booneCategories},
        {hours: hours},
        {zip: boonePlace?.locations?.[0].postal_code},
        {country: boonePlace?.locations?.[0].country},
        {state: boonePlace?.locations?.[0].state},
        {latitude: boonePlace?.locations?.[0].latitude},
        {longitude: boonePlace?.locations?.[0].longitude},
        {website: boonePlace?.contact_info.website}
    ]
    for (let field of fields)
        setFormData(place, field)

    const createdPlace = yield call(
        addPlaceFromBoone,
        {
            _id: _id,
            token: token,
            place: place
        }
    )
    if (!createdPlace.error) {
        yield put(push(`/places/${createdPlace.slug}`))
        yield put({type: 'place/getPlace', payload: {slug: createdPlace.slug}})


        // yield put({type: 'place/getPlaces'})
        // yield put(push(`/` + createdPlace.slug))
        yield put({type: 'place/createPlaceFromBooneSuccess', payload: {createdPlace}})

    } else {
        yield put(push(`/places/${createdPlace.error}`))
        // yield put({type: 'place/createPlaceFromBooneFailure', payload: {createdPlace}})
    }

}


/**
 *
 *
 * ADMIN BOONE PLACE WATCHERS
 *
 *
 */

export function* watchCreatePlaceFromBoone() {
    yield takeLatest('place/createPlaceFromBoone', createPlaceFromBoone)
}
