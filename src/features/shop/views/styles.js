import {colorPalette, globals} from 'config/styles'
import {
    absolute,
    auto,
    black,
    borderBox,
    center,
    column,
    flex,
    flexEnd,
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
    uppercase,
    white
}                              from 'utils/themer'


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
    // width: '100%',
    width: [1280, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto',
    marginTop: [50, .7, '0'],
    mobile: {
        flexDirection: column
    }

}

export const shopLeftColumnStyle = {
    width: [300, globals.style.layoutScalingValue, '100%'],
    marginRight: auto
}

export const shopMenuStyle = {
    position: 'fixed',
    width: [200, globals.style.layoutScalingValue, 100],
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
    weight: 800,
    mobile: {
        display: flex,
        alignItems: center,
        justifyContent: spaceBetween,
        marginBottom: 20,
        padding: 15,
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
            color: isActive ? colorPalette.honeyYellow : black,
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
        color: isActive ? colorPalette.honeyYellow : black,
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
    background: colorPalette.honeyYellow

}

export const cartStyle = {
    display: grid,
    gridTemplateColumns: '1fr 4fr',
    gridGap: sv(30),
    paddingTop: [100, .7, 50],
    mobile: {
        display: flex,
        flexDirection: column,
        paddingTop: 20,
        paddingBottom: 100
    },
    showItems: {
        display: flex,
        flexDirection: 'column'
    }
}

export const cartSummaryStyle = {
    background: white,
    border: `1px solid ${globals.colors.borderColor}`,
    paddingLeft: [20, globals.style.layoutScalingValue, 20],
    paddingRight: [20, globals.style.layoutScalingValue, 20],
    paddingTop: [20, globals.style.layoutScalingValue, 20],
    paddingBottom: [20, globals.style.layoutScalingValue, 20],
    display: flex,
    flexDirection: column,
    alignItems: center,
    position: 'fixed',
    width: [150, globals.style.layoutScalingValue, '100%'],
    borderRadius: [10, .7, 10],
    mobile: {
        display: flex,
        justifyContent: spaceBetween,
        alignItems: center,
        left: 0,
        zIndex: 5,
        background: '#fff',
        top: 0,
        padding: '10px 25px',
        border: `1px solid ${globals.colors.borderColor}`,
        borderRadius: 10,
        boxShadow: '-8px 5px 10px 0px #d5d5d5'
    }
}

export const cartSummaryTotalStyle = {
    textTransform: none,
    size: [12, .7, 12],
    display: flex,
    flexDirection: column,
    child: {
        selector: 'span',
        size: [32, .7, 22]
    },
    mobile: {
        // flexDirection: row,
        fontWeight: 500,
        size: [32, .7, 20]
    }
}

export const cartSummaryLengthStyle = {
    size: [16, .7, 12]
}

export const cartSummaryIntlDisc = {
    size: [11, .7, 11],
    textTransform: none,
    lineHeight: [13, .7, 13],
    marginTop: [10, .7, 10]
}

export const cartTotalWrapperStyle = {
    borderBottom: '10px solid #e4e2e6',
    paddingBottom: [30, .7, 30],
    marginBottom: [30, .7, 30]
}

export const cartTitleStyle = {
    font: globals.fonts.sans,
    size: [18, .7, 18],
    marginTop: 0,
    weight: 600,
    textTransform: none,
    textAlign: center,
    marginBottom: [15, .7, 15]
}

export const productWrapperStyle = {
    display: flex,
    flexDirection: column,
    width: [800, globals.style.layoutScalingValue, '100%'],
    background: white,
    padding: [50, globals.style.layoutScalingValue, 20],
    borderRadius: [5, globals.style.layoutScalingValue, 5],
    border: `1px solid ${globals.colors.borderColor}`,
    margin: '0 auto',
    boxShadow: '1px 0px 20px 1px #e9e9e9',
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
    paddingTop: [10, .7, 10],
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
    size: [14, .7, 14],
    textTransform: 'uppercase',
    letterSpacing: [0.3, .7, 0.3]
}

export const productInfoWrapperStyle = {
    display: flex,
    flexDirection: column,
    alignItems: flexEnd,
    marginTop: 60,
    paddingTop: 30,
    borderTop: `1px solid ${globals.colors.borderColor}`,
    width: '30%',
    marginLeft: 'auto',
    mobile: {
        width: '100%',
        marginLeft: 0
    }

}

export const productTitleStyle = {
    font: globals.fonts.fancy,
    textAlign: center,
    size: [42, .7, 28],
    margin: 0,
    marginBottom: [30, .7, 20],
    mobile: {
        alignSelf: center,
        marginTop: 40
    }
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
    textTransform: 'normal',
    inner: {
        display: grid,
        width: '100%',
        gridColumnGap: sv(30, globals.style.layoutScalingValue),
        gridTemplateColumns: '1fr',
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
    productCategory: {
        letterSpacing: [1, .7, 1],
        color: colorPalette.honeyYellow,
        size: [12, .7, 12]
    },
    name: {
        // marginRight: auto,
        // paddingLeft: [25, .7, 25],
        paddingBottom: 0,
        size: [18, .7, 18],
    },
    price: {
        paddingTop: [10, .7, 10],
        size: [18, .7, 18]
        // marginRight: auto,
        // paddingLeft: [25, .7, 25]
    }
}
