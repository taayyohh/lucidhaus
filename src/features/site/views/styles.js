import {center, flex, inlineFlex, pointer, uppercase, white} from 'utils/themer'
import {CDN}                                                 from 'config/variables'
import {colorPalette, globals} from 'config/styles'

export const homeImageWrapperStyle = {
    height: '100vh',
    width: '100vw',
    mobile: {
        height: '60vh'
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
    width: [1107, globals.style.layoutScalingValue, '100%'],
    height: [564, globals.style.layoutScalingValue, 300],
    marginTop: [-314, globals.style.layoutScalingValue, '0'],
    borderRadius: [10, .7, 10],
    paddingLeft: [90, globals.style.layoutScalingValue, 25],
    size: [96, .7, 54],
    lineHeight: [110, .7, 60],
    textTransform: uppercase,
    backgroundColor: colorPalette.forestGreen,
    display: inlineFlex,
    alignItems: center,
    justifyContent: center,
    color: white,
    child: {
        selector: 'span',
        color: colorPalette.seaGreen
    }
}

export const homeSpacerStyle = {
    height: [180, .7],
    width: '100%',
    backgroundColor: colorPalette.honeyYellow
}
