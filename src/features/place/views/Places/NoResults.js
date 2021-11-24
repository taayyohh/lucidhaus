import {colorPalette}               from 'config/styles'
import React, {useEffect, useState} from 'react'
import Div                          from 'shared/Basic/Div'
import Span              from 'shared/Basic/Span'

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
            display: 'inline-flex',
            size: 32
        }}>
            {load && (
                <>
                    <Span>No Results for </Span>
                    <Span
                        theme={{color: colorPalette.seaGreen, marginLeft: [10, .7, 10]}}
                    >
                        {search}
                    </Span>.
                </>
            )}
        </Div>
    )
}

export default NoResults
