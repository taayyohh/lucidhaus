import React                                                                           from 'react'
import {useSelector}                                                                   from 'react-redux'
import Div                                                                             from 'shared/Basic/Div'
import {unslugify}                                                                     from 'utils/helpers'
import {placeQueryStyle, placeSearchResultsQueryTextStyle, placesSidebarHeadlineStyle} from './styles'

const Query = () => {
    const {slug} = useSelector(state => state.site)

    return (
        <Div theme={placeQueryStyle}>
            {(slug !== 'places' && (
                <Div theme={placeSearchResultsQueryTextStyle}>
                    <em>Search results for </em><em>&ldquo; </em>{slug ? unslugify(slug) : ''}<em> &rdquo;</em>
                </Div>
            ))}
        </Div>
    )
}

export default Query
