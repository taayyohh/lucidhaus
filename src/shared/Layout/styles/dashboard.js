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
    padding: [50, .7, 50],
}