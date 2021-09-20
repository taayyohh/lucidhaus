import {colorPalette, globals} from 'config/styles'
import {CDN}                   from 'config/variables'
import {
    absolute,
    auto,
    center,
    column,
    flex,
    flexStart,
    none,
    pointer,
    relative,
    sv,
    uppercase,
    white
}                              from 'utils/themer'

export const homeImageWrapperStyle = {
    display: flex,
    alignItems: center,
    justifyContent: center,
    height: '100vh',
    width: '100vw',
    background: '#000',
    mobile: {
        height: '50vh'
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
    backgroundImage: `url(${CDN}assets/ij-home+2)`,
    opacity: .4
}

export const homeSearchWrapperStyle = {
    display: flex,
    flexDirection: column,
    position: absolute,
    marginTop: [-250, .7, -25],
    padding: [40, .7, 40],
    borderRadius: [10, .7, 10],
    maxWidth: [800, globals.style.layoutScalingValue, '100%'],
    textAlign: 'center',
    mobile: {
        width: '100%'
    }
}

export const homeSearchStyle = {
    padding: 30,
    borderRadius: 10,
    mobile: {
        height: auto
    }
}

export const homeHeadlineStyle = {
    weight: 800,
    marginBottom: 20,
    lineHeight: [80, .7, 38],
    size: [62, .7, 26],
    color: '#fff',
    mobile: {
        marginBottom: 15
    }
}

export const homeQuoteStyle = {
    display: none,
    position: relative,
    zIndex: 1,
    width: [1107, globals.style.layoutScalingValue, '100%'],
    height: [564, globals.style.layoutScalingValue, 250],
    marginTop: [-314, globals.style.layoutScalingValue, '0'],
    borderRadius: `${sv(10)} ${sv(10)} ${sv(10)} 0`,
    borderRadiusLeft: 0,
    paddingLeft: [90, globals.style.layoutScalingValue, 25],
    size: [54, globals.style.layoutScalingValue, 32],
    lineHeight: [110, globals.style.layoutScalingValue, 45],
    textTransform: uppercase,
    backgroundColor: colorPalette.forestGreen,
    // display: inlineFlex,
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
    marginTop: [-235, .7, 50]
}

export const homeSignupImageStyle = {
    width: [908, globals.style.layoutScalingValue, 300],
    height: [800, globals.style.layoutScalingValue, 264],
    paddingTop: [40, .7, '0'],
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
    width: [1200, globals.style.layoutScalingValue, '100%'],
    background: white,
    paddingLeft: [108, globals.style.layoutScalingValue, '0'],
    paddingRight: [108, globals.style.layoutScalingValue, '0'],
    paddingTop: [50, globals.style.layoutScalingValue, 50],
    paddingBottom: [50, globals.style.layoutScalingValue, 50],
    marginTop: [80, .7, '0'],
    borderRadius: [10, .7, 10],
    border: `1px solid ${globals.colors.borderColor}`,
    margin: '0 auto'
}

export const homeSignupQuoteStyle = {
    size: [19, globals.style.layoutScalingValue, 19],
    width: '70%',
    margin: '0 auto',
    // lineHeight: [55, globals.style.layoutScalingValue, 30],
    paddingLeft: 0,
    child: {
        selector: '> div',
        marginTop: [15, .7, 15]
    }
}

export const homeSignupButtonStyle = {
    alignSelf: flexStart,
    width: '100%',
    height: [80, globals.style.layoutScalingValue, 50],
    marginTop: [30, .7, 30],
    size: [20, .7, 20],
    weight: 700,
    lineHeight: [38, .7, 22],
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
