import {push}                         from 'connected-react-router'
import {deletePlace}                  from 'features/place/services'
import {getSignedRequest, uploadFile} from 'features/site/services/s3'
import {call, put, takeLatest}        from 'redux-saga/effects'
import {createEntity, updateEntity}   from 'utils/abstractions/crud'
import {setFormData}                  from 'utils/abstractions/setFormData'

export function* createPlace({payload}) {
    const {
        _id,
        token,
        accessibleDoorway,
        audioAvailable,
        address1,
        address2,
        city,
        zip,
        country,
        state,
        latitude,
        longitude,
        bathrooms,
        braille,
        brickAndMortar,
        categories,
        communitiesServed,
        description,
        foodOptions,
        isPublished,
        isRestaurant,
        languageSpoken,
        largeAdaptiveEquipment,
        name,
        onlyAccessibleByStairs,
        businessOwner,
        photo,
        photoFile,
        publicTransportation,
        signLanguageAccessible,
        website,
        wheelchairElevator,
        wheelchairParking,
        wheelchairRamps,
        wheelchairRestroom,
    } = payload

    //add to formdata so api can read
    const place = new FormData()
    const fields = [
        {accessibleDoorway},
        {audioAvailable},
        {address1},
        {address2},
        {city},
        {zip},
        {country},
        {state},
        {latitude},
        {longitude},
        {bathrooms},
        {businessOwner},
        {braille},
        {brickAndMortar},
        {categories},
        {communitiesServed},
        {description},
        {foodOptions},
        {isPublished},
        {isRestaurant},
        {languageSpoken},
        {largeAdaptiveEquipment},
        {name},
        {onlyAccessibleByStairs},
        {photo},
        {publicTransportation},
        {signLanguageAccessible},
        {website},
        {wheelchairElevator},
        {wheelchairParking},
        {wheelchairRamps},
        {wheelchairRestroom}
    ]
    for (let field of fields)
        setFormData(place, field)

    const s3Payload = yield call(getSignedRequest, photoFile)
    if (!!s3Payload.signedRequest) {
        yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
        const created = yield call(createEntity, {
            slug: 'place',
            body: place,
            _id: _id,
            token: token,
        })
        if (!created.error) {
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'New Place Added!',
                    theme: 'green'
                }
            })
            yield put({type: 'place/getPlaces'})
            yield put(push('/admin/places/update/' + created.slug))

        } else {
            yield put({type: 'place/createPlacesFailure', payload})
        }

    }
}

export function* updatePlaceDetail({payload}) {
    const {
        slug,
        _id,
        token,
        accessibleDoorway,
        audioAvailable,
        address1,
        address2,
        city,
        zip,
        country,
        state,
        latitude,
        longitude,
        bathrooms,
        businessOwner,
        braille,
        brickAndMortar,
        categories,
        communitiesServed,
        description,
        foodOptions,
        isPublished,
        isRestaurant,
        languageSpoken,
        largeAdaptiveEquipment,
        name,
        onlyAccessibleByStairs,
        photo,
        photoFile,
        publicTransportation,
        signLanguageAccessible,
        website,
        wheelchairElevator,
        wheelchairParking,
        wheelchairRamps,
        wheelchairRestroom,
    } = payload

    //add to formData so api can read
    const place = new FormData()
    const fields = [
        {accessibleDoorway},
        {audioAvailable},
        {address1},
        {address2},
        {city},
        {zip},
        {country},
        {state},
        {latitude},
        {longitude},
        {bathrooms},
        {businessOwner},
        {braille},
        {brickAndMortar},
        {categories},
        {communitiesServed},
        {description},
        {foodOptions},
        {isPublished},
        {isRestaurant},
        {languageSpoken},
        {largeAdaptiveEquipment},
        {name},
        {onlyAccessibleByStairs},
        {photo},
        {publicTransportation},
        {signLanguageAccessible},
        {website},
        {wheelchairElevator},
        {wheelchairParking},
        {wheelchairRamps},
        {wheelchairRestroom}
    ]
    for (let field of fields)
        setFormData(place, field)

    if (!!photoFile) {
        const s3Payload = yield call(getSignedRequest, photoFile)
        if (!!s3Payload.signedRequest) {
            yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
        }
    }

    try {
        const updated = yield call(updateEntity,
            {
                _id: _id,
                token: token,
                parentSlug: 'place',
                slug: slug,
                body: place
            })

        if (!updated.error) {
            yield put({type: 'place/updatePlaceSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Updated Place',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'place/updatePlaceFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'place/updatePlaceFailure'})
    }
}

export function* attemptDestroyPlace({payload}) {
    yield put({type: 'place/confirmDestroyPlace', payload: payload})
}

export function* destroyPlace({payload}) {
    const destroyed = yield call(deletePlace, payload)
    const {objectID} = payload

    if (!destroyed.error) {
        // yield put({type: 'place/destroyPlaceSuccess'})
        yield put({type: 'place/destroyPlaceSuccess', payload: {objectID}})
        yield put({type: 'place/getPlaces'})
        yield put(push('/admin/places'))
    } else {
        yield put({type: 'place/destroyPlaceFailure'})
    }
}

export function* destroyPlaceSuccess() {
    yield put(push('/admin/places'))
}

export function* addReview({payload}) {
    const {celebrated, photo, photoFile, placeName, placeSlug, review, slug, safe, welcome, user, _id, placeId, token} = payload
    //add to formData so api can read
    const placeReview = new FormData()
    const fields = [
        {celebrated},
        {photo},
        {review},
        {safe},
        {welcome},
        {user},
        {place: placeId},
        {placeName},
        {placeSlug}
    ]
    for (let field of fields)
        setFormData(placeReview, field)

    if (!!photoFile) {
        const s3Payload = yield call(getSignedRequest, photoFile)
        if (!!s3Payload.signedRequest) {
            yield call(uploadFile, {file: photoFile, signedRequest: s3Payload.signedRequest})
        }
    }

    try {
        const updated = yield call(updateEntity,
            {
                _id: _id,
                token: token,
                parentSlug: 'place',
                slug: slug,
                body: placeReview
            })

        if (!updated.error) {
            yield put({type: 'place/updatePlaceSuccess', payload: updated})
            yield put({
                type: 'site/setNotification',
                payload: {
                    notification: 'Review Added',
                    theme: 'green'
                }
            })

        } else {
            yield put({type: 'place/updatePlaceFailure', payload: updated})
        }
    } catch (error) {
        yield put({type: 'place/updatePlaceFailure'})
    }


}

/**
 *
 *
 * ADMIN ARTIST WATCHERS
 *
 *
 */

export function* watchCreatePlace() {
    yield takeLatest('place/createPlace', createPlace)
}

export function* watchAttemptDestroyPlace() {
    yield takeLatest('place/attemptDestroyPlace', attemptDestroyPlace)
}

export function* watchDestroyPlace() {
    yield takeLatest('place/destroyPlace', destroyPlace)
}

export function* watchDestroyPlaceSuccess() {
    yield takeLatest('place/attemptDestroyPlaceSuccess', destroyPlaceSuccess)
}

export function* watchUpdatePlace() {
    yield takeLatest('place/updatePlace', updatePlaceDetail)
}

export function* watchAddReview() {
    yield takeLatest('place/addReview', addReview)
}
