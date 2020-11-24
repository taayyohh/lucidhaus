import {globals} from '../../../config/styles'
import {
    black,
    flexStart,
    none,
    pointer,
    white
}                from '../../../utils/themer'

export const genericButtonStyle = {
    border: `1px solid ${globals.colors.borderColor}`,
    alignSelf: flexStart,
    paddingTop: [10, .7, 10],
    paddingBottom: [10, .7, 10],
    paddingLeft: [20, .7, 20],
    paddingRight: [20, .7, 20],
    color: black,
    textDecoration: none,
    transition: 'background-color 250ms ease, color 250ms ease',
    marginLeft: [10, globals.style.layoutScalingValue, '0'],
    marginTop: [20, globals.style.layoutScalingValue, 20],
    borderRadius: 5,
    hover: {
        cursor: pointer,
        backgroundColor: globals.colors.linkHoverColor,
        color: white
    }
}