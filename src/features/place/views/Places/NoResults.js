import {searchLocation} from 'config/icons'
import React            from 'react'
import Div              from 'shared/Basic/Div'
import Icon             from 'shared/Basic/Icon'
import {colorPalette}   from '../../../../config/styles'
import Span             from '../../../../shared/Basic/Span'

const NoResults = ({search}) => {
    return (
        <Div theme={{
            width: 800,
            margin: '0 auto',
            display: 'inline-flex',
            size: 32
        }}>
            <Icon
                icon={searchLocation}
                theme={{size: 60, margin: '0 auto', color: colorPalette.seaGreen}}
            />
            <Span>No Results for </Span> <Span theme={{color: colorPalette.seaGreen, marginLeft: [10, .7, 10]}}>{search}</Span>.
        </Div>
    )
}

export default NoResults
