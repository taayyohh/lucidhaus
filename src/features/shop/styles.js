import {globals}                 from '../../config/styles'
import {
    borderBox,
    center,
    flex,
    none,
    relative
}                          from '../../utils/themer'
import {postsWrapperStyle} from '../post/styles'

export const checkoutAddress = {
    child: {
        selector: '> input',
        width: '100%',
        height: 50,
        border: none,
        padding: '30px 20px',
        boxSizing: borderBox
    }
}
export const checkoutDropIn = {
    width: '100%',
    child: [
        {
            selector: '.braintree-heading',
            display: none
        }
    ]
}
export const shopWrapperStyle = {
    ...postsWrapperStyle
}
export const cartStyle = {
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
    textAlign: center,
    size: [44, .7, 36],
    marginTop: 0,
    marginBottom: [20, .5]
}