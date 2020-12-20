import {globals} from 'config/styles'
import {center}  from 'utils/themer'

export const userDashboardStyle = {
    greeting: {
        font: globals.fonts.fancy,
        textAlign: center,
        size: [44, .7, 36]
    }

}

export const signUpPromptStyle = {
    font: globals.fonts.sans,
    weight: 300,
    letterSpacing: [0.4, .7, 0.4],
    size: [18, .7, 18],
    paddingTop: [20, .7, 20],
    marginLeft: 'auto'
}