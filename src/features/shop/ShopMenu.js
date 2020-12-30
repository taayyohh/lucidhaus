import {
    shopCategoryListStyle,
    shopCategoryStyle,
    shopHeadingStyle,
    shopMenuStyle
}                         from 'features/shop/styles'
import React, {useEffect} from 'react'
import {
    useDispatch,
    useSelector
}                         from 'react-redux'
import Div                from 'shared/Basic/Div'
import H2                 from 'shared/Basic/H2'
import LinkSwitch         from 'shared/Basic/LinkSwitch'

const ShopMenu = ({categories}) => {
    const {productCategories} = useSelector(state => state.shop)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'shop/getProductCategories'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div theme={shopMenuStyle}>
            <H2 theme={shopHeadingStyle}>
                <LinkSwitch url={'/shop'}>
                    Shop
                </LinkSwitch>
            </H2>
            <Div theme={shopCategoryListStyle}>
                {productCategories && productCategories.map((cat) =>
                    <Div
                        theme={shopCategoryStyle}
                        key={cat.slug}
                    >
                        {cat.name}
                    </Div>
                )}
            </Div>
        </Div>
    )
}

export default ShopMenu