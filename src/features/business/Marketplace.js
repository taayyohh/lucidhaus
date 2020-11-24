import React, {useEffect}        from 'react'
import {
    useDispatch,
    useSelector
}                                from 'react-redux'
import Div                       from '../../shared/Basic/Div'
import GenericCard               from '../../shared/Cards/GenericCard'
import {contentWrapperStyle}     from '../../shared/Layout/styles'
import {marketplaceWrapperStyle} from './styles'


const Marketplace = () => {
    const {marketplace} = useSelector(state => state.business)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'business/getMarketplace'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div theme={contentWrapperStyle}>
            <Div theme={marketplaceWrapperStyle}>
                {marketplace && marketplace?.map(business =>
                    <GenericCard
                        key={business.slug}
                        slug={`marketplace/${business.slug}`}
                        name={business.name}
                        photo={business.photo}
                        layoutId={business._id}
                    />
                )}
            </Div>
        </Div>
    )
}

export default Marketplace