import {
    shopActiveIndicatorStyle,
    shopCategoryListStyle,
    shopCategoryStyle,
    shopHeadingStyle,
    shopMenuLinkStyle,
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
import MotionDiv          from 'shared/Basic/MotionDiv'

const ShopMenu = () => {
    const {productCategories, product} = useSelector(state => state.shop)
    const {slug, url} = useSelector(state => state.site)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'shop/getProductCategories'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div theme={shopMenuStyle}>
            <H2 theme={shopHeadingStyle(slug === 'shop')}>
                <LinkSwitch url={'/shop'} theme={shopMenuLinkStyle}>
                    Shop
                </LinkSwitch>
            </H2>
            <Div theme={shopCategoryListStyle}>
                {productCategories && productCategories.map((cat) => {
                        const isActive = cat.slug === slug || (product.category === cat.objectID && url.length === 2)
                        return (
                            <LinkSwitch
                                url={`/shop/category/${cat.slug}`}
                                theme={shopCategoryStyle(isActive)}
                                key={cat.slug}
                            >
                                {cat.name}
                                {isActive && (
                                    <MotionDiv
                                        theme={shopActiveIndicatorStyle}
                                        layoutId={'activeCategoryIndicator'}
                                    />
                                )}
                            </LinkSwitch>
                        )
                    }
                )}
            </Div>
        </Div>
    )
}

export default ShopMenu