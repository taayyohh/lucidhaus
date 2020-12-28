import {globals} from 'config/styles'
import {
    borderBox,
    column,
    flex,
    sv
}                from 'utils/themer'

export const dashboardStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    gridGap: sv(50, globals.style.layoutScalingValue),
    mobile: {
        display: flex,
        flexDirection: column
    }
}
export const dashboardContentStyle = {
    overflow: 'hidden'
}
export const dashboardContentInnerStyle = {
    minHeight: [500, .7, 500],
    boxSizing: borderBox,
    paddingLeft: [50, .7, 50],
    paddingRight: [50, .7, 50],
    paddingBottom: [50, .7, 50],

}
export const dashboardHeadingStyle = {
    size: [42, .7, 42],
    weight: 400
}
export const dashboardDescriptionStyle = {
    font: globals.fonts.serif,
}
export const dashboardInfoStyle = {
    paddingBottom: [50, .7, 50]
}