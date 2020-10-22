import React, {useEffect}   from 'react'
import {
    useDispatch,
    useSelector
}                        from 'react-redux'
import PageFrame         from '../Layout/PageFrame'
import TransitionOverlay from '../Layout/TransitionOverlay'
import LayoutSwitch      from './LayoutSwitch'
import MenuPanelController  from './MenuPanelController'
import TransitionController from './TransitionController'

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
                <LayoutSwitch>
                    <MenuPanelController>
                        <TransitionController>
                            <PageFrame/>
                        </TransitionController>
                    </MenuPanelController>
                </LayoutSwitch>

            )) ||
            <TransitionOverlay/>
            }
        </>
    )
}

export default Root