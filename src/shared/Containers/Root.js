import React, {useEffect}         from 'react'
import {HelmetProvider}           from 'react-helmet-async'
import {useDispatch, useSelector} from 'react-redux'
import PlayerController           from 'shared/Containers/PlayerController'
import Overlay                    from 'shared/Layout/Overlay'
import PageFrame                  from 'shared/Layout/PageFrame'
import LayoutSwitch               from './LayoutSwitch'
import MapController              from './MapController'
import MenuPanelController        from './MenuPanelController'
import SearchController           from './SearchController'
import TransitionController       from './TransitionController'


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
                    <PlayerController>
                        <MapController>
                            <MenuPanelController>
                                <TransitionController>
                                    <SearchController>
                                        <HelmetProvider>
                                            <PageFrame/>
                                        </HelmetProvider>
                                    </SearchController>
                                </TransitionController>
                            </MenuPanelController>
                        </MapController>
                    </PlayerController>
                </LayoutSwitch> : <Overlay/>
            }
        </>
    )
}

export default Root