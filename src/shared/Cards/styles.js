import {colorPalette, globals} from 'config/styles'
import {
    absolute,
    auto,
    black,
    block,
    borderBox,
    center,
    column,
    flex,
    flexEnd,
    grid,
    hidden,
    none,
    pointer,
    relative,
    sv,
    uppercase,
    white,
    wrap
}                              from 'utils/themer'

export const productCardImageStyle = {
    width: 80,
    maxWidth: 80,
    minWidth: 80,
    wrapper: {
        marginRight: 15
    }
}

export const productCardInfoStyle = {
    display: flex,
    alignItems: center
}

export const productCardTextWrapperStyle = {
    paddingLeft: [30, .7, 30]
}

export const productCardPriceStyle = {
    size: [22, .7, 22]
}

export const productCardTitleStyle = {
    display: block,
    size: [24, .7, 24],
    color: black,
    width: '100%',
    margin: 0
}

export const productCardControlsStyle = {
    display: flex,
    flexDirection: 'row',
    justifyContent: flexEnd,
    width: '100%'
}

export const productCardStyle = {
    display: grid,
    gridTemplateColumns: '4fr 1fr',
    background: '#f9f9f9',
    borderBottom: '1px solid #c2c2c2',
    borderRadius: [5, .7, 5],
    padding: 20,
    textDecoration: none,
    marginBottom: 20,
    mobile: {
        display: flex,
        flexDirection: column
    },
    inner: {
        display: flex,
        flexWrap: wrap,
        background: '#f3f3f3',
        padding: `${sv(30)} ${sv(30)}`
    },
    category: {
        display: none
    }
}

export const genericCardStyle = {
    display: flex,
    flexDirection: column,
    boxSizing: borderBox,
    borderRadius: '5px',
    paddingBottom: [20, .7, 20],
    borderBottom: `1px solid #dadce0`,
    textDecoration: none,
    transition: 'background-color 500ms ease, border-color 500ms ease',
    hover: {
        backgroundColor: white,
        borderColor: '#828282'
    }
}

export const genericCardImageStyle = {
    width: auto,
    maxWidth: '100%',
    transition: 'transform 500ms ease',
    mobile: {
        objectFit: 'contain'
    }
}

export const genericCardNameStyle = {
    font: globals.fonts.sans,
    size: [28, .7, 28],
    lineHeight: [32, .7, 32],
    weight: 300,
    letterSpacing: [.2, .7, .2],
    textDecoration: none,
    paddingTop: [5, .7, 5],
    paddingBottom: [10, .7, 10],
    color: black
}

export const genericCardAddressStyle = {
    size: [28, .7, 28],
    lineHeight: [32, .7, 32],
    weight: 300,
}

export const genericCardPriceStyle = {
    font: globals.fonts.sans,
    size: [28, .7, 28],
    lineHeight: [32, .7, 32],
    weight: 300,
    letterSpacing: [.2, .7, .2],
    textDecoration: none,
    paddingTop: [5, .7, 5],
    paddingBottom: [10, .7, 10],
    color: black,
    child: {
        selector: '> span',
        size: [20, .7, 20]
    }
}

export const genericCardTextWrapperStyle = {
    display: flex,
    flexDirection: column,
    alignItems: flexEnd,
    paddingRight: [25, globals.style.layoutScalingValue, 25],
    paddingBottom: [10, globals.style.layoutScalingValue, 10],
    paddingTop: [20, .7, 20],
    boxSizing: borderBox,
}

export const genericCardProductCategoryStyle = {
    textTransform: uppercase,
    size: [18, .7, 18],
    letterSpacing: [0.7, .7, 0.7],
    color: black
}

export const genericCardPlaceNameStyle = {
    textTransform: uppercase,
    size: [15, .7, 15],
    letterSpacing: [0.7, .7, 0.7],
    color: black
}

export const genericCardPlaceWrapperStyle = {
    display: 'flex',
    mobile: {
        flexDirection: column
    },
    child: {
        selector: '> div',
        marginLeft: [5, .7, '0']
    }
}

export const genericCardDescriptionStyle = {
    color: '#201f1f'
}

export const genericCardQuantityStyle = {
    marginRight: 'auto',
    color: black,
}

export const productCardCountStyle = {
    width: auto,
    background: none,
    border: 0,
    boxShadow: none,
    alignSelf: flexEnd,
    padding: 0,
    margin: 0,
    mobile: {
        marginTop: 20
    }
}

export const placeCardInclusiveScoreWrapperStyle = {
    display: flex,
    alignItems: center,
    // justifyContent: center,
    marginBottom: 10
}

export const placeCardInclusiveScore = {
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
    marginLeft: [10, .7, 10],
    size: [14, .7, 14]
}

export const placeCardStyle = {
    transition: '250ms background-color ease, 250ms border-color ease',
    paddingTop: [20, globals.style.layoutScalingValue, 20],
    paddingBottom: [20, globals.style.layoutScalingValue, 20],
    paddingLeft: [45, globals.style.layoutScalingValue, 30],
    paddingRight: [45, globals.style.layoutScalingValue, 30],
    borderRadius: [5, globals.style.layoutScalingValue, 5],
    border: `1px solid #fff`,
    backgroundColor: '#f5f5f5',
    address: {
        display: none
    },
    name: {
        size: [22, .7, 22],
     //   weight: 600
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

export const placeCardRatingsItemStyle = {
    mobile: {
        marginBottom: 20
    }
}

export const placeCardRatingsIconWrapperStyle = {
    display: flex,
    flexDirection: column,
    color: colorPalette.forestGreen,
    size: [14, .7, 14]
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


