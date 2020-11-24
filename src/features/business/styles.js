import {globals} from '../../config/styles'
import {
    column,
    flex,
    sv
}                from '../../utils/themer'

export const marketplaceWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: sv(30),
    margin: '0 auto',
    mobile: {
        display: flex,
        flexDirection: column
    }
}
export const businessFormStyle = {
    width: [1100, .7, '100%']
}
export const businessWrapperStyle = {
    display: flex,
    flexDirection: column,
    width: '100%'
}
export const businessStyle = {
    name: {
        font: globals.fonts.fancy,
        size: 42,
        margin: 0,
        marginBottom: 15
    }
}