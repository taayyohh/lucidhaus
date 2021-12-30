import {colorPalette, globals}                                from 'config/styles'
import {borderBox, center, column, flex, none, sv, uppercase} from 'utils/themer'

export const artistsWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: sv(50, globals.style.layoutScalingValue),
    margin: '0 auto',
    marginTop: [50, .7, 50],
    maxWidth: [1300, globals.style.layoutScalingValue, '100%'],
    mobile: {
        display: flex,
        flexDirection: column
    }
}

export const artistCardStyle = {
    width: [400, globals.style.layoutScalingValue, '100%'],
    borderBottom: 0,
    // background: '#000',
    textWrapper: {
        paddingLeft: [50, globals.style.layoutScalingValue, 20],
        paddingRight: [50, globals.style.layoutScalingValue, 20]
    },
    hover: {
        background: none
    },
    name: {
        size: [18, .7, 18],
        lineHeight: [32, .7, 32],
        weight: 600,
        letterSpacing: [2, .7, 2],
        textTransform: uppercase,
        width: '100%',
        textAlign: center
    },
    image: {
        width: [400, globals.style.layoutScalingValue, '100%']
    },
    child: {
        selector: 'img',
        borderRadius: [400, globals.style.layoutScalingValue, '100%'],
        transform: 'scale(.9)',
        transition: 'transform 500ms ease',
        hover: {
            transform: 'scale(.95)'
        }
    }
}

export const artistWrapperStyle = {
    display: flex,
    flexDirection: column,
    width: [800, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto',
    marginTop: [50, .7, 50]
}

export const artistImageWrapperStyle = {
    width: [500, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto'
}

export const artistTitleStyle = {
    font: globals.fonts.fancy,
    textAlign: center,
    size: [42, .7, 36],
    weight: 800,
    margin: 0,
    marginBottom: [30, .7, 20]
}

export const artistDescriptionStyle = {
    marginTop: [60, .7, 30],
    paddingTop: [50, .7, 30],
    boxSizing: borderBox,
    paddingLeft: [30, globals.style.layoutScalingValue, '0'],
    paddingRight: [30, globals.style.layoutScalingValue, '0'],
    borderTop: `1px solid ${colorPalette.gray}`,
    // lineHeight: [20, .7, 20],
    child: [
        {
            selector: 'p:first-child',
            size: [32, .7, 26],
            lineHeight: [42, .7, 36]
        }
    ]
}

export const artistImageStyle = {}
