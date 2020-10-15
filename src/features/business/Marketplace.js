import React, {useEffect}    from 'react'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import Div                   from '../../Basic/Div'
import ShowImage             from '../../Shop/ShowImage'
import {manageBusinessStyle} from '../../themes/admin'


const Marketplace = () => {
    const {marketplace} = useSelector(state => state.business)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'business/getMarketplace'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div>
            {marketplace && marketplace.map(business => (
                <Div key={business.slug}>
                    <Div theme={manageBusinessStyle.imageWrapper}>
                        <ShowImage url={business.photo} alt={business.name} />
                    </Div>
                    <strong>{business.name}</strong>
                </Div>
            ))}
        </Div>
    )
}


export default Marketplace