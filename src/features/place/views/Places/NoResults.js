import {colorPalette} from 'config/styles'
import React          from 'react'
import Div            from 'shared/Basic/Div'
import Span           from 'shared/Basic/Span'

const NoResults = ({search}) => {
    return (
        <Div theme={{
            width: 800,
            margin: '0 auto',
            display: 'inline-flex',
            size: 32
        }}>
            <Span>No Results for </Span> <Span
            theme={{color: colorPalette.seaGreen, marginLeft: [10, .7, 10]}}>{search}</Span>.
        </Div>
    )
}

export default NoResults
