import {colorPalette, globals}                                 from 'config/styles'
import {borderBox, center, column, flex, none, row, sv, white} from 'utils/themer'

export const placesWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: sv(50, globals.style.layoutScalingValue),
    margin: '0 auto',
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
    size: [18, .7, 18],
    marginTop: [20, .7, 20]
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
    textWrapper: {
        paddingLeft: [50, globals.style.layoutScalingValue, 20],
        paddingRight: [50, globals.style.layoutScalingValue, 20]
    },
    name: {
        size: [42, .7, 28],
        lineHeight: [32, .7, 32],
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
    width: [800, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto'
}

export const placeImageWrapperStyle = {
    width: [500, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto'
}

export const placeTitleStyle = {
    font: globals.fonts.fancy,
    textAlign: center,
    size: [42, .7, 36],
    margin: 0,
    marginBottom: [30, .7, 20]
}

export const placeDescriptionStyle = {
    marginTop: [60, .7, 30],
    paddingTop: [50, .7, 30],
    boxSizing: borderBox,
    paddingLeft: [30, globals.style.layoutScalingValue, '0'],
    paddingRight: [30, globals.style.layoutScalingValue, '0'],
    borderTop: `1px solid ${colorPalette.gray}`,
    child: [
        {
            selector: 'p:first-child',
            size: [26, .7, 26],
            lineHeight: [34, .7, 34]
        }
    ]
}

export const placeImageStyle = {}

export const reviewsWrapperStyle = {
    display: flex,
    flexDirection: 'column',
    marginBottom: [50, .7, 50]
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
