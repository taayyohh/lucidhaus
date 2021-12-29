import {center, column, flex}  from 'utils/themer'
import {colorPalette, globals} from '../../config/styles'

export const latestStyle = {
    display: flex,
    flexDirection: column,
    textAlign: center,
    size: [30, .7, 30],
    item: {
      borderBottom: `1px solid ${globals.colors.borderColor}`,
        marginBottom: [50, .7, 50],
        paddingBottom: [30, .7, 30]
    },
    artist: {
        color: colorPalette.red
    }
}
