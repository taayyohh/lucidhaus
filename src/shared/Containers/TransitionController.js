import {useAnimation}     from 'framer-motion'
import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState
}                         from 'react'
import {useSelector}      from 'react-redux'
import {createSelector}   from 'reselect'
import {overlayFadeout}   from '../animations/transitions'
import {menuPanelContext} from './MenuPanelController'

export const TransitionAnimations = createContext({})

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop)
        window.scrollTo(0, c - c / 8)
    }
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
        await setTimeout(() => scrollToTop(), 0)
        await contentAnimation.set({translateX: '-2%'})
        await overlayAnimation.start(overlayFadeout)
        await contentAnimation.start({
            opacity: 1,
            translateX: 0,
            transition: {
                duration: .1,
                ease: 'easeOut',
            }
        })

    }, [overlayAnimation])

    const pageOut = useMemo(() => async (currentPathName) => {
        await setPanel(null)
        // await overlayAnimation.set({height: 0, opacity: 1})
        // await overlayAnimation.start({
        //     opacity: 1,
        //     height: '100vh',
        //     zIndex: 10,
        //     transition: {
        //         duration: .3,
        //         //  ease: 'easeOut',
        //     }
        // })
        await contentAnimation.start({
            opacity: 0,
            translateX: '2%',
            transition: {
                duration: .1,
                ease: 'easeOut',
            }
        })
        await setCurrentPath(currentPathName)
        await pageInit()
    }, [setPanel, pageInit])

    useEffect(() => {
        if (pathname !== currentPath) {
            pageOut(pathname)
        }

    }, [pathname, currentPath, pageOut])

    useEffect(() => {
        pageInit()

        // eslint-disable-next-line react-hooks/exhaustive-deps
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