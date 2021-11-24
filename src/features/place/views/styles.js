import {colorPalette, globals} from 'config/styles'
import {CDN}                   from 'config/variables'
import {textAreaWrapperStyle}  from 'shared/Fields/styles'
import {
    absolute,
    auto,
    black,
    borderBox,
    center,
    column,
    fixed,
    flex,
    flexStart,
    grid,
    hidden,
    inlineBlock,
    inlineFlex,
    none,
    pointer,
    relative,
    row,
    spaceBetween,
    sv,
    uppercase,
    white,
    wrap
}                              from 'utils/themer'

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

export const placesContentWrapperStyle = {
    width: '100%',
    margin: 0,
    height: `calc(100vh - ${sv(100, .7)} - ${sv(28, .7)} - ${sv(55, .7)})`,
    overflow: hidden,
    mobile: {
        height: auto,
        overflow: auto
    }
}

export const placesContentInnerWrapperStyle = noResults => {
    return {
        display: 'flex',
        flexDirection: row,
        mobile: {
            flexDirection: 'column-reverse',
        }
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

export const placeDetailStyle = {
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
        marginRight: [30, .7, '0'],
        width: auto
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
        whiteSpace: 'nowrap',
        width: auto,
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

export const genericPlaceCardStyle = {
    backgroundColor: white,
    border: `1px solid ${globals.colors.borderColor}`,
    mobile: {
        marginBottom: 15
    },
    hover: {
        color: colorPalette.forestGreen,
        borderColor: black
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
    justifyContent: spaceBetween,
    width: [1200, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto',
    mobile: {
        flexDirection: column
    }
}

export const placeInnerLeftWrapperStyle = {
    width: [800, globals.style.layoutScalingValue, '100%'],
    marginRight: auto,
    marginTop: [35, .7, 35],
    mobile: {
        marginRight: 0
    }
}

export const placeInnerRightWrapperStyle = {
    width: [300, globals.style.layoutScalingValue, '100%'],
    marginTop: [50, .7, 50]
}

export const placeInnerRightInfoStyle = {
    position: 'sticky',
    top: [50, .7, 50],
    background: white,
    border: `1px solid ${globals.colors.borderColor}`,
    borderRadius: [10, globals.style.layoutScalingValue, 10],
    marginTop: [30, .7, 30],
    paddingLeft: [30, globals.style.layoutScalingValue, 30],
    paddingRight: [30, globals.style.layoutScalingValue, 30],
    paddingTop: [30, globals.style.layoutScalingValue, 30],
    paddingBottom: [30, globals.style.layoutScalingValue, 30],

}

export const placeMarqueeStyle = url => {
    return {
        width: '100%',
        height: [420, .7, 230],
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        cursor: pointer,
        display: flex,
        alignItems: center,
        justifyContent: center,
        backgroundImage: !url ? `url(${CDN}assets/ij-home+2)` : `url(${CDN}${url})`,
        hover: {
            cursor: 'default'
        }
    }

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
    height: [250, globals.style.layoutScalingValue, 250],
    width: '100%'
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
    font: globals.fonts.fancy,
    size: [48, .7, 28],
    lineHeight: [54, .7, 32],
    paddingBottom: [20, .7, 20],
    weight: 600,
    margin: 0,
    marginBottom: [30, .7, 20],
    borderBottom: `1px solid ${globals.colors.borderColor}`
}

export const placeAddressStyle = {
    display: flex,
    size: [16, .7, 16],
    marginTop: [20, .7, 20],
    address: {
        marginLeft: [10, .7, 10]
    }
}

export const placeWebsiteStyle = {
    display: flex,
    size: [16, .7, 16],
    textDecoration: none,
    marginTop: [10, .7, 10],
    hover: {
        color: globals.colors.linkHoverColor
    }
}

export const placeWebsiteIconStyle = {
    marginRight: [10, .7, 10],
    marginTop: [2, .7, 2]
}

export const placeTagsStyle = {
    display: inlineFlex,
    size: [16, .7, 16],
    textDecoration: none,
    marginTop: [10, .7, 10]
}

export const placeTagsIconStyle = {
    marginRight: [10, .7, 10],
    marginTop: [5, .7, 5]
}

export const placeTagsWrapperStyle = {
    display: flex,
    flexWrap: wrap,
    child: {
        selector: '> a',
        display: inlineBlock,
        color: colorPalette.paleGreen,
        marginRight: [5, .7, 5],
        textDecoration: none,
        hover: {
            color: colorPalette.forestGreen
        }
    }
}

export const placeTaxonomyStyle = {
    borderRadius: [5, .7, 5],
    paddingLeft: [20, globals.style.layoutScalingValue, 20],
    paddingRight: [20, globals.style.layoutScalingValue, 20],
    paddingTop: [20, globals.style.layoutScalingValue, 20],
    paddingBottom: [20, globals.style.layoutScalingValue, 20],
    border: `1px solid ${globals.colors.borderColor}`,
    background: white,
    title: {
        textTransform: uppercase,
        letterSpacing: [0.5, .7, 0.5],
        marginBottom: [15, .7, 15],
        size: [13, .7, 13],
        weight: 600,
    },
    name: {
        size: [15, .7, 15],
        color: colorPalette.darkGray
    }
}

export const placeTaxonomyWrapperStyle = {
    display: grid,
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: sv(20),
    mobile: {
        display: flex,
        flexDirection: column
    }
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
    width: `calc(100% - ${sv(100, globals.style.layoutScalingValue)})`,
    padding: 0,
    border: 0,
    marginTop: [50, .7, 50],
    marginBottom: [150, .7, 100],
    marginLeft: auto,
    marginRight: auto,
    mobile: {
        width: '100%'
    },
    heading: {
        size: [20, .7, 20]
    }
}

export const reviewFormWrapperStyle = {
    paddingLeft: [70, globals.style.layoutScalingValue, '0'],
    paddingRight: [70, globals.style.layoutScalingValue, '0']
}

export const reviewLeaveWrapperStyle = {}

export const reviewFormHeadingStyle = {
    display: flex,
    flexDirection: column,
    size: [24, .7, 18],
    marginBottom: [20, .7, 20],
    child: {
        selector: 'span',
        size: [30, .7, 24],
        color: colorPalette.darkHoneyYellow

    }
}

export const reviewHeadingStyle = {
    size: [22, .7, 22],
    paddingTop: [20, .7, 20],
    paddingBottom: [20, .7, 20],
    marginBottom: [20, .7, 20],
    weight: 600,
    borderBottom: `1px solid ${globals.colors.borderColor}`
}

export const placeReviewStyle = {
    display: flex,
    background: 'none',
    position: relative,
    width: '100%',
    padding: [20, globals.style.layoutScalingValue, 20],
    borderBottom: `1px solid ${globals.colors.borderColor}`,
    marginBottom: [20, .7, 20],
    paddingBottom: [100, .7, 100],
    mobile: {
        flexDirection: column
    },
    image: {
        maxWidth: [150, .7, 150]
    }
}

export const placeReviewUserAvatarStyle = {
    height: [100, globals.style.layoutScalingValue, 100],
    width: [100, globals.style.layoutScalingValue, 100],
    borderRadius: [50, globals.style.layoutScalingValue, 50],
    backgroundColor: colorPalette.seaFoamGreen
}

export const placeReviewUserReviewCountStyle = {
    size: [16, .7, 16]
}

export const placeReviewUserNameStyle = {
    marginTop: [5, .7, 5],
    size: [13, .7, 13],
    weight: 700,
    fontStyle: 'italic',
    textAlign: center
}

export const placeReviewUserInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: center,
    marginRight: [50, .7, 50],
    width: [120, .7, 100],
    minWidth: [120, .7, 100]
}

export const placeReviewedByStyle = {
    size: [13, .7, 13],
    weight: 400,
    color: colorPalette.darkGray
}

export const placeReviewDescriptionStyle = {
    size: [17, .7, 17],
    marginTop: [20, .7, 20]
}

export const placeReviewLikertStyle = {
    display: grid,
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: sv(20),
    font: globals.fonts.serif,
    marginBottom: [25, .7, 25],
    width: '100%',
    mobile: {
        display: flex,
        flexDirection: column
    },
    child: {
        selector: 'svg',
        size: [32, .7, 24],
        marginRight: [10, .7, 10],
        color: colorPalette.paleGreen
    }
}

export const placeLikertItemWrapperStyle = {
    mobile: {
        marginBottom: 20
    }
}

export const placeReviewIconWrapperStyle = {
    display: flex,
    flexDirection: column,
    color: colorPalette.forestGreen,
    child: {
        selector: 'strong',
        size: [18, .6, 18]
    }
}

const placeReviewScaleWidth = 150
export const placeReviewScaleStyle = {
    position: relative,
    height: [20, .7, 20],
    border: `1px solid ${colorPalette.forestGreen}`,
    width: [placeReviewScaleWidth, globals.style.layoutScalingValue, placeReviewScaleWidth],
    borderRadius: [20, .7, 20],
    marginTop: [10, .7, 10],
    overflow: hidden
}

export const placeReviewScaleInnerStyle = rating => {
    return {
        position: absolute,
        left: 0,
        top: 0,
        height: '100%',
        width: [`${(rating / 5) * placeReviewScaleWidth}`, globals.style.layoutScalingValue, `${(rating / 5) * placeReviewScaleWidth}`],
        background: colorPalette.seaFoamGreen,
        borderRadius: [20, .7, 20],
        transition: 'width: 500ms ease'
    }
}

export const placeReviewDisclaimerStyle = {
    size: [11, .7, 11],
    color: colorPalette.darkGray,
    fontStyle: 'italic',
    paddingTop: [10, .7, 10],
    marginTop: [30, .7, 30],
    borderTop: `1px solid ${globals.colors.borderColor}`
}

export const placeFlaggedTextStyle = {
    color: black,
    size: [22, .7, 22],
    padding: [20, .7, 20],
    zIndex: 1,
    position: absolute
}

export const placeReviewBlurStyle = {
    position: absolute,
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: globals.colors.borderColor
}

export const placeReviewReportWrapperStyle = {
    position: absolute,
    right: [25, globals.style.layoutScalingValue, 25],
    bottom: [25, globals.style.layoutScalingValue, 25],
    marginTop: 20,
    display: flex,
    alignItems: center,
    color: colorPalette.darkGray,
    size: [15, .7, 15],
    hover: {
        color: colorPalette.red,
        cursor: pointer,
        child: {
            selector: 'svg',
            color: colorPalette.red,
            cursor: pointer
        }
    }
}

export const placeReviewReportIconStyle = {
    marginRight: [12, .7, 12],
    zIndex: 3,
    color: colorPalette.darkGray
}

export const placeReportPortalStyle = {
    position: fixed,
    zIndex: 10,
    height: [550, .7, 200],
    width: [700, globals.style.layoutScalingValue, 250],
    border: `1px solid ${globals.colors.borderColor}`,
    padding: [50, globals.style.layoutScalingValue, 30],
    background: white,
    top: '50%',
    left: '50%',
    marginLeft: [-350, globals.style.layoutScalingValue, '0'],
    marginTop: [-270, globals.style.layoutScalingValue, '0'],
    boxShadow: '0px 0px 15px 2px #00000029',
    mobile: {
        top: 50,
        left: 50,
        width: 'calc(100% - 100px)',
        height: auto,
        zIndex: 20
    }
}

export const placesReportFormStyle = {
    padding: 0,
    border: 0,
    heading: {
        size: [26, .6, 26]
    },
    inputLabel: {
        size: [16, .7, 16],
    },
    textAreaWrapper: {
        child: {
            selector: 'textarea',
            ...textAreaWrapperStyle.child,
            height: [200, globals.style.layoutScalingValue, 200],
            padding: [20, .7, 20],
            boxSizing: borderBox
        }
    }
}

