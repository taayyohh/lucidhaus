import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector}   from 'react-redux'
import Div                        from 'shared/Basic/Div'
import ContentWrapper from 'shared/Layout/ContentWrapper'

const Help = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const [upload, setUpload] = useState(false)

    const jsons = [

    ]


    useEffect(() => {
        const doSetTimeout = (i) => {
            setTimeout(() => {

            }, 3000);
        }
        // if(upload)
        //     dispatch({
        //         type: 'place/createPlaceFromBoone',
        //         payload: {
        //             boonePlace: json,
        //             _id: _id,
        //             token: token
        //         }
        //     })

    }, [upload])


    return (
        <ContentWrapper>
            <Div>Help page</Div>
            <Div onClick={() => setUpload(true)}>
                Upload
            </Div>


        </ContentWrapper>
    )
}

export default Help
