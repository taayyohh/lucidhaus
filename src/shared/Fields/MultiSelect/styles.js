import {flexStart, pointer}    from 'utils/themer'
import {colorPalette, globals} from 'config/styles'

export const optionStyle = isSelected => {
    return {
        background: isSelected ? colorPalette.honeyYellow : '#e4e4e4',
        alignSelf: flexStart,
        padding: '5px 25px',
        borderRadius: 5,
        marginRight: [10, globals.style.layoutScalingValue, 10],
        marginBottom: [10, globals.style.layoutScalingValue, 10],
        border: `1px solid ${isSelected ? colorPalette.honeyYellow : globals.colors.borderColor}`,
        color: isSelected ? '#000' : '#77787b',
        hover: {
            border: `1px solid #000`,
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
