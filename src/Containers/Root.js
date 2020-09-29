import React, {useEffect} from 'react'
import PageFrame from '../Layout/PageFrame'
import TransitionController from './TransitionController'
import {useDispatch, useSelector} from "react-redux";
import Div from "../Basic/Div";
import MenuPanelController from "./MenuPanelController";

const Root = () => {
    const {isInitialized} = useSelector(state => state.site)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'site/loadConfig'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {(isInitialized && (
                <MenuPanelController>
                    <TransitionController>
                        <PageFrame/>
                    </TransitionController>
                </MenuPanelController>

            )) || <Div>loading</Div>}
        </>
    )
}


export default Root