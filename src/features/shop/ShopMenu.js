import {
    caretDown,
    caretUp
}                         from 'config/icons/fa'
import {
    shopActiveIndicatorStyle,
    shopCategoryListStyle,
    shopCategoryStyle,
    shopHeadingStyle,
    shopMenuLinkStyle,
    shopMenuStyle
}                         from 'features/shop/styles'
import {mobileFlag}       from 'features/site/slice'
import React, {
    useContext,
    useEffect
}                         from 'react'
import {
    useDispatch,
    useSelector
}                         from 'react-redux'
import Div                from 'shared/Basic/Div'
import H2                 from 'shared/Basic/H2'
import Icon               from 'shared/Basic/Icon'
import LinkSwitch         from 'shared/Basic/LinkSwitch'
import MotionDiv          from 'shared/Basic/MotionDiv'
import {menuPanelContext} from 'shared/Containers/MenuPanelController'

const ShopMenu = () => {
    const {productCategories, product} = useSelector(state => state.shop)
    const {slug, url} = useSelector(state => state.site)
    const isMobile = useSelector(mobileFlag)
    const dispatch = useDispatch()
    const {isFilterOpen, setIsFilterOpen} = useContext(menuPanelContext)
    const variants = {
        initial: {
            height: isMobile ? 0 : 'auto'
        },
        open: {
            height: 'auto'
        }
    }

    useEffect(() => {
        dispatch({type: 'shop/getProductCategories'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <H2 theme={shopHeadingStyle(slug === 'shop')}>
                <LinkSwitch
                    theme={shopMenuLinkStyle}
                    onClick={() => setIsFilterOpen(flag => !flag)}
                >
                    Shop
                    {isMobile && (
                        <Icon
                            icon={isFilterOpen ? caretUp : caretDown}
                        />
                    )}
                </LinkSwitch>
            </H2>
            <MotionDiv
                theme={shopMenuStyle}
                initial={isMobile ? 'initial' : false}
                variants={variants}
                animate={isFilterOpen ? 'open' : 'initial'}
            >
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
            </MotionDiv>
        </>
    )
}

export default ShopMenu