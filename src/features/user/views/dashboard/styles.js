import {colorPalette, globals} from 'config/styles'

export const userDashboardInfoWrapperStyle = {
    font: globals.fonts.serif,
    lineHeight: [28, .7, 28],
    marginTop: [30, .7, 30],
    child: {
        selector: '> div',
        marginBottom: [20, .7, 20]
    }
}

export const userDashboardRTEHeadingStyle = {
    font: globals.fonts.fancy,
    size: [28, .7, 28],
    marginTop: [40, .7, 40],
    marginBottom: [10, .7, 10]
}

export const userDashboardBookmarkStyle = {
    size: [20, .7, 20],
    color: colorPalette.honeyYellow
}
