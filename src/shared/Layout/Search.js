import {placeSearchField}                                   from 'features/place/admin/fields/search'
import {placeSearchFormWrapperStyle, placesSearchFormStyle} from 'features/place/views/styles'
import React, {useContext, useEffect}                       from 'react'
import {useDispatch, useSelector}                           from 'react-redux'
import Div                                                  from 'shared/Basic/Div'
import {mapContext}                                         from 'shared/Containers/MapController'
import {searchContext}                                      from 'shared/Containers/SearchController'
import Form                                                 from 'shared/Fields/Form'
import {unslugify}                                          from 'utils/helpers'

const Search = ({theme}) => {
    const dispatch = useDispatch()
    const {coords} = useContext(mapContext)
    const {placesIndex} = useContext(searchContext)
    const {slug, url} = useSelector(state => state.site)
    const radius = 10000

    useEffect(() => {
        if (url.includes('search')) {
            dispatch({
                type: 'place/searchAllPlaces',
                payload: {
                    longitude: coords.lon,
                    latitude: coords.lat,
                    radius: radius,
                    index: placesIndex,
                    input: unslugify(slug)
                }
            })
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div theme={{...placeSearchFormWrapperStyle, ...theme}}>
            <Form
                theme={{...placesSearchFormStyle, ...theme.form}}
                initialValues={{input: url.includes('search') ? unslugify(slug) : ''}}
                fields={placeSearchField}
                dispatchAction={'place/searchAllPlaces'}
                formHeading={'Search'}
                buttonText={"Let’s go"}
                payload={{
                    longitude: coords.lon,
                    latitude: coords.lat,
                    radius: radius,
                    index: placesIndex
                }}
            />
        </Div>
    )
}

Search.defaultProps = {
    theme: {}
}

export default Search
