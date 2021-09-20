import {colorPalette, globals} from 'config/styles'
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
    white
}                              from 'utils/themer'

export const headerMenuPanelWrapperStyle = {
    position: absolute,
    // zIndex: -1
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
    paddingLeft: [60, globals.style.layoutScalingValue],
    paddingRight: [60, globals.style.layoutScalingValue],
    backgroundColor: '#f9f9f9',
    overflowY: hidden,
    borderLeft: `1px solid #dadce0`,
    boxSizing: borderBox,
    zIndex: 22,
    mobile: {
        top: 50,
        left: 0
    },
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
    paddingTop: [150, .7, 50],
    height: '100%',
    width: '100%'
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

export const headerMenuListItemStyle = isActive => {
    return {
        position: relative,
        display: block,
        color: !isActive ? globals.colors.black : colorPalette.honeyYellow,
        fontFamily: globals.fonts.sans,
        textDecoration: 'none',
        size: [20, .8, 20],
        marginRight: [40, globals.style.layoutScalingValue, '0'],
        marginLeft: [40, globals.style.layoutScalingValue, '0'],
        transition: 'background-color 500ms ease',
        mobile: {
            width: '100%',
            marginBottom: 15
        },
        hover: {
            color: colorPalette.seaGreen,
            mobile: {
                color: black
            }
        },
        child: {
            selector: 'sup',
            position: absolute
        }
    }

}

export const headerMenuActiveIndicator = {
    position: absolute,
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: colorPalette.honeyYellow,
    height: [3, .7, 3]
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
export const dashboardMenuStyle = {
    minHeight: '750px',
    mobile: {
        minHeight: auto,
        zIndex: 5,
        background: '#fff'
    }
}

export const dashboardUserMenuToggleStyle = {
    zIndex: 3,
    position: absolute,
    left: 0,
    top: 14,
    mobile: {
        left: 0,
        width: '100%',
        background: '#f2f2f2',
        top: 0,
        paddingLeft: 37,
        paddingTop: 5,
        borderBottom: `1px solid #d9dce0`,
    }
}

export const dashboardMenuMobileStyle = {
    overflow: 'hidden',
    position: absolute,
    left: 0,
    top: 0,
    width: '100%',
    backgroundColor: white,
    zIndex: 1,
    mobile: {
        top: 35
    }
}

export const dashboardMenuInnerStyle = {
    width: [300, globals.style.layoutScalingValue, '100%'],
    position: 'fixed',
    borderRight: '1px solid #dadce0',
    mobile: {
        background: '#fff',
        position: absolute,
        top: 100,
        left: 0
    }

}
export const dashboardMenuItemStyle = isActive => {
    return {
        display: flex,
        alignItems: center,
        borderBottom: '1px solid #dadce0',
        boxSizing: borderBox,
        paddingLeft: [10, globals.style.layoutScalingValue, 10],
        paddingRight: [10, globals.style.layoutScalingValue, 10],
        paddingTop: [20, .7, 20],
        paddingBottom: [20, .7, 20],
        lineHeight: [20, .7, 20],
        color: !isActive ? black : colorPalette.honeyYellow,
        textDecoration: none,
        hover: {
            color: colorPalette.honeyYellow,
            cursor: pointer
        },
        child: [
            {
                selector: 'svg',
                size: [20, .7, 20],
                marginRight: [20, globals.style.layoutScalingValue, 20]
            }
        ]
    }
}

export const dashboardItemTitleStyle = {
    size: [18, .7, 18],
    lineHeight: [18, .7, 18]
}

export const dashboardIconWrapperStyle = {
    display: flex,
    alignItems: center,
    justifyContent: center,
    width: [50, globals.style.layoutScalingValue, 50]
}

export const dashboardActiveIndicator = {
    position: absolute,
    height: [10, .7, 10],
    width: [10, .7, 10],
    borderRadius: [5, .7, 5],
    right: [-20, .7, -20],
    backgroundColor: colorPalette.honeyYellow
}

export const headerAccountMenuButtonStyle = {
    textTransform: 'none',
    size: [14, .7, 14],
    weight: 500,
    hover: {
        cursor: pointer
    }
}

export const headerAccountMenuDropdownWrapperStyle = {
    position: absolute,
    width: '100%',
    background: '#fff',
    overflow: 'hidden',
    borderRadius: [5, .7, 5],
    height: 0,
    left: 0,
    top: [30, .7, 30],
    textDecoration: none,
    hover: {
        cursor: pointer
    }
}

export const headerAccountMenuLinkStyle = {
    textDecoration: none,
    marginBottom: [4, .7, 4],
    color: globals.colors.textColor,
    signOut: {
        color: colorPalette.red,
        hover: {
            color: colorPalette.red
        }
    },
    hover: {
        color: colorPalette.forestGreen,
        textDecoration: 'underline'
    }
}

export const headerDashboardMenuLinkStyle = {}
