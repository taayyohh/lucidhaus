import React, {createContext, useContext, useEffect, useMemo, useState} from 'react'
import {useAnimation} from "framer-motion"
import {useSelector} from "react-redux"
import {menuPanelContext} from "./MenuPanelController"
import {overlayFadeout} from '../animations/transitions'

export const TransitionAnimations = createContext({})

const TransitionController = props => {
    const overlayAnimation = useAnimation()
    const [currentPath, setCurrentPath] = useState()
    const {pathname} = useSelector(state => state.router.location)
    const {setPanel} = useContext(menuPanelContext)


    const pageInit = useMemo(() => async () => {
        setCurrentPath(pathname)
        await overlayAnimation.start(overlayFadeout)

    }, [overlayAnimation, pathname])

    const pageOut = useMemo(() => async () => {
        await setPanel('')
        await overlayAnimation.set({height: 0, opacity: 0})
        await overlayAnimation.start({
            opacity: 1,
            height: '100vh',
            transition: {
                duration: .3,
                ease: 'easeOut',
            }
        })

        pageInit()
    }, [overlayAnimation])

    useEffect(() => {
        if (pathname !== currentPath) {
            pageOut()
        }

    }, [pathname, currentPath])

    return (
        <TransitionAnimations.Provider value={{
            overlayAnimation
        }} {...props}/>
    )
}


export default TransitionController