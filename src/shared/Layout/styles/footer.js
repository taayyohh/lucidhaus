import {
    colorPalette,
    globals
} from 'config/styles'
import {
    borderBox,
    white
} from 'utils/themer'

export const footerStyle = {
    size: [16, .7, 16],
    letterSpacing: [0.2, .7, 0.2],
    borderTop: `1px solid ${colorPalette.gray}`,
    zIndex: 3,
    background: white,
    marginTop: [150, .7],
    paddingTop: 30,
    minHeight: [150, .7, 150],
    maxWidth: '100%',
    mobile: {
        paddingLeft: 25,
        paddingRight: 25
    },
    inner: {
        margin: '0 auto',
        width: [globals.style.siteInnerWidth, globals.style.layoutScalingValue, '100%'],

        boxSizing: borderBox
    }
}