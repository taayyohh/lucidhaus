import {
    center,
    flex,
    relative
}                from '../utils/themer'
import {globals} from '../config/styles'

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