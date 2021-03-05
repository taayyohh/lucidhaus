import {
    colorPalette,
    globals
} from 'config/styles'
import {
    auto,
    borderBox,
    center,
    column,
    flex,
    hidden,
    none,
    sv
} from 'utils/themer'

export const postsWrapperStyle = {
    display: flex,
    flexDirection: 'column-reverse',
    mobile: {
        display: flex
    }
}

export const postCardStyle = {
    display: 'inline',
    paddingBottom: 0,
    width: '100vw',
    height: `calc(100vh - ${sv(globals.style.headerHeight)})`,
    overflow: hidden,
    borderRadius: 0,
    mobile: {
        height: auto,
    },
    image: {
        objectFit: 'cover'
    },
    textWrapper: {
        display: none
    }

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
    size: [42, .7, 28],
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