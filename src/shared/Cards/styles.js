import {globals} from 'config/styles'
import {
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
    sv,
    uppercase,
    white,
    wrap
} from 'utils/themer'

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
    },
}
export const genericCardStyle = {
    display: flex,
    flexDirection: column,
    boxSizing: borderBox,
  //   background: '#fdfdfd',
    borderRadius: '5px',
    paddingBottom: [20, .7, 20],
    borderBottom: `1px solid #dadce0`,
  //  boxShadow: `0px 1px 1px #dadce0`,
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
    transition: 'transform 500ms ease'
}
export const genericCardDetailImageWrapperStyle = {
    height: auto,
}

export const genericCardImageWrapperStyle = {
    overflow: hidden,
    height: auto,
    display: flex,
    width: '100%'
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

export const genericCardArtistNameStyle = {
    textTransform: uppercase,
    size: [15, .7, 15],
    letterSpacing: [0.7, .7, 0.7],
    color: black
}

export const genericCardDescriptionStyle = {
    color: '#201f1f'
}

export const shopCardImageStyle = {
    width: auto,
    //  height: auto
}

export const productCardCountStyle = {
    width: auto,
    background: none,
    border: 0,
    boxShadow: none,
    alignSelf: flexEnd,
    padding: 0,
    margin: 0
}