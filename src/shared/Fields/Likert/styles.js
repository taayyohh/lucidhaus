import {colorPalette, globals}                   from 'config/styles'
import {column, flex, flexStart, pointer, white} from 'utils/themer'

export const likertStyle = {
    paddingLeft: [30, .7, 30],
    paddingRight: [30, .7, 30],
    paddingTop: [30, .7, 30],
    paddingBottom: [30, .7, 30],
    border: `1px solid ${globals.colors.borderColor}`,
    borderRadius: [10, .7, 10],
    marginBottom: [50, .7, 30],
    background: white
}

export const likertOptionsWrapperStyle = {
    display: flex,
    flexDirection: column,
    marginBottom: [30, .7, 30],
    mobile: {
        flexDirection: column
    }
}

export const likertOptionStyle = isActive => {
    return {
        size: [14, .7, 14],
        background: isActive ? colorPalette.darkHoneyYellow : '#e4e4e4',
        color: isActive ? white : globals.colors.textColor,
        alignSelf: flexStart,
        paddingTop: [10, .7, 10],
        paddingBottom: [10, .7, 10],
        paddingRight: [15, .7, 15],
        paddingLeft: [15, .7, 15],
        borderRadius: [5, .7, 5],
        marginRight: [10, globals.style.layoutScalingValue, 10],
        marginBottom: [10, globals.style.layoutScalingValue, 10],
        hover: {
            cursor: pointer
        }
    }
}
