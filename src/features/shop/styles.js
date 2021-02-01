import {
    colorPalette,
    globals
}                       from 'config/styles'
import {postTitleStyle} from 'features/post/styles'
import {
    absolute,
    auto,
    black,
    borderBox,
    center,
    column,
    flex,
    flexStart,
    grid,
    hidden,
    inlineBlock,
    none,
    pointer,
    relative,
    spaceBetween,
    sv,
    transparent,
    uppercase
}                       from 'utils/themer'


export const checkoutDropIn = {
    width: '100%',
    paddingBottom: [100, .7, 50],
    child: [
        {
            selector: '.braintree-heading',
            display: none
        },
        {
            selector: '.braintree-placeholder',
            display: none
        }
    ]
}

export const checkoutPurchaseButtonStyle = {
    marginBottom: [50, .7, 50]
}

export const checkoutSectionStyle = {
    marginBottom: [50, .7, 50],
    paddingBottom: [50, .7, 50],
    borderBottom: `10px solid #e4e2e6`,
    position: relative,
    child: [
        {
            selector: '.braintree-placeholder',
            display: none
        }
    ]
}

export const shopWrapperStyle = {
    display: flex,
    width: '100%',
    mobile: {
        flexDirection: column
    }

}

export const shopLeftColumnStyle = {
    width: [400, globals.style.layoutScalingValue, '100%'],
    marginRight: auto
}

export const shopMenuStyle = {
    position: 'fixed',
    width: [300, globals.style.layoutScalingValue, 100],
    borderRight: `1px solid ${globals.colors.borderColor}`,
    mobile: {
        position: absolute,
        backgroundColor: '#fff',
        paddingLeft: 20,
        width: 'calc(100% - 50px)',
        overflow: hidden,
        marginTop: -20,
        border: `1px solid ${globals.colors.borderColor}`
    }
}

export const shopMenuLinkStyle = {
    mobile: {
        display: flex,
        alignItems: center,
        justifyContent: spaceBetween,
        marginBottom: 20,
        padding: 15,
        border: `1px solid ${globals.colors.borderColor}`
    }
}


export const shopHeadingStyle = isActive => {
    return {
        size: [42, .7, 28],
        weight: 300,
        font: globals.fonts.fancy,
        child: {
            selector: 'a',
            textDecoration: none,
            color: isActive ? colorPalette.purple : black,
            hover: {
                color: globals.colors.linkHoverColor
            }
        }
    }
}

export const shopRightColumnStyle = {
    display: grid,
    maxWidth: [1000, globals.style.layoutScalingValue, '100%'],
    width: auto,
    gridTemplateColumns: '1fr 1fr',
    gridGap: sv(50),
    mobile: {
        gridTemplateColumns: '1fr'
    }
}

export const shopCategoryListStyle = {
    paddingLeft: [25, .7, '0'],
    paddingTop: [10, .7, 10],
    display: flex,
    flexDirection: column
}

export const shopCategoryStyle = isActive => {
    return {
        position: relative,
        display: inlineBlock,
        size: [24, .7, 24],
        lineHeight: [40, .7, 40],
        textDecoration: none,
        color: isActive ? colorPalette.purple : black,
        hover: {
            color: globals.colors.linkHoverColor,
            cursor: pointer
        }
    }
}

export const shopActiveIndicatorStyle = {
    height: [8, .7, 8],
    width: [8, .7, 8],
    borderRadius: [4, .7, 4],
    position: absolute,
    right: [55, globals.style.layoutScalingValue, 10],
    top: '50%',
    marginTop: [-4, .7, -4],
    background: colorPalette.purple

}

export const cartStyle = {
    display: grid,
    gridTemplateColumns: '1fr 4fr',
    gridGap: sv(30),
    paddingTop: [100, .7, 50],
    mobile: {
        display: flex,
        flexDirection: column,
        paddingTop: 100,
        paddingBottom: 100
    },
    showItems: {
        display: flex,
        flexDirection: 'column'
    }
}

export const cartSummaryStyle = {
    position: 'fixed',
    width: [157, globals.style.layoutScalingValue, '100%'],
    mobile: {
        display: flex,
        justifyContent: spaceBetween,
        alignItems: center,
        left: 0,
        zIndex: 2,
        background: '#d2c8d4',
        top: 80,
        padding: '10px 25px',
        borderBottom: '1px solid #000'
    }
}

export const cartSummaryTotalStyle = {
    mobile: {
        fontWeight: 500,
        size: 32
    }
}

export const cartSummaryLengthStyle = {
    size: [22, .7, 22]
}

export const cartTotalWrapperStyle = {
    borderBottom: '10px solid #e4e2e6',
    paddingBottom: [30, .7, 30],
    marginBottom: [30, .7, 30]
}

export const cartTitleStyle = {
    font: globals.fonts.sans,
    size: [22, .7, 28],
    marginTop: 0,
    weight: 300,
    textTransform: none,
    textAlign: center,
    marginBottom: [15, .7, 15]
}

export const productWrapperStyle = {
    display: flex,
    flexDirection: column,
    width: [800, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto',
    mobile: {
        alignItems: flexStart
    }
}

export const productDescriptionStyle = {
    marginTop: [60, .7, 30],
    paddingTop: [50, .7, 30],
    boxSizing: borderBox,
    paddingLeft: [30, globals.style.layoutScalingValue, '0'],
    paddingRight: [30, globals.style.layoutScalingValue, '0'],
    borderTop: `1px solid ${colorPalette.gray}`
}

export const productPriceStyle = {
    display: flex,
    justifyContent: center,
    paddingTop: [30, .7, 30],
    font: globals.fonts.sans,
    size: [32, .7, 32],
    lineHeight: [16, .7, 16],
    textTransform: uppercase,
    child: {
        selector: 'span',
        size: [18, .7, 18]
    }
}

export const productCategoryStyle = {
    font: globals.fonts.sans,
    weight: 500,
    textAlign: center,
    color: '#656161',
    size: [16, .7, 16],
    letterSpacing: [0.3, .7, 0.3]
}

export const productTitleStyle = {
    ...postTitleStyle
}

export const productImageWrapperStyle = {}

export const productImageStyle = {
    margin: '0 auto'
}

export const shippingAddressStyle = {
    background: transparent,
    padding: 0,
    boxShadow: 0,
    border: 0,
    width: '100%',
    inner: {
        display: grid,
        width: '100%',
        gridColumnGap: sv(30, globals.style.layoutScalingValue),
        gridTemplateColumns: '1fr 1fr',
        child: {
            selector: '> fieldset',
            marginBottom: [20, .7, 20],
            child: {
                selector: '> span',
                top: [5, .7, 5],
                right: [10, .7, 10]
            }
        },
        mobile: {
            gridTemplateColumns: '1fr',
            gridGap: 0
        }
    }
}

export const shopCardStyle = {
    border: `1px solid ${globals.colors.borderColor}`,
    textWrapper: {
        paddingLeft: 25
    },
    category: {
        marginTop: [20, .7, 20],
        letterSpacing: [1, .7, 1],
        color: colorPalette.purple
    },
    name: {
        // marginRight: auto,
        // paddingLeft: [25, .7, 25],
        paddingBottom: 0,
        size: [36, .7, 36]
    },
    price: {
        marginTop: [20, .7, 20],
        paddingTop: [10, .7, 10],
        borderTop: `1px solid #000`
        // marginRight: auto,
        // paddingLeft: [25, .7, 25]
    }
}