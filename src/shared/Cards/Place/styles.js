import {colorPalette, globals} from 'config/styles'
import {
    absolute,
    borderBox,
    center,
    column,
    flex,
    grid,
    hidden,
    none,
    pointer,
    relative,
    sv,
    uppercase,
    white
}                              from 'utils/themer'

export const placeCardInclusiveScoreWrapperStyle = {
    display: flex,
    alignItems: center
}
export const placeCardInclusiveScoreInfoStyle = {
    marginTop: 20,
    boxSizing: borderBox,
    padding: [20, .7, 20],
    backgroundColor: colorPalette.ijGray,
    borderRadius: [10, .7, 10]
}
export const placeCardInclusiveScoreStyle = {
    height: [40, .7, 40],
    width: [40, .7, 40],
    minHeight: [40, .7, 40],
    minWidth: [40, .7, 40],
    borderRadius: [30, .7, 30],
    backgroundColor: colorPalette.forestGreen,
    color: white,
    display: flex,
    alignItems: center,
    justifyContent: center,
    marginRight: [10, .7, 10],
    size: [14, .7, 14]
}
export const placeCardInclusiveScoreTextStyle = {
    size: [14, .7, 14]
}
export const placeCardStyle = {
    transition: '250ms background-color ease, 250ms border-color ease',
    paddingTop: [20, globals.style.layoutScalingValue, 20],
    paddingBottom: [30, globals.style.layoutScalingValue, 30],
    paddingLeft: [40, globals.style.layoutScalingValue, 30],
    paddingRight: [40, globals.style.layoutScalingValue, 30],
    borderRadius: [5, globals.style.layoutScalingValue, 5],
    border: `1px solid #fff`,
    backgroundColor: '#f5f5f5',
    address: {
        display: none
    },
    name: {
        size: [22, .7, 18],
        weight: 600
    },
    locationWrapper: {
        display: flex,
        alignItems: center,
        marginTop: [10, .7, 10]
    },
    locationTextWrapper: {
        display: flex,
        alignItems: center,
        marginTop: [2, .7, 2],
        size: [16, .7, 16]
    },
    locationIcon: {
        size: [16, .7, 16],
        marginRight: [10, .7, 10]
    },
    city: {},
    state: {
        marginLeft: [3, .7, 3]
    },
    hover: {
        cursor: pointer,
        backgroundColor: white,
        borderColor: colorPalette.forestGreen
    }
}
export const placeCardRatingsWrapperStyle = {
    display: grid,
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: sv(20),
    font: globals.fonts.serif,
    marginTop: [10, .7, 10],
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
export const placeCardRatingsItemStyle = {
    display: flex,
    alignItems: center,
    flexDirection: column,
    mobile: {
        marginBottom: 20
    }
}
export const placeCardRatingsIconWrapperStyle = {
    display: flex,
    alignItems: center,
    flexDirection: column,
    color: colorPalette.forestGreen,
    size: [10, .7, 10],
    textTransform: uppercase,
    weight: 600
}
const placeReviewScaleWidth = 80
export const placeCardRatingScaleStyle = {
    position: relative,
    height: [20, globals.style.layoutScalingValue, 20],
    border: `1px solid ${colorPalette.forestGreen}`,
    width: [placeReviewScaleWidth, globals.style.layoutScalingValue, placeReviewScaleWidth],
    borderRadius: [30, .7, 30],
    marginTop: [10, .7, 10],
    overflow: hidden
}
export const placeCardRatingScaleInnerStyle = rating => {
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
