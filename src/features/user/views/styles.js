import {colorPalette, globals}                         from 'config/styles'
import {borderBox, column, flex, sv, uppercase, white} from 'utils/themer'

export const signInFormWrapperStyle = {
    maxWidth: [700, .7, '100%'],
    margin: '0 auto'
}

export const signUpFormStyle = {
    maxWidth: [700, .7, '100%'],
    margin: '0 auto',
    marginTop: [50, .7, 50],
    padding: 70,
    fieldset: {
        marginBottom: [15, .7, 15]
    }
}

export const signInFormStyle = {
    ...signUpFormStyle
}

export const purchaseHistoryStyle = {
    display: flex,
    flexDirection: column,
    gridGap: sv(30, globals.style.layoutScalingValue)
}

export const purchaseHistoryOrderStyle = {
    border: `1px solid ${globals.colors.borderColor}`,
    padding: [20, globals.style.layoutScalingValue, 20],
    borderRadius: [10, globals.style.layoutScalingValue, 10],
    boxSizing: borderBox
}

export const purchaseHistoryOrderInnerStyle = {
    display: flex,
    padding: [20, .7, 20],
    child: {
        selector: '> div',
        marginRight: [50, .7,'0'],
        mobile: {
            marginBottom: 10
        }
    },
    mobile: {
        flexDirection: column
    }
}

export const purchaseHistoryItemStyle = {}

export const orderInfoHeadingStyle = {
    weight: 500,
    textTransform: uppercase,
    size: [10, .7, 10],
    letterSpacing: [.5, .7, .5]
}

export const orderInfoTextStyle = {
    size: [20, .7, 20],
    child: {
        selector: '> span',
        size: [12, .7, 12]
    }
}

export const orderProductListStyle = {
    border: `1px solid ${globals.colors.borderColor}`,
    padding: sv(50, .7),
    width: 'calc(100% - 100px)',
    margin: '0 auto',
    background: white,
    borderRadius: [20, .7, 20],
    mobile: {
        width: '100%'
    }
}

export const orderProductListHeadingStyle = {
    size: [32, .7, 20],
    weight: 800,
    color: colorPalette.darkHoneyYellow
}
