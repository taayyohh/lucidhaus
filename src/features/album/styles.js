import {
    colorPalette,
    globals
} from 'config/styles'
import {
    borderBox,
    center,
    column,
    flex,
    sv
} from 'utils/themer'

export const albumsWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    maxWidth: [1400, globals.style.layoutScalingValue, '100%'],
    gridGap: sv(30),
    margin: '0 auto',
    mobile: {
        display: flex,
        flexDirection: column
    }
}

export const albumCardStyle = {
    child: {
        selector: 'img',
        transform: 'scale(.95)',
        transition: 'transform 500ms ease',
        hover: {
            transform: 'scale(1)'
        }
    }
}

export const albumWrapperStyle = {
    display: flex,
    flexDirection: column,
    width: [800, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto'
}

export const albumTitleStyle = {
    font: globals.fonts.fancy,
    textAlign: center,
    size: [42, .7, 36],
    margin: 0,
    marginBottom: [30, .7, 20]
}

export const albumDescriptionStyle = {
    marginTop: [60, .7, 30],
    paddingTop: [50, .7, 30],
    boxSizing: borderBox,
    paddingLeft: [30, globals.style.layoutScalingValue, '0'],
    paddingRight: [30, globals.style.layoutScalingValue, '0'],
    borderTop: `1px solid ${colorPalette.gray}`
}