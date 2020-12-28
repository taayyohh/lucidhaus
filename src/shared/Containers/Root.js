import React, {useEffect}   from 'react'
import {HelmetProvider}     from 'react-helmet-async'
import {
    useDispatch,
    useSelector
}                           from 'react-redux'
import PageFrame    from 'shared/Layout/PageFrame'
import Overlay      from 'shared/Layout/Overlay'
import LayoutSwitch from './LayoutSwitch'
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
            {isInitialized ?
                <LayoutSwitch>
                    <MenuPanelController>
                        <TransitionController>
                            <HelmetProvider>
                                <PageFrame/>
                            </HelmetProvider>
                        </TransitionController>
                    </MenuPanelController>
                </LayoutSwitch> : <Overlay/>
            }
        </>
    )
}

export default Root