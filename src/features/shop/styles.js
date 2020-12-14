import {
    colorPalette,
    globals
}                          from 'config/styles'
import {
    borderBox,
    center,
    column,
    flex,
    grid,
    none,
    relative,
    sv,
    transparent,
    uppercase
}                          from 'utils/themer'
import {postsWrapperStyle} from '../post/styles'


export const checkoutDropIn = {
    width: '100%',
    paddingBottom: [50, .7, 50],
    child: [
        {
            selector: '.braintree-heading',
            display: none
        }
    ]
}
export const shopWrapperStyle = {
    ...postsWrapperStyle,
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: sv(50),
}
export const cartStyle = {
    paddingTop: [100, .7, 50],
    checkOut: {
        //position: fixed,
        mobile: {
            position: relative,
        }
    },
    showItems: {
        display: flex,
        flexDirection: 'column'
    }
}
export const cartTitleStyle = {
    font: globals.fonts.fancy,
    size: [32, .7, 28],
    marginTop: 0,
    marginBottom: [20, .5],
    textTransform: none
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

export const checkoutFormStyle = {
    background: transparent,
    padding: 0,
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



export const relatedProductStyle = {}