import {globals} from 'config/styles'
import {pointer} from 'utils/themer'

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
    paddingBottom: [3, .7, 3],
    paddingTop: [3, .7, 3],
    hover: {
        cursor: pointer,
        backgroundColor: globals.colors.borderColor
    }
}
