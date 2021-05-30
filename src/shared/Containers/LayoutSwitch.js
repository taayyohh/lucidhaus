import {breakpointUpperLimit}     from 'config/styles'
import {useCallback, useEffect}   from 'react'
import {useDispatch, useSelector} from 'react-redux'

const getLayout = () => {
    if (window.innerWidth < breakpointUpperLimit.mobile)
        return 'mobile'
    else if (window.innerWidth < breakpointUpperLimit.tablet)
        return 'tablet'
    else if (window.innerWidth < breakpointUpperLimit.small)
        return 'small'
    else if (window.innerWidth <= breakpointUpperLimit.large)
        return 'large'
    return 'xlarge'
}

const LayoutSwitch = ({children}) => {
    let {layout} = useSelector(state => state.site)
    const dispatch = useDispatch()


    const setLayout = useCallback(() => {
        if (getLayout() !== layout)
            dispatch({type: 'site/setLayout', payload: getLayout()})

    }, [layout, dispatch])

    useEffect(() => {
        window.addEventListener('resize', setLayout)
        setLayout()

        return () => window.removeEventListener('resize', setLayout)
    }, [setLayout])

    return children
}

export default LayoutSwitch
