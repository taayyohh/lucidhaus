import {flexStart, pointer, white} from 'utils/themer'
import {colorPalette, globals}     from 'config/styles'

export const optionStyle = isSelected => {
    return {
        background: isSelected ? colorPalette.darkHoneyYellow : '#e4e4e4',
        alignSelf: flexStart,
        padding: '5px 25px',
        borderRadius: 5,
        marginRight: [10, globals.style.layoutScalingValue, 10],
        marginBottom: [10, globals.style.layoutScalingValue, 10],
        border: `1px solid ${isSelected ? colorPalette.darkHoneyYellow : globals.colors.borderColor}`,
        color: isSelected ? '#fff' : '#77787b',
        size: [14, .7, 14],
        weight: 500,
        hover: {
            backgroundColor: colorPalette.honeyYellow,
            color: white,
            border: `1px solid ${colorPalette.honeyYellow}`,
            cursor: pointer
        }
    }
}

export const multiSelectSearchFormStyle = {
    border: 0,
    padding: 0,
    fieldset: {
        marginBottom: [20, .7, 20]
    }
}
