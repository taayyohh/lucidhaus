import React, {useEffect} from 'react'
import PageFrame from '../Layout/PageFrame'
import TransitionController from './TransitionController'
import {useDispatch, useSelector} from "react-redux";
import Div from "../Basic/Div";

const Root = () => {
    const {isInitialized} = useSelector(state => state.site)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'site/loadConfig'})
        // eslint-disable-next-line consistent-return
    }, [])

    return (
        <>
            {(isInitialized && (
                <TransitionController>
                    <PageFrame/>
                </TransitionController>
            )) || <Div>loading</Div>}
        </>
    )
}


export default Root