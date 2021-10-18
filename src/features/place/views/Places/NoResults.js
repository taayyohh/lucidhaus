import {searchLocation} from 'config/icons'
import React            from 'react'
import Div              from 'shared/Basic/Div'
import Icon             from 'shared/Basic/Icon'

const NoResults = () => {
    return (
        <Div theme={{
            width: 300,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            size: 32
        }}>
            <Icon
                icon={searchLocation}
                theme={{size: 60, margin: '0 auto'}}
            />
            Oops! Looks like there are no results for this search, please try searching again!
        </Div>
    )
}

export default NoResults
