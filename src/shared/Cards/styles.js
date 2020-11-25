import {
    colorPalette,
    globals
} from '../../config/styles'
import {
    auto,
    black,
    borderBox,
    center,
    column,
    flex,
    hidden,
    none,
    sv,
    white,
    wrap
} from '../../utils/themer'

export const productCardStyle = {
    border: `1px solid ${colorPalette.gray}`,
    borderRadius: 10,
    padding: 20,
    margin: 40,
    textDecoration: none,
    transition: 'background-color 500ms ease, border-color 500ms ease',
    hover: {
        backgroundColor: '#f5f5f5',
        borderColor: '#f5f5f5'
    },
    controlsInner: {},
    marginBottom: 20,
    inner: {
        display: flex,
        flexWrap: wrap,
        background: '#f3f3f3',
        padding: `${sv(30)} ${sv(30)}`
    },
    title: {
        width: '100%',
        order: -1,
        margin: 0
    },
    description: {},
    category: {
        display: none
    },
    price: {},
    controls: {
        display: flex,
        width: '100%'

    },
    image: {
        width: 80,
        maxWidth: 80,
        minWidth: 80,
        wrapper: {

            marginRight: 15
        }
    }
}
export const genericCardStyle = {
    display: flex,
    flexDirection: column,
    boxSizing: borderBox,
    background: '#f8f8f8',
    borderRadius: '5px',
    paddingTop: [20, .7, 20],
    paddingBottom: [20, .7, 20],
    paddingLeft: [20, .7, 20],
    paddingRight: [20, .7, 20],
    textDecoration: none,
    transition: 'background-color 500ms ease, border-color 500ms ease',
    hover: {
        backgroundColor: white,
        borderColor: '#828282'
    }
}
export const genericCardImageStyle = {
    width: '100%'
}
export const genericCardDetailImageWrapperStyle = {
    height: auto,
    width: 500,
    marginLeft: '0 auto',
    alignSelf: center
}
export const genericCardImageWrapperStyle = {
    overflow: hidden,
    border: '1px solid #e9e8e8',
    height: [300, .7, 300],
    width: '100%'
}
export const genericCardNameStyle = {
    font: globals.fonts.serif,
    size: [24, .7, 24],
    lineHeight: [32, .7, 32],
    textDecoration: none,
    paddingTop: [20, .7, 20],
    paddingBottom: [10, .7, 10],
    color: black
}