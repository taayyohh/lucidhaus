import React, {useEffect} from 'react'
import {useSelector}      from 'react-redux'
import Div           from 'shared/Basic/Div'

const VerifyEmail = () => {
    const {slug} = useSelector(state => state.site)

    useEffect(() => {
        console.log('slug', slug)

    }, [slug])


    return (
        <Div>hi</Div>
    )
}

export default VerifyEmail
