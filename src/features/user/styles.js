import {globals} from 'config/styles'

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
    padding: [70, 120]
}

export const signInFormStyle = {
    ...signUpFormStyle
}