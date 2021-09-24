import {colorPalette, globals} from 'config/styles'
import {
    black,
    borderBox,
    center,
    column,
    flex,
    flexStart,
    inlineFlex,
    none,
    pointer,
    spaceBetween,
    uppercase,
    white
}                              from 'utils/themer'

export const footerStyle = {
    size: [15, .7, 15],
    borderTop: `1px solid ${colorPalette.gray}`,
    zIndex: 3,
    background: white,
    marginTop: [150, .7],
    paddingTop: 30,
    paddingBottom: [180, .7, 150],
    minHeight: [150, .7, 150],
    maxWidth: '100%',
    mobile: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 150,
        flexDirection: column
    },
    copy: {
        mobile: {
            marginBottom: 10
        }
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
    },
    innerLinksWrapper: {
        display: flex,
        alignItems: center,
        mobile: {
            flexDirection: column,
            alignItems: flexStart
        },
        child: {
            selector: 'a',
            color: colorPalette.paleGreen,
            marginLeft: [15, .7, '0'],
            textDecoration: none,
            mobile: {
                marginLeft: 0,
                marginRight: 12,
                marginBottom: 10
            },
            hover: {
                color: colorPalette.seaGreen,
                textDecoration: 'underline'
            }
        }
    },
    linksWrapper: {
        mobile: {
            display: flex,
            flexDirection: column
        }
    },
    feedback: {
        display: inlineFlex,
        alignItems: center,
        color: `${white} !important`,
        justifyContent: center,
        backgroundColor: colorPalette.seaGreen,
        paddingLeft: [15, .7, 15],
        paddingRight: [15, .7, 15],
        paddingTop: [10, .7, 10],
        paddingBottom: [10, .7, 10],
        borderRadius: [5, .7, 5],
        mobile: {
            marginBottom: 5
        },
        hover: {
            backgroundColor: colorPalette.forestGreen,
            color: `${white} !important`,
            textDecoration: 'none !important'
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
        color: colorPalette.seaGreen
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
                    background: colorPalette.honeyYellow,
                    cursor: pointer
                }
            }
        ]
    }
}
