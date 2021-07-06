import {colorPalette, globals}                                                                      from 'config/styles'
import {
    absolute,
    auto,
    borderBox,
    center,
    column,
    flex,
    flexStart,
    none,
    relative,
    row,
    sv,
    uppercase,
    white
} from 'utils/themer'

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
    justifyContent: 'space-around',
    height: 180,
    size: 58,
    lineHeight: 70,
    mobile: {
        flexDirection: column,
        height: auto,
        padding: 30,
        alignItems: flexStart
    }
}

export const placeContentWrapperStyle = {
    marginBottom: [40, .7, 20],
    marginTop: [-50, .7, '0'],
}

export const placeDetailStyle = {
    maxWidth: [800, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto',
    font: globals.fonts.serif,
    size: [20, .7, 20],
    lineHeight: [28, .7, 28],
    marginTop: [40, .7, 30],
    mobile: {
        paddingLeft: 25,
        paddingRight: 25
    }
}

export const placesSearchFormStyle = {
    flexDirection: row,
    border: 0,
    padding: 0,
    width: [800, globals.style.layoutScalingValue, '100%'],
    margin: '0',
    mobile: {
        flexDirection: column
    },
    field: {
      inputLabelFocused: {
          transform: `translate(-6%, 14%) scale(${globals.style.inputLabelShrinkRatio})`
      }
    },
    inputLabelFocused: {
        transform: `translate(-6%, 14%) scale(${globals.style.inputLabelShrinkRatio})`
    },
    child: [
        {
            selector: 'fieldset',
            height: [52, .7, 52],
            marginBottom: 0,
            maxWidth: [650, globals.style.layoutScalingValue, '100%'],
        },
        {
            selector: 'input',
            position: absolute,
            top: 0
        },
        {
            selector: 'button',
            display: flex,
            alignItems: center,
            justifyContent: center,
            marginTop: [0, .7, 20],
            height: [52, .7, 52],
            width: [150, .7, 150],
            backgroundColor: colorPalette.honeyYellow,
          //  color: colorPalette.forestGreen,
            borderColor: colorPalette.honeyYellow,
            hover: {
                backgroundColor: colorPalette.darkHoneyYellow,
                borderColor: colorPalette.darkHoneyYellow
            }
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
    width: [1450, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto'
}

export const placeWrapperTopStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: sv(100),
    mobile: {
        display: 'flex',
        flexDirection: column
    }
}

export const placeWrapperBottomStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: sv(100),
    marginTop: [100, .7, 50],
    before: {
        position: absolute,
        content: "''",
        left: '50%',
        marginLeft: [-200, .7, '25px'],
        width: [400, .7, 'calc(100% - 50px)'],
        height: '1px',
        background: globals.colors.borderColor,
        margin: '0 auto',
        mobile: {
            left: 0
        }
    },
    mobile: {
        display: 'flex',
        flexDirection: column
    }
}

export const placeMapStyle = {
    height: 500,
    width: [500, globals.style.layoutScalingValue, '100%']
}

export const placeImageWrapperStyle = {
    width: [500, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto'
}

export const placeTitleStyle = {
    position: relative,
    backgroundColor: colorPalette.seaFoamGreen,
    font: globals.fonts.fancy,
    textAlign: center,
    size: [34, .7, 28],
    paddingTop: [20, .7, 20],
    paddingBottom: [20, .7, 20],
    margin: 0,
    marginBottom: [30, .7, 20],
    borderRadius: `${sv(10)} ${sv(10)} 0 0`
}

export const placeAddressStyle = {
    font: globals.fonts.serif,
    size: [24, .7, 24]
}

export const placeTaxonomyStyle = {
    borderBottom: `1px solid ${globals.colors.borderColor}`,
    padding: [30, .7, 30],
    marginBottom: [30, .7, 30],
    boxShadow: '0px 3px 6px 0px #e6e6e6',
    title: {
        color: colorPalette.forestGreen,
        size: [22, .7, 22],
        letterSpacing: [0.5, .7, 0.5],
    }
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

export const reviewHelperTextStyle = {
    font: globals.fonts.serif,
    size: [18, .7, 18]
}

export const reviewFormStyle = {
    width: '100%',
    padding: 0,
    border: 0,
    marginTop: [50, .7, 50]
}

export const reviewFormWrapperStyle = {
    maxWidth: [600, globals.style.layoutScalingValue, '100%'],
    marginTop: 50,
}

export const reviewLeaveWrapperStyle = {
    marginTop: [65, .7, 65]
}

export const reviewFormHeadingStyle = {
    size: [30, .7, 24],
    marginBottom: [20, .7, 20],
    letterSpacing: [1, .7, 1],
    font: globals.fonts.fancy
}

export const reviewHeadingStyle = {
    font: globals.fonts.fancy,
    size: [32, .7, 28],
    backgroundColor: colorPalette.seaFoamGreen,
    paddingLeft: [20, .7, 20],
    paddingTop: [20, .7, 20],
    paddingBottom: [20, .7, 20],
    borderRadius: `${sv(10)} ${sv(10)} 0 0`
}

export const placeReviewStyle = {
    width: '100%',
    padding: [20, globals.style.layoutScalingValue, 20],
    borderBottom: `1px solid ${globals.colors.borderColor}`,
    boxShadow: '1px 3px 5px 0px #e2e2e2',
    marginBottom: [20, .7, 20],
    image: {
        maxWidth: [150, .7, 150]
    }
}

export const placeReviewDescriptionStyle = {
    marginTop: [30, .7, 30]
}
