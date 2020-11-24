import {adminMenuStyle} from './admin'

import {globals} from '../config/styles'
import {
    center
}                from '../utils/themer'

export const userLinksStyle = {
    ...adminMenuStyle,
    list: {
        ...adminMenuStyle.list
    }
}

export const userDashboardStyle = {
    greeting: {
        font: globals.fonts.fancy,
        textAlign: center,
        size: [44,.7, 36]
    }

}