import React, {createContext, useContext, useEffect, useMemo, useState} from 'react'
import {useAnimation} from "framer-motion"
import {useSelector} from "react-redux"
import {menuPanelContext} from "./MenuPanelController"
import {overlayFadeout} from '../animations/transitions'
import {createSelector} from 'reselect'

export const TransitionAnimations = createContext({})

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    const smoothness = 8
    let val = c - c / smoothness
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop)
        window.scrollTo(0, c - c / 8)
    }

    // if (isInternetExplorer()) {
    //     if (val < smoothness) {
    //         val = 0
    //         window.scrollTo(0, val)
    //     }
    // }
}

const TransitionController = props => {
    const overlayAnimation = useAnimation()
    const contentAnimation = useAnimation()
    const {setPanel} = useContext(menuPanelContext)
    const [transitionInProgress, setTransitionInProgress] = useState(false)
    const [transitionComplete, setTransitionComplete] = useState(false)
    const pathSelector = createSelector(
        ({router}) => router.location.pathname,
        pathname => pathname
    )
    const pathname = useSelector(pathSelector)
    const [currentPath, setCurrentPath] = useState(pathname)


    const pageInit = useMemo(() => async () => {
        await overlayAnimation.start(overlayFadeout)
        await contentAnimation.start({
            opacity: 1,
            translateX: 0,
            transition: {
                duration: .2,
                ease: 'easeOut',
            }
        })
        await setTimeout(() => scrollToTop(), 0)
        await setTransitionInProgress(false)
        await setTransitionComplete(true)

    }, [overlayAnimation, pathname, setCurrentPath])

    const pageOut = useMemo(() => async (currentPathName) => {
        await setPanel('')
        await setTransitionInProgress(true)
        await overlayAnimation.set({height: 0, opacity: 1})
        await overlayAnimation.start({
            opacity: 1,
            height: '100vh',
            zIndex: 10,
            transition: {
                duration: .3,
              //  ease: 'easeOut',
            }
        })
        await setCurrentPath(currentPathName)
        await contentAnimation.set({opacity: 0, translateX: '-10%'})
        await pageInit()
    }, [overlayAnimation])

    useEffect(() => {
        if (pathname !== currentPath) {
            pageOut(pathname)
        }

    }, [pathname, currentPath])

    useEffect(() => {
         pageInit()
    }, [])


    return (
        <TransitionAnimations.Provider value={{
            overlayAnimation,
            transitionComplete,
            transitionInProgress,
            contentAnimation,
            currentPath
        }} {...props}/>
    )
}


export default TransitionController