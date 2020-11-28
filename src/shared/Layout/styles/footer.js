import {
    colorPalette,
    globals
} from '../../../config/styles'
import {borderBox} from '../../../utils/themer'

export const footerStyle = {
    borderTop: `1px solid ${colorPalette.gray}`,
    marginTop: 50,
    paddingTop: 30,
    minHeight: [150, .7, 150],
    maxWidth: '100%',
    inner: {
        margin: '0 auto',
        width: [globals.style.siteInnerWidth, globals.style.layoutScalingValue, '100%'],

        boxSizing: borderBox
    }
}