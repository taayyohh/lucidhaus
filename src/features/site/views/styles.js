import {colorPalette, globals}                                                     from 'config/styles'
import {CDN}                                                                             from 'config/variables'
import {center, column, flex, inlineFlex, none, pointer, relative, sv, uppercase, white} from 'utils/themer'

export const homeImageWrapperStyle = {
    height: '100vh',
    width: '100vw',
    mobile: {
        height: '35vh'
    }
}

export const homeImageStyle = {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    cursor: pointer,
    display: flex,
    alignItems: center,
    justifyContent: center,
    backgroundImage: `url(${CDN}assets/ij-home+2)`
}

export const homeQuoteStyle = {
    position: relative,
    zIndex: 1,
    width: [1107, globals.style.layoutScalingValue, '100%'],
    height: [564, globals.style.layoutScalingValue, 250],
    marginTop: [-314, globals.style.layoutScalingValue, '0'],
    borderRadius: `${sv(10)} ${sv(10)} ${sv(10)} 0`,
    borderRadiusLeft: 0,
    paddingLeft: [90, globals.style.layoutScalingValue, 25],
    size: [96, globals.style.layoutScalingValue, 54],
    lineHeight: [110, globals.style.layoutScalingValue, 60],
    textTransform: uppercase,
    backgroundColor: colorPalette.forestGreen,
    display: inlineFlex,
    alignItems: center,
    justifyContent: center,
    color: white,
    mobile: {
        borderRadius: 0
    },
    child: {
        selector: 'span',
        color: colorPalette.seaGreen
    }
}

export const homeSpacerStyle = {
    height: [180, .7, 50],
    width: '100%',
    backgroundColor: colorPalette.honeyYellow,
    zIndex: 1
}

export const homeSignupImageWrapperStyle = {
    display: flex,
    justifyContent: center,
    alignItems: center,
    minWidth: [1015, globals.style.layoutScalingValue, '100%'],
    height: [910, globals.style.layoutScalingValue, 350],
    backgroundColor: colorPalette.paleGreen,
    marginTop: [-235, .7, '0']
}

export const homeSignupImageStyle = {
    width: [908, globals.style.layoutScalingValue, '100%'],
    height: [800, globals.style.layoutScalingValue, 300],
    paddingTop: [40, .7, 40],
    margin: 'auto',
}

export const homeSignupWrapperStyle = {
    display: flex,
    marginBottom: [100, .7, 100],
    mobile: {
        flexDirection: column
    }
}

export const homeSignupQuoteWrapperStyle = {
    width: [670, globals.style.layoutScalingValue, '100%'],
    paddingTop: [70, globals.style.layoutScalingValue],
    paddingLeft: [108, globals.style.layoutScalingValue],
    paddingRight: [108, globals.style.layoutScalingValue],
    margin: '0 auto'
}

export const homeSignupQuoteStyle = {
    size: [48, globals.style.layoutScalingValue, 24],
    lineHeight: [55, globals.style.layoutScalingValue, 30],
    paddingLeft: 0
}

export const homeSignupButtonStyle = {
    width : '100%',
    height: [80, globals.style.layoutScalingValue, 80],
    marginTop: [30, .7, 30],
    size: [32, .7, 32],
    weight: 700,
    lineHeight: [38, .7, 38],
    textTransform: uppercase,
    display: flex,
    alignItems: center,
    justifyContent: center,
    border: `1px solid ${colorPalette.forestGreen}`,
    borderRadius: [10, .7, 10],
    textDecoration: none,
    color: colorPalette.forestGreen,
    hover: {
        backgroundColor: colorPalette.forestGreen,
        color: white
    }
}
