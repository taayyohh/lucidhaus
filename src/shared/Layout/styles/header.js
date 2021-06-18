import {colorPalette, globals} from 'config/styles'
import {
    black,
    block,
    borderBox,
    center,
    column, fixed,
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
    marginBottom: [50, .7, '0'],
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
    height: '100%',
    // width: '100%',
    width: [globals.style.siteInnerWidth, globals.style.layoutScalingValue, '100%'],
    mobile: {
        paddingLeft: 25,
        paddingRight: 25,
        justifyContent: spaceBetween,
        boxSizing: borderBox
    }
}

export const headerTopStyle = {
    display: flex,
    alignItems: center,
    justifyContent: flexEnd,
    width: '100%',
    height: [90, .7, 60],
    backgroundColor: colorPalette.ijGray,
    inner: {
        display: flex,
        alignItems: center,
        marginRight: [78, globals.style.layoutScalingValue, 25],
        textTransform: none
    },
    link: {
        marginLeft: [38, .7, 25],
        textDecoration: none,
        color: colorPalette.paleGreen,
        hover: {
            cursor: pointer,
            color: colorPalette.seaGreen
        }
    },
    signUp: {
        display: inlineFlex,
        alignItems: center,
        marginLeft: [38, .7, 25],
        textDecoration: none,
        backgroundColor: colorPalette.forestGreen,
        color: white,
        paddingLeft: [36, .7, 24],
        paddingRight: [36, .7, 24],
        paddingTop: [14, .7, 9],
        paddingBottom: [14, .7, 9],
        height: [40, .7, 40],
        borderRadius: [5, .7, 5],
        hover: {
            color: white,
            backgroundColor: colorPalette.seaGreen
        }
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
    width: [80, .7, 60],
    height: [80, .7, 60],
    marginRight: [40, .7, 40]
}


export const headerLogoLinkStyle = {
    width: [80, .7, 50],
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
    size: [18, .7, 18],
    color: black,
    mobile: {
        marginLeft: 15
    },
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

