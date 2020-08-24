import {
    borderBox,
    column,
    flex,
    none
} from '../utils/themer'

export const shopStyle = {
    display: flex,
    flexDirection: column
}

export const shopInnerStyle = {
    width: '100%',
    mobile: {
        width: '100%'
    }
}


export const checkoutAddress = {
    child: {
        selector: "> input",
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