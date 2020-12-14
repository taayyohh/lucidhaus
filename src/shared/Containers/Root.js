import React, {useEffect}   from 'react'
import {HelmetProvider}     from 'react-helmet-async'
import {
    useDispatch,
    useSelector
}                           from 'react-redux'
import PageFrame            from 'shared/Layout/PageFrame'
import TransitionOverlay    from 'shared/Layout/TransitionOverlay'
import LayoutSwitch         from './LayoutSwitch'
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
                </LayoutSwitch> : <TransitionOverlay/>
            }
        </>
    )
}

export default Root