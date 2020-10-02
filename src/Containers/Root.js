import React, {useEffect} from 'react'
import PageFrame from '../Layout/PageFrame'
import TransitionController from './TransitionController'
import {useDispatch, useSelector} from "react-redux";
import MenuPanelController from "./MenuPanelController";
import TransitionOverlay from "../Layout/TransitionOverlay";

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

            )) ||
                <TransitionOverlay theme={{zIndex: 20}}/>
            }
        </>
    )
}

export default Root