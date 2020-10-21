import {
    borderBox,
    none
}                                from '../utils/themer'
import {marketplaceWrapperStyle} from './business'


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
    ...marketplaceWrapperStyle
}
