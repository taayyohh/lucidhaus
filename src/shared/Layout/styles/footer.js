import {
    colorPalette,
    globals
} from 'config/styles'
import {
    black,
    borderBox,
    center,
    column,
    flex,
    flexStart,
    pointer,
    spaceBetween,
    uppercase,
    white
} from 'utils/themer'

export const footerStyle = {
    size: [18, .7, 18],
    letterSpacing: [0.2, .7, 0.2],
    textTransform: uppercase,
    borderTop: `1px solid ${colorPalette.gray}`,
    zIndex: 3,
    background: white,
    marginTop: [150, .7],
    paddingTop: 30,
    minHeight: [150, .7, 150],
    maxWidth: '100%',
    mobile: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 50,
        flexDirection: column
    },
    inner: {
        display: flex,
        justifyContent: spaceBetween,
        alignItems: center,
        margin: '0 auto',
        width: [globals.style.siteInnerWidth, globals.style.layoutScalingValue, '100%'],
        boxSizing: borderBox,
        mobile: {
            alignItems: flexStart,
            flexDirection: column
        }
    }
}

export const footerContactStyle = {
    display: flex,
    alignItems: center,
    mobile: {
        flexDirection: column,
        width: '100%',
        alignItems: flexStart
    }
}

export const footerBuiltByStyle = {
    size: [14, .7, 14],
    textTransform: 'lowercase',
    marginLeft: [10, .7, 10]
}

export const footerSocialStyle = {
    mobile: {
        display: flex,
        marginTop: 10,
        alignItems: flexStart
    }
}

export const footerIconStyle = {
    size: [24, .7, 24],
    marginLeft: [15, .7, '0'],
    mobile: {
        marginRight: 15
    },
    hover: {
        color: colorPalette.purple
    }
}

export const footerSubscribeStyle = {
    mobile: {
        width: '100%'
    },
    child: {
        selector: '> form',
        marginLeft: [30, .7, '0'],
        mobile: {
            display: flex,
            flexDirection: column,
            marginTop: 15
        },
        child: [
            {
                selector: '> input',
                border: `1px solid ${globals.colors.borderColor}`,
                height: [50, .7, 50],
                minWidth: [200, globals.style.layoutScalingValue, '100%'],
                paddingLeft: [20, globals.style.layoutScalingValue, 20],
                borderRadius: [10, .7, 10],
                mobile: {
                    width: '100%'
                }
            },
            {
                selector: '> button',
                height: [50, .7, 50],
                border: 0,
                borderRadius: [10, .7, 10],
                background: black,
                color: white,
                paddingLeft: [20, .7, 20],
                paddingRight: [20, .7, 20],
                marginLeft: [10, .7, '0'],
                textTransform: uppercase,
                letterSpacing: [1, .7, 1],
                size: [16, .7, 16],
                transition: 'background 250ms ease',
                mobile: {
                    marginTop: 15
                },
                hover: {
                    background: colorPalette.purple,
                    cursor: pointer
                }
            }
        ]
    }
}