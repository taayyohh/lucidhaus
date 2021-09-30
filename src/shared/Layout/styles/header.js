import {colorPalette, globals} from 'config/styles'
import {
    absolute,
    black,
    block,
    borderBox,
    center,
    column,
    flex,
    flexEnd,
    flexStart,
    inlineFlex,
    none,
    pointer,
    relative,
    spaceBetween,
    uppercase,
    white
} from 'utils/themer'

export const mobileHeaderMenuToggleStyle = {
    mobile: {
        height: 50,
        width: 50,
        backgroundColor: '#000'
    }
}

export const headerStyle = {
    display: flex,
    flexDirection: column,
    alignItems: center,
    justifyContent: center,
    position: relative,
    // position: 'sticky; position: -webkit-sticky;',
    font: globals.fonts.sans,
    textTransform: uppercase,
    borderBottom: `1px solid ${colorPalette.gray}`,
    backgroundColor: white,
    top: 0,
    zIndex: 11,
    // height: [globals.style.headerHeight, .7, globals.style.mobileHeaderHeight],
    //marginBottom: [50, .7, '0'],
    marginBottom: 0,
    mobile: {
        display: flex,
        flexDirection: column,
        backgroundColor: white,
        boxSizing: borderBox
    },
    logo: {},
    logoLink: {}
}

export const headerInnerStyle = {
    display: flex,
    alignItems: center,
    justifyContent: spaceBetween,
    position: relative,
    margin: '0 auto',
    height: [55, .7, '100%'],
    // width: '100%',
    width: [globals.style.siteInnerWidth, globals.style.layoutScalingValue, '100%'],
    mobile: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: spaceBetween,
        boxSizing: borderBox
    }
}

export const headerTopStyle = {
    display: flex,
    alignItems: center,
    justifyContent: flexEnd,
    width: '100%',
    height: [28, .7, 28],
    backgroundColor: colorPalette.ijGray,
    inner: {
        display: flex,
        alignItems: center,
        marginRight: [78, globals.style.layoutScalingValue, 25],
        textTransform: none
    },
    link: {
        marginLeft: [38, .7, 25],
        size: [12, .7, 12],
        textDecoration: none,
        color: colorPalette.paleGreen,
        hover: {
            cursor: pointer,
            color: colorPalette.seaGreen
        }
    }
}

export const smallButtonStyle = {
    display: inlineFlex,
    alignItems: center,
    marginLeft: [10, .7, 10],
    textDecoration: none,
    textTransform: none,
    color: globals.colors.textColor,
    size: [13, .7, 13],
    paddingLeft: [18, .7, 18],
    paddingRight: [18, .7, 18],
    paddingTop: [9, .7, 9],
    paddingBottom: [9, .7, 9],
    borderRadius: [5, .7, 5],
    border: `1px solid ${white}`,
    mobile: {
        alignSelf: flexStart
    },
    hover: {
        color: white,
        backgroundColor: colorPalette.forestGreen,
        border: `1px solid ${colorPalette.forestGreen}`,
    }
}

export const headerButtonWrapperStyle = {
    position: relative,
    mobile: {
        display: flex,
        flexDirection: column
    }
}

export const headerSearchWrapperStyle = {
    position: relative,
    marginLeft: [25, globals.style.layoutScalingValue, 25],
    paddingLeft: [25, globals.style.layoutScalingValue, '0'],
    before: {
        position: absolute,
        left: 0,
        content: "''",
        height: '100%',
        width: '1px',
        backgroundColor: globals.colors.borderColor,
        mobile: {
            content: none
        }
    }
}

export const headerButtonSignInStyle = {
    ...smallButtonStyle,
    border: `1px solid ${globals.colors.borderColor}`,
    mobile: {
        ...smallButtonStyle.mobile,
        display: flex,
        justifyContent: center,
        minWidth: 120,
        marginBottom: 15
    }
}

export const headerButtonSignUpStyle = {
    ...smallButtonStyle,
    backgroundColor: colorPalette.seaGreen,
    color: white,
    mobile: {
        ...smallButtonStyle.mobile,
        display: flex,
        justifyContent: center,
        minWidth: 120,
        marginBottom: 15
    }
}

export const headerNowPlayingStyle = {
    display: 'flex',
    alignItems: 'center',
}

export const headerNowPlayingCoverArtStyle = {
    height: 60
}

export const headerNowPlayingInfoStyle = {
    paddingLeft: [20, .7, 20],
    child: [
        {
            selector: '> a',
            display: block,
            size: [14, .7, 14],
            color: black,
            textDecoration: none,
            hover: {
                color: colorPalette.honeyYellow
            },
            firstChild: {
                size: [22, .7, 22],
            }
        }
    ]
}

export const headerLogoWrapperStyle = {
    marginRight: [40, .7, 40]
}


export const headerLogoLinkStyle = {
    display: block,
    width: [170, globals.style.layoutScalingValue, 170],
    zIndex: 1,
    mobile: {
        minWidth: 50
    }
}

export const cartNumberStyle = {
    width: 20,
    height: 20,
    background: colorPalette.honeyYellow,
    color: '#fff',
    display: inlineFlex,
    alignItems: flexStart,
    justifyContent: center,
    borderRadius: 20,
    fontSize: 16,
    fontWeight: 400,
    marginTop: -4,
    marginLeft: 2,
}

export const headerIconStyle = {
    alignSelf: center,
    size: [15, .7, 15],
    color: black,
    marginLeft: [5, .7, 5],
    mobile: {},
    hover: {
        cursor: 'pointer',
        color: colorPalette.seaGreen,
        transition: 'color 500ms ease'
    }
}

export const headerPlayIconStyle = {
    ...headerIconStyle,
    marginRight: [7, .7, 7]
}

export const headerMenuIconWrapperStyle = {
    display: flex,
    alignItems: center,
    paddingLeft: [20, globals.style.layoutScalingValue, '0']
}

export const headerSearchIconStyle = {
    display: flex,
    size: [18, .6, 18],
    //minWidth: [18, globals.style.layoutScalingValue, 18]
}
