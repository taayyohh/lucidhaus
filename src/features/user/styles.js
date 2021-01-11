import {globals} from 'config/styles'
import {
    borderBox,
    grid,
    sv
} from 'utils/themer'

export const signUpPromptStyle = {
    font: globals.fonts.sans,
    weight: 300,
    letterSpacing: [0.4, .7, 0.4],
    size: [18, .7, 18],
    paddingTop: [20, .7, 20],
    marginLeft: 'auto'
}

export const signInFormWrapperStyle = {
    maxWidth: [700, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto'
}

export const signUpFormStyle = {
    maxWidth: [700, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto',
    padding: [70, 120],
    inner: {
        child: {
            selector: '> fieldset',
            marginBottom: [20, .7, 20]
        }
    }
}

export const signInFormStyle = {
    ...signUpFormStyle
}

export const purchaseHistoryStyle = {
    display: grid,
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: sv(30, globals.style.layoutScalingValue)
}

export const purchaseHistoryItemStyle = {
    border: `1px solid ${globals.colors.borderColor}`,
    padding: [20, globals.style.layoutScalingValue, 20],
    borderRadius: [10, globals.style.layoutScalingValue, 10],
    boxSizing: borderBox
}