import {
    colorPalette,
    globals
}                       from 'config/styles'
import {postTitleStyle} from 'features/post/styles'
import {
    auto,
    black,
    borderBox,
    center,
    column,
    flex,
    grid,
    none,
    pointer,
    relative,
    sv,
    transparent,
    uppercase
} from 'utils/themer'


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
    width: '100%'

}

export const shopLeftColumnStyle = {
    width: [400, globals.style.layoutScalingValue, '100%'],
    marginRight: auto
}

export const shopMenuStyle = {
    position: 'fixed',
    width: [300, globals.style.layoutScalingValue, '100%'],
    borderRight: `1px solid ${globals.colors.borderColor}`
}

export const shopHeadingStyle = {
    size: [42, .7, 28],
    weight: 300,
    font: globals.fonts.fancy,
    child: {
        selector: 'a',
        textDecoration: none,
        color: black,
        hover: {
            color: globals.colors.linkHoverColor
        }
    }

}

export const shopRightColumnStyle = {
    display: grid,
    maxWidth: [1000, globals.style.layoutScalingValue, '100%'],
    width: auto,
    gridTemplateColumns: '1fr 1fr',
    gridGap: sv(50),
}

export const shopCategoryListStyle = {
    paddingLeft: [25, .7, '0'],
    paddingTop: [10, .7, 10]
}

export const shopCategoryStyle = {
    size: [24, .7, 24],
    lineHeight: [40, .7, 40],
    hover: {
        color: globals.colors.linkHoverColor,
        cursor: pointer
    }
}

export const cartStyle = {
    display: grid,
    gridTemplateColumns: '1fr 4fr',
    gridGap: sv(30),
    paddingTop: [100, .7, 50],
    showItems: {
        display: flex,
        flexDirection: 'column'
    }
}

export const cartSummaryStyle = {
    position: 'fixed',
    width: [157, globals.style.layoutScalingValue, '100%']
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
    margin: '0 auto'
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

export const productImageWrapperStyle = {

}

export const productImageStyle = {
    margin: '0 auto'
}

export const checkoutFormStyle = {
    background: transparent,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    boxShadow: 0,
    border: 0,
    width: '100%',
    inner: {
        display: grid,
        width: '100%',
        gridColumnGap: sv(30, globals.style.layoutScalingValue),
        gridTemplateColumns: '1fr 1fr',
        mobile: {
            gridTemplateColumns: '1fr',
            gridGap: 0
        }
    }
}

export const paymentStyle = {
    child: [
        {
            selector: '.braintree-placeholder',
            display: none
        }
    ]
}


export const relatedProductStyle = {}