import {colorPalette, globals} from 'config/styles'
import {
    absolute,
    auto,
    borderBox,
    center,
    column,
    flex,
    flexStart,
    grid,
    none,
    pointer,
    relative,
    row,
    sv,
    white
}            from 'utils/themer'
import {CDN} from '../../../config/variables'

export const placesWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: sv(50, globals.style.layoutScalingValue),
    margin: '0 auto',
    marginTop: [15, .7, 15],
    maxWidth: [1280, globals.style.layoutScalingValue, '100%'],
    mobile: {
        display: flex,
        flexDirection: column
    }
}

export const placeContentWrapperStyle = {
    maxWidth: [1280, globals.style.layoutScalingValue, '100%'],
    marginBottom: [40, .7, 20],
    marginTop: [30, .7, '0'],
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

export const placeSearchResultsQueryTextStyle = {
    size: [24, .7, 20],
    marginBottom: [30, .7, 30],
    //lineHeight: [42, .7, 22],
    child: {
        selector: 'em',
        size: [19, .7, 19]
    }
}

export const placeDetailStyle = {
    //maxWidth: [800, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto',
    font: globals.fonts.serif,
    size: [16, .7, 16],
    lineHeight: [28, .7, 28],
    marginTop: [40, .7, 30],
    marginBottom: [30, .7, 30],
    mobile: {
        paddingLeft: 25,
        paddingRight: 25
    }
}

export const placeSearchFormWrapperStyle = {
    background: colorPalette.forestGreen,
    color: white,
    display: flex,
    alignItems: center,
    justifyContent: 'space-around',
    height: [100, .7, 'auto'],
    size: 58,
    lineHeight: 70,
    mobile: {
        padding: '30px'
    }
}

export const placesSearchFormStyle = {
    flexDirection: row,
    border: 0,
    padding: 0,
    width: [900, globals.style.layoutScalingValue, '100%'],
    margin: '0',
    weight: 400,
    mobile: {
        flexDirection: column,
    },
    field: {
        position: absolute,
        top: 0
    },
    fieldset: {
        height: [52, .7, 52],
        marginBottom: 0,
        maxWidth: [750, globals.style.layoutScalingValue, '100%'],
    },
    inputLabelFocused: {
        transform: `translate(-6%, 14%) scale(${globals.style.inputLabelShrinkRatio})`
    },
    button: {
        display: flex,
        alignItems: center,
        justifyContent: center,
        marginTop: [0, .7, 20],
        height: [52, .7, 52],
        minWidth: [130, globals.style.layoutScalingValue, 130],
        width: auto,
        //width: [150, globals.style.layoutScalingValue, 150],
        backgroundColor: colorPalette.honeyYellow,
        borderColor: colorPalette.honeyYellow,
        mobile: {
            alignSelf: flexStart
        },
        hover: {
            backgroundColor: colorPalette.darkHoneyYellow,
            borderColor: colorPalette.darkHoneyYellow
        }
    },
    inputLabel: {
        color: colorPalette.darkGray
    },
    heading: {
        display: none
    }
}

export const placeCardStyle = {
    backgroundColor: white,
    hover: {
        color: colorPalette.paleGreen
    },
    textWrapper: {
        paddingLeft: [20, globals.style.layoutScalingValue, 20],
        paddingRight: [20, globals.style.layoutScalingValue, 20]
    },
    name: {
        size: [20, .7, 20],
        lineHeight: [24, .7, 32],
        weight: 400,
        width: '100%',
    },
    address: {
        size: [16, .7, 16],
        lineHeight: [20, .7, 20],
        width: '100%',
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

export const placeMarqueeStyle = {
    width: '100%',
    height: [420, .7, 230],
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    cursor: pointer,
    display: flex,
    alignItems: center,
    justifyContent: center,
    backgroundImage: `url(${CDN}assets/ij-home+2)`,
    hover: {
        cursor: 'default'
    }
  //  opacity: .4
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
        flexDirection: 'column-reverse'
    }
}

export const placeMapStyle = {
    height: 500,
    width: [500, globals.style.layoutScalingValue, '100%']
}

export const placePhotoStyle = {
    //  borderRadius: 1000,
    height: 500,
    width: [500, globals.style.layoutScalingValue, '100%']
}

export const placeImageWrapperStyle = {
    width: [500, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto'
}

export const placeTitleStyle = {
    display: flex,
    flexDirection: column,
    position: relative,
    textAlign: center,
    font: globals.fonts.fancy,
    size: [34, .7, 28],
    paddingTop: [20, .7, 20],
    paddingBottom: [20, .7, 20],
    borderRadius: [50, .7, '0'],
    margin: 0,
    marginBottom: [30, .7, 20],
    // borderRadius: `${sv(10)} ${sv(10)} 0 0`
}

export const placeAddressStyle = {
    font: globals.fonts.serif,
    size: [20, .7, 20]
}

export const placeWebsiteStyle = {
    font: globals.fonts.serif,
    size: [20, .7, 20]
}

export const placeTaxonomyStyle = {
    border: `1px solid ${colorPalette.seaFoamGreen}`,
    borderRadius: [7, .7, 7],
    padding: [30, .7, 30],
    marginBottom: [30, .7, 30],
    // boxShadow: '0px 3px 6px 0px #e6e6e6',
    title: {
        color: colorPalette.forestGreen,
        size: [22, .7, 22],
        letterSpacing: [0.5, .7, 0.5],
    }
}

export const placeTaxonomyWrapperStyle = {
    marginTop: [50, .7, 50],
    display: grid,
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: sv(20),
    mobile: {
        display: flex,
        flexDirection: column
    }
}

export const placeDescriptionStyle = {
    boxSizing: borderBox,
    paddingRight: [30, globals.style.layoutScalingValue, '0'],
}

export const placeDescriptionWrapperStyle = {
    marginTop: [30, .7, 20],
    marginBottom: [40, .7, 20],
    textAlign: 'center'
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
    display: flex,
    flexDirection: column,
    background: 'none',
    position: relative,
    width: '100%',
    padding: [20, globals.style.layoutScalingValue, 20],
    borderBottom: `1px solid ${globals.colors.borderColor}`,
    boxShadow: '1px 3px 5px 0px #e2e2e2',
    marginBottom: [20, .7, 20],
    paddingBottom: [50, .7, 50],
    image: {
        maxWidth: [150, .7, 150]
    }
}

export const placeReviewDescriptionStyle = {
    marginTop: [30, .7, 30]
}

export const placeReviewLikertStyle = {
    display: 'flex',
    flexDirection: 'column',
    font: globals.fonts.serif,
    marginBottom: [25, .7, 25]
}

export const placeFlaggedTextStyle = {
    color: '#fff',
    size: [32, .7, 22],
    padding: [20, .7, 20],
    zIndex: 1
}

export const placeReviewBlurStyle = {
    position: absolute,
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: '#000'
}

export const placeReviewReportIconStyle = {
    marginTop: 20,
    position: absolute,
    bottom: [20, .7, 20],
    zIndex: 3,
    hover: {
        color: colorPalette.red,
        cursor: pointer
    }
}

export const bookmarkIconStyle = isBookmark => {
    return {
        size: [20, .7, 20],
        marginLeft: [20, globals.style.layoutScalingValue, 20],
        color: isBookmark ? colorPalette.honeyYellow : globals.colors.borderColor
    }
}

export const bookmarkStyle = isBookmark => {
    return {
        display: flex,
        alignItems: center,
        backgroundColor: white,
        border: `1px solid ${globals.colors.borderColor}`,
        borderRadius: [5, .7, 5],
        position: absolute,
        right: [80, .7, 5],
        top: [20, .7, 20],
        size: [14, .7, 14],
        padding: `${sv(10, .7)} ${sv(40, globals.style.layoutScalingValue)} ${sv(10, .7)} ${sv(40, globals.style.layoutScalingValue)}`,
        hover: {
            cursor: pointer,
        }
    }
}
