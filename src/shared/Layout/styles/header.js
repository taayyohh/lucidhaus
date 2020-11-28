import {
    colorPalette,
    globals
} from '../../../config/styles'
import {
    borderBox,
    center,
    column,
    flex,
    relative,
    spaceBetween,
    uppercase,
    white
} from '../../../utils/themer'

export const mobileHeaderMenuToggleStyle = {
    mobile: {
        height: 50,
        width: 50,
        backgroundColor: '#000'
    }
}

export const headerStyle = {
    display: flex,
    alignItems: center,
    justifyContent: center,
    position: 'sticky; position: -webkit-sticky;',
    font: globals.fonts.sans,
    textTransform: uppercase,
    borderBottom: `1px solid ${colorPalette.gray}`,
    backgroundColor: white,
    top: 0,
    zIndex: 11,
    height: [globals.style.headerHeight, .7, globals.style.mobileHeaderHeight],
    marginBottom: 50,
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

export const headerLogoLinkStyle = {
    size: [60, .7, 60],
    width: [80, .7, 80],
    zIndex: 2,
}

