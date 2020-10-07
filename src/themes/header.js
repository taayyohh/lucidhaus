import {
    absolute,
    block,
    borderBox,
    center,
    column,
    flex,
    none,
    relative,
    spaceBetween,
    uppercase,
    white
} from '../utils/themer'
import {globals} from '../variables/styles'

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
    font: globals.fonts.header,
    textTransform: uppercase,
    borderBottom: '1px solid #000',
    backgroundColor: white,
    top: 0,
    zIndex: 11,
    height: [100, .7, 120],
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

export const headerMenu = {
    zIndex: 1,
    width: '100%',
    position: relative,
    list: {
        display: flex,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        mobile: {
            flexDirection: column,
        },
        child: {
            selector: '> li',
            listStyleType: 'none',
            mobile: {
                width: '100%',
                textAlign: center,
                borderBottom: '1px solid #000'
            }
        }
    },
    listItem: {
        display: block,
        color: globals.colors.black,
        fontFamily: globals.fonts.header,
        textDecoration: 'none',
        size: [20, .6, 20],
        paddingTop: [50, .7, '0'],
        paddingBottom: [50, .7, '0'],
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
}

export const headerMenuAuth = {
    display: flex,
    position: absolute,
    top: 10,
    right: 0,
    listStyle: none,
    padding: '10px 25px',
    mobile: {
        display: flex,
        position: relative,
        justifyContent: 'center',
        padding: 0,
    },
    list: {
        display: flex,
        width: '100%,',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: center,
        mobile: {
            display: flex,
            width: '100%',
            flexDirection: 'row',
            boxShadow: '9px 7px 0px 0px #000;'
        },
        child: {
            selector: '> li',
            mobile: {
                width: '50%',
                textAlign: center,
                borderBottom: '1px solid #000',
                firstChild: {
                    borderRight: '1px solid #000',
                }
            }
        }
    },
    listItem: {
        fontSize: [16, .6, 20],
        textDecoration: none,
        marginLeft: [10, .7, '0'],
        mobile: {
            display: block,
            width: '100%',
            padding: '15px 0'
        },
    }
}
