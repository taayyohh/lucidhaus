import {colorPalette, globals}                                        from 'config/styles'
import {absolute, borderBox, center, column, flex, pointer, relative} from 'utils/themer'

export const stateCityOptionsWrapperStyle = {
    maxHeight: 200,
    overflowY: 'scroll',
    marginBottom: 50,
    padding: 30,
    border: `1px solid ${globals.colors.borderColor}`,
    borderRadius: 10
}

export const stateCityFieldsetWrapperStyle = {
    fieldset: {
        marginBottom: 0
    }
}

export const stateCityOptionStyle = {
    padding: [15, .7, 15],
    paddingBottom: [10, .7, 10],
    paddingTop: [10, .7, 10],
    backgroundColor: '#BDBDBD',
    marginBottom: [5, .7, 5],
    borderRadius: [5, .7, 5],
    size: [16, .7, 16],
    hover: {
        cursor: pointer,
        backgroundColor: globals.colors.borderColor
    }
}

export const stateSelectSelectionInnerWrapperStyle = {
    position: relative,
    display: flex,
    alignItems: center,
    justifyContent: center,
    background: '#CDCDCD',
    height: [150, .7, 100],
    padding: [50, .7, 20],
    borderRadius: [10, .7, 10],
    marginTop: [15, .7, 15]
}

export const stateSelectionLabelStyle = {
    position: absolute,
    top: [5, .7, 5],
    left: [15, .7, 15],
    size: [15, .7, 15],
    weight: 600
}

export const stateCitySelectedOptionStyle = {
    position: relative,
    background: colorPalette.honeyYellow,
    paddingLeft: [40, .7, 30],
    paddingRight: [40, .7, 30],
    paddingTop: [10, .7, 10],
    paddingBottom: [10, .7, 10],
    borderRadius: [10, .7, 10],
    size: [16, .7, 16],
    icon: {
        position: absolute,
        right: [10, globals.style.layoutScalingValue, 10],
        top: [13, .7, 14]
    },
    hover: {
        backgroundColor: colorPalette.darkHoneyYellow,
        cursor: pointer,
        child: {
            selector: 'svg',
        }
    }
}

export const stateSelectSelectionWrapperStyle = {
    display: flex,
    flexDirection: column,
    marginBottom: [10, .7, 10],
}

export const stateCitySelectStyle = {
    background: '#E0E0E0',
    boxSizing: borderBox,
    padding: [50, globals.style.layoutScalingValue, 25],
    border: `1px solid ${globals.colors.borderColor}`,
    borderRadius: [10, .7, 10],
    marginBottom: [25, .7, 25],
    marginTop: [10, .7, 10]
}
