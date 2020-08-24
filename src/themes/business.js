import {
    center,
    flex,
    none
}                from '../utils/themer'
import {globals} from '../variables/styles'

export const businessWrapperStyle = {
    display: flex,
}

export const businessStyle = {
    title: {
        font: globals.fonts.fancyFont,
        size: 42,
        margin: 0,
        marginBottom: 15
    }
}

export const businessCardStyle = {
    width: '50%',
    paddingTop: 0,
    paddingRight: 50,
    paddingLeft: 50,
    textDecoration: none,
    title: {
        margin: 0,
        textAlign: center,
        textTransform: 'uppercase',
        letterSpacing: 2,
        size: [28, .5],
        // border: `1px solid #000`
    }
}

export const businessLeftStyle = {}