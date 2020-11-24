export const breakpointUpperLimit = {
    mobile: 768,
    tablet: 1024,
    desktop: 1280,
    small: 1680,
    large: 1920
}

export const colorPalette = {
    brightRed: '#d11',
    red: '#8C141E',
    black: '#0A1626',
    gray: '#b5b5b5',
    lightGray: '#e9e8e8',
    tan: '#D9D7BA',
    purple: '#822cbf',
    brown: '#73462C',
    lightGold: 'rgba(217, 215, 186, 0.32)',
    grayPurple: '#e4ddec',
    borderColor: '#dedede'
}

export const globals = {
    fonts: {
        fancy: '\'Shrikhand\', cursive',
        sans: '\'Teko\', sans-serif',
        serif: "'EB Garamond', serif"
    },
    style: {
        layoutScalingValue: .45,
        inputLabelShrinkRatio: .7,
        siteInnerWidth: 1570,
        contentWidth: 1320,
        headerHeight: 100,
        mobileHeaderHeight: 80
    },
    colors: {
        linkColor: colorPalette.red,
        linkHoverColor: colorPalette.purple,
        inputLabelColor: colorPalette.black,
        menuPanelCloseButtonBackgroundColor: colorPalette.purple,
        transitionOverlayBackground: colorPalette.tan,
        buttonHoverColor: colorPalette.grayPurple,
        borderHoverColor: colorPalette.purple,
        borderColor: colorPalette.lightGray,
        errorColor: colorPalette.brightRed
    },
    extensions: [
        '.png',
        '.jpg',
        '.jpeg',
        '.svg',
        '.wav',
        '.mp3'
    ]
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