import {
    colorPalette,
    globals
} from '../../config/styles'
import {
    absolute,
    auto,
    black,
    block,
    borderBox,
    center,
    column,
    fixed,
    flex,
    hidden,
    inlineFlex,
    none,
    pointer,
    relative,
    row,
    transparent,
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
    overflowY: hidden,
    // borderLeft: `1px solid #dadce0`,
    boxSizing: borderBox,
    zIndex: 22,
    background: colorPalette.gray,
    scrollBar: {
        display: none
    },
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
    paddingTop: [150, .7, 120],
    height: '100%',
    width: '100%'
}
export const menuPanelHeaderStyle = {
    font: globals.fonts.fancy,
    size: [48, .6, 24],
    marginBottom: [30, .6, 30]
}

export const menuToggleStyle = {
    display: inlineFlex,
    mobile: {
        marginLeft: 20
    },
    child: {
        selector: 'svg',
        mobile: {
            marginTop: 3,
            height: 21,
            width: 21
        }
    },
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
    justifyContent: center
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
        paddingBottom: 10
    },
    hover: {
        color: globals.colors.orange,
        mobile: {
            color: black,
            hover: {
                color: transparent
            }
        }
    },
    child: {
        selector: 'sup',
        position: absolute
    }
}
export const headerMenuListStyle = {
    display: flex,
    position: relative,
    after: {
        content: '\'\'',
        width: '1px',
        height: '100%',
        background: colorPalette.gray,
        position: absolute,
        right: 0,
        mobile: {
            display: none
        }
    }
}
export const headerMenuControlWrapperStyle = {
    display: flex,
    alignItems: center,
    zIndex: 0,
    paddingLeft: [20, globals.style.layoutScalingValue, 20],
    mobile: {
        display: flex,
        position: relative
    }
}
export const headerMenuAuthStyleListItemStyle = {
    fontSize: [16, .6, 20],
    textDecoration: none,
    marginLeft: [10, .7, '0'],
    mobile: {
        display: block,
        width: '100%',
        padding: 0
    },
}
