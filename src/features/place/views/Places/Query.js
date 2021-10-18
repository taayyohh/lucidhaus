import React                                                          from 'react'
import Div                                                            from 'shared/Basic/Div'
import {unslugify}                                                    from 'utils/helpers'
import {placeSearchResultsQueryTextStyle, placesSidebarHeadlineStyle} from './styles'

const Query = ({slug}) => {

    return (
        <Div>
            <Div theme={placesSidebarHeadlineStyle}>Celebrating places that celebrate you</Div>
            {(slug !== 'places' && (
                <Div theme={placeSearchResultsQueryTextStyle}>
                    <em>Search results for</em>: {slug ? unslugify(slug) : ''}
                </Div>
            ))}
        </Div>
    )
}

export default Query
