import {
    black,
    borderBox,
    column,
    flex,
    hidden,
    none,
    sv,
    white
} from '../utils/themer'
import {globals} from '../variables/styles'

export const marketplaceWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: sv(30),
    margin: '0 auto',
    mobile: {
        display: flex,
        flexDirection: column
    }
}

export const businessCardStyle = {
    boxSizing: borderBox,
    background: '#f8f8f8',
    border: `1px solid ${globals.colors.borderColor}`,
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

export const businessCardImageStyle = {}

export const businessCardImageWrapperStyle= {
    overflow: hidden,
    border: '1px solid #e9e8e8',
    maxHeight: [200, .7, 200]
}

export const businessCardNameStyle = {
    font: globals.fonts.type,
    size: [24, .7, 24],
    lineHeight: [32, .7, 32],
    textDecoration: none,
    paddingTop: [20, .7, 20],
    paddingBottom: [10, .7, 10],
    color: black
}

export const businessWrapperStyle = {
    display: flex,
}

export const businessStyle = {
    title: {
        font: globals.fonts.script,
        size: 42,
        margin: 0,
        marginBottom: 15
    }
}

export const businessLeftStyle = {}