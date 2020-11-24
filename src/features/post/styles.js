import {globals} from '../../config/styles'
import {
    column,
    flex,
    sv
}                from '../../utils/themer'

export const postsWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: sv(30),
    margin: '0 auto',
    mobile: {
        display: flex,
        flexDirection: column
    }
}
export const postFormStyle = {
    width: [1100, .7, '100%']
}
export const postWrapperStyle = {
    display: flex,
    flexDirection: column,
    width: '100%'
}
export const postStyle = {
    name: {
        font: globals.fonts.fancy,
        size: 42,
        margin: 0,
        marginBottom: 15
    }
}