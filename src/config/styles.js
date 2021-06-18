import {getScrollbarWidth} from 'utils/helpers'

export const breakpointUpperLimit = {
    mobile: 768,
    tablet: 1024,
    desktop: 1280,
    small: 1680,
    large: 1920
}

export const colorPalette = {
    hyphaGray: '#fcfcfc',
    brightRed: '#d11',
    red: '#8C141E',
    black: '#0A1626',
    gray: '#dadce0',
    lightGray: '#dadce0',
    purple: '#822cbf',
    grayPurple: '#908999',
    borderColor: '#dedede',
    ijGray: '#F2F2F2',
    forestGreen: '#004722',
    seaGreen: '#0e834b',
    paleGreen: '#80A390',
    honeyYellow: '#FFB400'
}

export const globals = {
    fonts: {
        fancy: '\'Shrikhand\', cursive',
        sans: '\'Teko\', sans-serif',
        serif: "'EB Garamond', serif"
    },
    style: {
        layoutScalingValue: .45,
        inputLabelShrinkRatio: .9,
        siteInnerWidth: 1570,
        contentWidth: 1320,
        headerHeight: 100,
        mobileHeaderHeight: 80,
        resetBody: () => {
            document.body.style.overflow = 'auto'
            document.body.style.overflowX = 'hidden'
            document.body.style.paddingRight = '0px'
        },
        hideBodyOverflow: () => {
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = getScrollbarWidth() + 'px'
        }
    },
    colors: {
        linkColor: colorPalette.red,
        linkHoverColor: colorPalette.honeyYellow,
        inputLabelColor: colorPalette.black,
        menuPanelCloseButtonBackgroundColor: colorPalette.honeyYellow,
        transitionOverlayBackground: colorPalette.grayPurple,
        buttonHoverColor: colorPalette.grayPurple,
        borderHoverColor: colorPalette.honeyYellow,
        borderColor: colorPalette.lightGray,
        errorColor: colorPalette.brightRed
    }
}

export const genericMobileContainerStyles = {
    mobile: {
        flexDirection: 'column',
        position: 'relative',
        minWidth: '100%',
        width: '100%',
        padding: '30px 25px 0 25px',
        boxSizing: 'border-box',
        minHeight: 400,
        zIndex: 0,
        borderRadius: 0
    }
}
