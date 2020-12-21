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
    white,
    wrap
}                from 'utils/themer'

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
    //  background: '#f8f8f8',
    borderRadius: '5px',
    paddingTop: [20, .7, 20],
    paddingBottom: [20, .7, 20],
    paddingLeft: [20, .7, 20],
    paddingRight: [20, .7, 20],
    borderBottom: `1px solid #dadce0`,
    boxShadow: `0px 1px 1px #dadce0`,
    textDecoration: none,
    transition: 'background-color 500ms ease, border-color 500ms ease',
    hover: {
        backgroundColor: white,
        borderColor: '#828282'
    }
}
export const genericCardImageStyle = {
    width: auto,
    maxWidth: '100%'
}
export const genericCardDetailImageWrapperStyle = {
    height: auto,
    width: [500, globals.style.layoutScalingValue, '100%'],
    marginLeft: '0 auto',
    alignSelf: center
}
export const genericCardImageWrapperStyle = {
    overflow: hidden,
    border: '1px solid #e9e8e8',
    height: [250, globals.style.layoutScalingValue, 250],
    width: '100%'
}
export const genericCardNameStyle = {
    font: globals.fonts.sans,
    size: [24, .7, 24],
    lineHeight: [32, .7, 32],
    textDecoration: none,
    paddingTop: [20, .7, 20],
    paddingBottom: [10, .7, 10],
    color: black
}

export const genericCardTextWrapperStyle = {
    paddingLeft: [25, globals.style.layoutScalingValue, 25],
    paddingRight: [25, globals.style.layoutScalingValue, 25],
    paddingBottom: [30, globals.style.layoutScalingValue, 30],
    boxSizing: borderBox,
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