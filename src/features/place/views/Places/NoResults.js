import React, {useEffect, useState} from 'react'
import Div                          from 'shared/Basic/Div'
import Span                         from 'shared/Basic/Span'
import {noResultsTextStyle}         from './styles'

const NoResults = ({search}) => {
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoad(true)
        }, 1500)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Div theme={{
            width: 800,
            margin: '0 auto',
            size: 32
        }}>
            {load && (
                <>
                    <Span>No Results for </Span>
                    <Span
                        theme={noResultsTextStyle}
                    >
                        {search}
                    </Span>.
                </>
            )}
        </Div>
    )
}

export default NoResults
