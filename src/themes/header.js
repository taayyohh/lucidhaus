import {
    absolute,
    auto,
    block,
    borderBox,
    center,
    column,
    flex,
    none,
    relative,
    row,
    spaceBetween,
    uppercase,
    white
}                from '../utils/themer'
import {globals} from '../config/styles'

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
    borderBottom: '1px solid #dadce0',
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
    position: relative,
    margin: '0 auto',
    height: '100%',
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

export const headerMenuStyle = {
    zIndex: 1,
    width: '100%',
    position: relative,
    display: flex,
    flexDirection: row,
    alignItems: center,
    justifyContent: center,
    mobile: {
        flexDirection: column
    }
}

export const headerMenuListItemStyle = {
    display: block,
    color: globals.colors.black,
    fontFamily: globals.fonts.sans,
    textDecoration: 'none',
    size: [20, .6, 20],
    paddingRight: [40, .7, '0'],
    paddingLeft: [40, .7, '0'],
    transition: 'background-color 500ms ease',
    mobile: {
        width: '100%',
        padding: '15px 0'
    },
    hover: {
        color: globals.colors.orange,
        mobile: {
            backgroundColor: '#e0c678',
            color: white,
        }
    },
    child: {
        selector: 'sup',
        position: absolute
    }
}

export const headerMenuListStyle = {
    display: flex,
    marginLeft: auto,
    mobile: {
        flexDirection: column,
        marginRight: auto,
        marginLeft: 0,
        marginTop: 100
    }
}

export const headerMenuAuthStyle = {
    display: flex,
    marginLeft: auto,
    mobile: {
        display: flex,
        flexDirection: column,
        position: relative,
        margin: 0,
        padding: 0,
        marginRight: auto
    }
}

export const headerMenuAuthStyleListItemStyle = {
    fontSize: [16, .6, 20],
    textDecoration: none,
    marginLeft: [10, .7, '0'],
    mobile: {
        display: block,
        width: '100%',
        padding: '15px 0'
    },
}
