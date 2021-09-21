import {globals} from 'config/styles'
import {
    borderBox,
    column,
    flex,
    sv, white
} from 'utils/themer'

export const dashboardStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    gridGap: sv(50, globals.style.layoutScalingValue),
    marginTop: 50,
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
    paddingLeft: [50, .7, 0],
    paddingRight: [50, .7, 0],
    paddingBottom: [50, .7, 50],
    mobile: {
        paddingLeft: 0,
        paddingRight: 0
    }

}
export const dashboardHeadingStyle = {
    size: [32, .7, 32],
    weight: 800
}
export const dashboardDescriptionStyle = {
    font: globals.fonts.serif,
}
export const dashboardInfoStyle = {
    paddingBottom: [20, .7, 20],
}
