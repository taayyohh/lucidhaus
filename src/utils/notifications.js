import React from 'react'
import Div   from '../shared/Basic/Div'
import H2    from '../shared/Basic/H2'

export const showError = error => (
    <Div theme={{display: error ? '' : 'none'}}>
        {error}
    </Div>
)

export const showSuccess = success => (
    <Div theme={{display: success ? '' : 'none'}}>
        <H2> {`${success}`} has been created</H2>
    </Div>
)

export const showLoading = loading => (
    loading && (
        <Div>
            <H2>Loading</H2>
        </Div>
    )
)