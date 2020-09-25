import {
    borderBox,
    center,
    flex,
    fixed,
    none,
    pointer,
    relative,
    row,
    sv
}                from '../utils/themer'
import {globals} from '../variables/styles'

export const menuPanelStyle = {
    height: '100vh',
    position: fixed,
    width: [400, .7]

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

export const adminMenuStyle = {
    ...menuPanelStyle,
    list: {
        display: flex,
        margin: 0,
        padding: 0,
    },
    listItem: {
        position: relative,
        listStyleType: none,
        margin: 0,
        width: '100%',
    },
    link: {
        display: flex,
        alignItems: center,
        justifyContent: center,
        textDecoration: none,
        color: '#fff',
        background: '#000',
        padding: `${sv(30)} ${sv(20)}`,
        boxSizing: borderBox,
        width: '100%',
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
