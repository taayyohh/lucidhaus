import {colorPalette, globals}         from 'config/styles'
import {block, borderBox, flex, white} from 'utils/themer'

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
    size: [24, .7, 24],
    marginBottom: [30, .7, 30],
}

export const dashboardParagraphStyle = {
    background: white,
    padding: [50, .7, 50],
    boxSizing: borderBox,
    border: `1px solid ${globals.colors.borderColor}`,
    borderRadius: [10, .7, 10],
    marginBottom: [50, .7, 50],
    child: {
        select: 'strong',
        marginBottom: [20, .7, 20],
        display: block
    }
}

export const userDashboardBookmarkStyle = {
    size: [20, .7, 20],
    color: colorPalette.honeyYellow
}
