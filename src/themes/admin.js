import {
    borderBox,
    center,
    flex,
    fixed,
    none,
    pointer,
    relative,
    row,
    sv, column, uppercase
} from '../utils/themer'
import {globals} from '../variables/styles'

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
    paddingBottom: [50, .7, 50],
    marginBottom: [50, .7, 50],
    font: globals.fonts.script
}

export const adminCreateButtonStyle = {

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
