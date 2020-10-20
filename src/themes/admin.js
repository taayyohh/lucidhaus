import {
    auto,
    black,
    center,
    column,
    fixed,
    flex,
    flexEnd,
    flexStart,
    grid,
    inlineFlex,
    none,
    pointer,
    relative,
    row,
    sv,
    white
} from '../utils/themer'
import {globals}                 from '../variables/styles'
import {marketplaceWrapperStyle} from './business'

export const adminMarketplaceWrapperStyle = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gridGap: sv(30),
}

export const adminMarketplaceInnerWrapperStyle = {
    ...marketplaceWrapperStyle,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: sv(30),
}

export const adminBusinessCardWrapperStyle = {

}

export const adminBusinessCardStyle = {
    display: grid,
    gridTemplateColumns: `${sv(100)} 1fr`,
    gridGap: sv(15),
    width: '100%',
    mobile: {
        display: flex
    },
    imageWrapper: {
        display: flex,
        justifyContent: center,
        maxHeight: 'none',
        width: auto
    },
    image: {
        maxWidth: [90, .7, '100%']
    },
    name: {
        paddingTop: 0,
        size: [20, .7, 20],
        lineHeight: [22, .7, 22]
    }
}

export const adminDashboardStyle = {
    heading: {
        margin: 0,
        fontFamily: globals.fonts.script,
        tablet: {
            size: 60
        },
        small: {},
        large: {}
    }
}

export const adminCardControlsButtonWrapperStyle = {
    display: flex,
    flexDirection: 'row',
    justifyContent: flexEnd
}

export const adminShopCardWrapperStyle = {
    ...adminBusinessCardWrapperStyle
}

export const adminShopCardStyle = {
    ...adminBusinessCardStyle
}

export const genericButtonStyle = {
    border: `1px solid ${globals.colors.borderColor}`,
    alignSelf: flexStart,
    paddingTop: [10, .7, 10],
    paddingBottom: [10, .7, 10],
    paddingLeft: [20, .7, 20],
    paddingRight: [20, .7, 20],
    color: black,
    textDecoration: none,
    transition: 'background-color 250ms ease, color 250ms ease',
    marginLeft: [10, globals.style.layoutScalingValue, '0'],
    marginTop: [20, globals.style.layoutScalingValue, 20],
    borderRadius: 5,
    hover: {
        cursor: pointer,
        backgroundColor: globals.colors.linkHoverColor,
        color: white
    }
}

export const adminCardControlsButtonStyle = {
    ...genericButtonStyle,
    marginLeft: [10, globals.style.layoutScalingValue, '0'],
    marginTop: [20, globals.style.layoutScalingValue, 20],
}

export const menuPanelStyle = {
    paddingTop: [150, .7, 50],
    height: '100%',
    width: '100%'
}

export const menuPanelHeaderStyle = {
    font: globals.fonts.script,
    size: [48, .6, 24],
    marginBottom: [30, .6, 30]
}

export const adminMenuToggleStyle = {
    height: [50, .7, 50],
    width: [50, .7, 50],
    borderRadius: [25, .7, 25],
    backgroundColor: '#afe',
    position: fixed,
    top: 100,
    right: 50
}

export const adminHeadingStyle = {
    size: [42, .7, 26],
    paddingBottom: [25, .7, 25],
    marginBottom: [25, .7, 25],
    borderBottom: `${sv(5)} solid #000`,
    font: globals.fonts.script
}

export const adminCreateButtonStyle = {
    ...adminCardControlsButtonStyle,
    display: inlineFlex,
    alignSelf: flexStart,
    marginBottom: [50, .7, 50],
    marginLeft: 0,
    marginTop: 0
}

export const adminControlPanelStyle = {
    position: relative,
    display: flex,
    flexDirection: column,
    background: '#f8f8f8',
    border: `1px solid ${globals.colors.borderColor}`,
    height: [500, .7, 'auto'],
    padding: sv(20, globals.style.layoutScalingValue),
    mobile: {
        padding: 20
    }
}

export const adminControlPanelInnerStyle = {
    display: flex,
    flexDirection: column,
}

export const adminMenuStyle = {
    ...menuPanelStyle,
    list: {
        display: flex,
        flexDirection: column,
        margin: 0,
        padding: 0,
    },
    listItem: {
        position: relative,
        listStyleType: none,
        marginBottom: [10, .7, 10],
        //  width: '100%',
    },
    link: {
        textDecoration: none,
        color: globals.colors.linkColor,
        transition: 'background 500ms ease',
        hover: {
            background: globals.colors.orange,
            cursor: pointer
        }
    },
    subListWrapper: {
        borderTop: `2px solid ${globals.colors.salmon}`,
        width: '100%',
    },
    subList: {
        padding: 0,
        width: '100%',
        child: [
            {
                selector: '> li',
                margin: 0

            }
        ]
    }
}

export const adminOrderStyle = {
    display: flex,
    flexDirection: row
}

export const manageProductStyle = {
    imageWrapper: {
        width: 50,
        child: {
            selector: 'img',
            width: '100%'
        }
    }
}

export const manageBusinessStyle = {
    imageWrapper: {
        width: 50,
        child: {
            selector: 'img',
            width: '100%'
        }
    }
}
