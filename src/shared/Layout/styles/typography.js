import {globals}  from 'config/styles'
import {relative} from 'utils/themer'

export const defaultLinkStyle = {
    color: globals.colors.linkColor,
    hover: {
        color: globals.colors.linkHoverColor
    }
}
export const richTextDefaultStyle = {
    size: [18, .9, 18],
    lineHeight: [28, .9, 28],
    webkitTextSizeAdjust: '100%',
    font: globals.fonts.serif,
    child: [
        {
            selector: 'p',
            letterSpacing: [0.3, .7, 0.3],
            marginBottom: 30,
            child: {
                selector: 'a',
                color: globals.colors.linkColor
            }
        },
        {
            selector: 'a',
            color: globals.colors.linkColor,
            textDecoration: 'underline',
        },
        {
            selector: 'strong',
            weight: 800
        },
        {
            selector: 'em',
            fontStyle: 'italic'
        },
        {
            selector: 'sup',
            verticalAlign: 'top',
            position: relative,
            top: [-5, .7, -5],
            fontSize: 'x-small',
            ie: {
                fontSize: 'x-small'
            }
        }
    ],

}
export const defaultH2Style = {
    margin: 0
}
