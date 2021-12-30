import React, {useEffect} from 'react'
import {useSelector}      from 'react-redux'
import Div                from 'shared/Basic/Div'

const Search = ({theme}) => {
    const {url} = useSelector(state => state.site)

    useEffect(() => {
        if (url.includes('search')) {

        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div>

        </Div>
    )
}

Search.defaultProps = {
    theme: {}
}

export default Search
