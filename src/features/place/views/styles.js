import {colorPalette, globals}                                 from 'config/styles'
import {borderBox, center, column, flex, none, row, sv, white} from 'utils/themer'

export const placesWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: sv(50, globals.style.layoutScalingValue),
    margin: '0 auto',
    marginTop: [100, .7, 100],
    maxWidth: [1200, globals.style.layoutScalingValue, '100%'],
    mobile: {
        display: flex,
        flexDirection: column
    }
}

export const placesHeadingStyle = {
    background: colorPalette.forestGreen,
    color: white,
    display: flex,
    alignItems: center,
    justifyContent: center,
    height: 180,
    size: 58,
    lineHeight: 70
}

export const placeContentWrapperStyle = {
    marginBottom: [40, .7, 20],
    marginTop: [-50, .7, '0']
}

export const placeDetailStyle = {
    maxWidth: [800, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto',
    font: globals.fonts.serif,
    size: [20, .7, 20],
    lineHeight: [28, .7, 28],
    marginTop: [40, .7, 30]
}

export const placesSearchFormStyle = {
    flexDirection: row,
    border: 0,
    padding: 0,
    maxWidth: [800, globals.style.layoutScalingValue, '100%'],
    marginTop: [30, .7, 30],
    mobile: {
        flexDirection: column,
        paddingBottom: 30,
        borderBottom: `1px solid ${globals.colors.borderColor}`
    },
    child: [
        {
            selector: 'fieldset',
            marginBottom: 0,
            maxWidth: [650, globals.style.layoutScalingValue, '100%'],
        },
        {
            selector: 'input',
        },
        {
            selector: 'button',
            marginTop: [0, .7, 20],
            height: [52, .7, 52],
            width: [150, .7, 150]
        },
        {
            selector: 'label',
            color: colorPalette.darkGray
        }
    ],
    heading: {
        display: none
    }
}

export const placeCardStyle = {
    backgroundColor: white,
    textAlign: center,
    hover: {
        color: colorPalette.paleGreen
    },
    textWrapper: {
        paddingLeft: [50, globals.style.layoutScalingValue, 20],
        paddingRight: [50, globals.style.layoutScalingValue, 20]
    },
    name: {
        size: [32, .7, 28],
        lineHeight: [24, .7, 32],
        width: '100%',
        textAlign: center
    },
    address: {
        size: [22, .7, 22],
        lineHeight: [20, .7, 20],
        width: '100%',
        textAlign: center
    },
    child: {
        selector: 'img',
        borderRadius: [300, globals.style.layoutScalingValue, 300],
        transform: 'scale(.9)',
        transition: 'transform 500ms ease',
        hover: {
            transform: 'scale(.95)'
        }
    }
}

export const placeWrapperStyle = {
    display: flex,
    flexDirection: column,
    width: [1200, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto'
}

export const placeWrapperTopStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: sv(100),
}

export const placeImageWrapperStyle = {
    width: [500, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto'
}

export const placeTitleStyle = {
    backgroundColor: colorPalette.seaFoamGreen,
    font: globals.fonts.fancy,
    textAlign: center,
    size: [34, .7, 28],
    margin: 0,
    marginBottom: [30, .7, 20],
    borderRadius: `${sv(10)} ${sv(10)} 0 0`
}

export const placeDescriptionStyle = {
    boxSizing: borderBox,
    paddingRight: [30, globals.style.layoutScalingValue, '0'],
}

export const placeImageStyle = {}

export const reviewsWrapperStyle = {
    display: flex,
    flexDirection: 'column',
    marginBottom: [50, .7, 50]
}

export const reviewsHeadingWrapperStyle = {
    marginTop: [100, .7, 50]
}

export const reviewHeadingStyle = {
    size: [32, .7, 28],
    backgroundColor: colorPalette.seaFoamGreen,
    paddingLeft: [20, .7, 20],
    paddingTop:  [20, .7, 20],
    paddingBottom:  [20, .7, 20],
    borderRadius: `${sv(10)} ${sv(10)} 0 0`
}

export const placeReviewStyle = {
    width: '100%',
    padding: [20, globals.style.layoutScalingValue, 20],
    border: `1px solid ${globals.colors.borderColor}`,
    marginBottom: [20, .7, 20],
    image: {
        maxWidth: [150, .7, 150]
    }
}
