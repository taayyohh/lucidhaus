import {
    borderBox,
    center,
    column,
    flex,
    uppercase,
    absolute,
    none,
    pointer,
    relative,
    white,
    block
} from '../utils/themer'
import {globals} from '../variables/styles'


export const headerStyle = {
    display: flex,
    alignItems: center,
    justifyContent: center,
    position: 'sticky; position: -webkit-sticky;',
    font: globals.fonts.headerFont,
    textTransform: uppercase,
    borderBottom: '1px solid #000',
    backgroundColor: '#fff',
    top: 0,
    zIndex: 10,
    height: [150, .7, 120],
    marginBottom: 50,
    mobile: {
        display: flex,
        flexDirection: column,
        backgroundColor: white,
        boxSizing: borderBox
    },
    logo: {},
    logoLink: {
        size: [60, .7, 60],
        width: [80, .7, 80],
        zIndex: 2,
    }
}

export const headerMenuWrapper = {
    mobile: {
        position: relative,
        width: '100%',
        overflow: 'hidden',
        boxShadow: '10px 10px 0px #000'
    }
}

export const headerMenuToggle = {
    mobile: {
        height: 40,
        width: 40,
        top: -63,
        right: 0,
        background: globals.colors.black,
        position: absolute,
        hover: {
            cursor: pointer
        }
    }
}

export const headerMenu = {
    zIndex: 1,
    backgroundColor: '#fff',
    width: '100%',
    position: relative,
    //overflow: hidden,
    mobile: {
        display: flex,
        flexDirection: column,
        position: absolute,
        width: '90%',
        left: '5%',
        top: 80,
        borderTop: '3px solid #000',
        borderLeft: '1px solid #000',
        borderRight: '1px solid #000',
    },
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
                //backgroundColor: '#eeceda',
                textAlign: center,
                borderBottom: '1px solid #000'
            }
        }
    },
    listItem: {
        display: block,
        color: globals.colors.black,
        fontFamily: globals.fonts.headerFont,
        textDecoration: 'none',
        size: [20, .6, 20],
        paddingTop: [50, .7, '0'],
        paddingBottom: [50, .7, '0'],
        paddingRight: [40, .7, '0'],
        paddingLeft: [40, .7, '0'],
        // backgroundColor: '#f0e9ff',
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
    top: 0,
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
