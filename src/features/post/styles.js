import {
    colorPalette,
    globals
} from '../../config/styles'
import {
    borderBox,
    center,
    column,
    flex,
    sv
} from '../../utils/themer'

export const postsWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: sv(30),
    margin: '0 auto',
    mobile: {
        display: flex,
        flexDirection: column
    }
}
export const postFormStyle = {
    width: [1100, .7, '100%']
}
export const postWrapperStyle = {
    display: flex,
    flexDirection: column,
    width: [800, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto'
}

export const postTitleStyle = {
    font: globals.fonts.fancy,
    textAlign: center,
    size: [42, .7, 36],
    margin: 0,
    marginBottom: [30, .7, 20]
}

export const postDescriptionStyle = {
    marginTop: [60, .7, 30],
    paddingTop: [50, .7, 30],
    boxSizing: borderBox,
    paddingLeft: [30, globals.style.layoutScalingValue, '0'],
    paddingRight: [30, globals.style.layoutScalingValue, '0'],
    borderTop: `1px solid ${colorPalette.gray}`
}