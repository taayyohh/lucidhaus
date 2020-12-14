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
import {globals}          from 'config/styles'
import {overlayFadeout}   from './animations.js/transitions'
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
    const pathSelector = createSelector(
        ({router}) => router.location.pathname,
        pathname => pathname
    )
    const pathname = useSelector(pathSelector)
    const [currentPath, setCurrentPath] = useState(pathname)


    const pageInit = useMemo(() => async () => {
        await setTimeout(() => scrollToTop(), 0)
      //  await contentAnimation.set({translateX: 0})
        await overlayAnimation.start(overlayFadeout)
        // await contentAnimation.start({
        //     opacity: 1,
        //     translateX: 0,
        //     transition: {
        //         duration: .1,
        //         ease: 'easeOut',
        //     }
        // })

    }, [overlayAnimation])

    const pageOut = useMemo(() => async (currentPathName) => {
        await setPanel(null)
        await globals.style.resetBody()
        // await contentAnimation.start({
        //     opacity: 0,
        //     translateX: '4%',
        //     transition: {
        //         duration: .2,
        //         ease: 'easeOut',
        //     }
        // })
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
            contentAnimation,
            currentPath
        }} {...props}/>
    )
}


export default TransitionController