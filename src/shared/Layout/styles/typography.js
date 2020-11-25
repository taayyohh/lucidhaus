import {globals}  from '../../../config/styles'
import {
    flex,
    relative
} from '../../../utils/themer'

export const defaultLinkStyle = {
    color: globals.colors.linkColor
}
export const richTextDefaultStyle = {
    size: [18, .9, 18],
    lineHeight: [24, .9, 24],
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
        },
        {
            selector: 'iframe',
            mobile: {
                width: '100% !important',
                height: '56.25vw'
            }
        },
        {
            selector: 'blockquote',
            child: {
                selector: 'p',
                firstChild: {
                    marginBottom: 35
                }
            }
        },
        {
            selector: '.embed-video',
            display: flex,
            marginTop: 30,
            marginBottom: 30
        }
    ],

}
export const defaultH2Style = {
    margin: 0
}