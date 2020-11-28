import {
    colorPalette,
    globals
} from '../../config/styles'
import {
    absolute,
    auto,
    block,
    borderBox,
    center,
    column,
    fixed,
    flex,
    none,
    pointer,
    relative,
    row,
    white
} from '../../utils/themer'

export const headerMenuPanelWrapperStyle = {
    position: absolute,
    zIndex: -1
}
export const headerMenuPanelStyle = {
    display: flex,
    position: fixed,
    flexDirection: column,
    font: globals.fonts.sans,
    height: '100vh',
    width: [940, .5, '100vw'],
    maxWidth: [940, .5, '100vw'],
    top: 0,
    right: 0,
    paddingLeft: [120, globals.style.layoutScalingValue],
    paddingRight: [60, globals.style.layoutScalingValue],
    backgroundColor: white,
    // borderLeft: `1px solid #dadce0`,
    boxSizing: borderBox,
    zIndex: 22,
    background: colorPalette.gray,
    heading: {
        font: globals.fonts.sans,
        size: [72, .5],
        marginTop: 0,
        marginBottom: [45, .7],
        lineHeight: 66,
        letterSpacing: -1,
        weight: 800,
        //  color: globals.colors.headingColor
    },
    closeButton: {
        position: absolute,
        display: flex,
        alignItems: center,
        justifyContent: center,
        top: 0,
        right: 0,
        height: [80, .7],
        width: [80, .7],
        backgroundColor: globals.colors.menuPanelCloseButtonBackgroundColor,
        //  backgroundColor: colorPalette.offBlue,
        transition: 'background-color 250ms ease',
        hover: {
            // backgroundColor: colorPalette.lightBlue,
            cursor: pointer
        }
    },
    closeButtonIcon: {
        color: white,
        size: 30
    }
}
export const menuPanelStyle = {
    paddingTop: [150, .7, 50],
    height: '100%',
    width: '100%'
}
export const menuPanelHeaderStyle = {
    font: globals.fonts.fancy,
    size: [48, .6, 24],
    marginBottom: [30, .6, 30]
}

export const menuToggleStyle = {
    hover: {
        cursor: pointer
    }
}
export const headerMenuStyle = {
    zIndex: 1,
    // width: '100%',
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
    size: [20, .8, 20],
    paddingRight: [40, globals.style.layoutScalingValue, '0'],
    paddingLeft: [40, globals.style.layoutScalingValue, '0'],
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
    // marginLeft: auto,
    mobile: {
        flexDirection: column,
        marginRight: auto,
        marginLeft: 0,
        marginTop: 100
    }
}
export const headerMenuAuthStyle = {
    display: flex,
    // marginLeft: auto,
    zIndex: 0,
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
export const headerMenuToggleStyle = {
    outline: none,
    border: none,
    cursor: pointer,
    // position: absolute,
    // top: [18, .7, 18],
    // left: [15, .7, 15],
    width: [50, .7, 50],
    height: [50, .7, 50],
    borderRadius: '50%',
    background: '#000',
}