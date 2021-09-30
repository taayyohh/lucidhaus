import {
    colorPalette,
    genericMobileContainerStyles,
    globals
} from 'config/styles'
import {
    center,
    column,
    fixed,
    flex,
    pointer,
    relative,
    sv,
    transparent,
    white
} from 'utils/themer'

const contentRow = 3


export const pageFrameStyle = {
    display: '-ms-grid; display: grid',
    gridTemplateColumns: `
            [begin] minmax(3vw, 1fr)
            ${sv(920, .45)}
            ${sv(230, .45)}
            ${sv(230, .45)}
            ${sv(190, .45)}
            minmax(3vw, 1fr) [end]`,
    maxWidth: '1920px',
    margin: '0 auto',
    width: 'auto',
    background: '#fafafa',
    mobile: {
        display: flex,
        flexDirection: column,
        width: '100%'
    },
    header: {
        gridColumn: '1 / 7',
        gridColumnSpan: 6,
        msGridRow: 1,
        gridRow: 1,
    },
    search: {
        gridColumn: '1 / 7',
        gridColumnSpan: 6,
        msGridRow: 2,
        gridRow: 2,
    },
    hlm: {
        msGridRow: 1,
        gridRow: 1,
        msGridColumn: 1,
        gridColumn: 1,
    },
    hrm: {
        msGridRow: 1,
        gridRow: 1,
        msGridColumn: 6,
        gridColumn: 6,
    },
    lm: {
        position: relative,
        msGridRow: contentRow,
        gridRow: contentRow,
        msGridColumn: 1,
        gridColumn: 1,
        zIndex: 1,
    },
    rm: {
        position: relative,
        msGridRow: contentRow,
        gridRow: contentRow,
        msGridColumn: 6,
        gridColumn: 6,
    },
    flm: {
        position: relative,
        msGridRow: '3',
        msGridRowSpan: '2',
        gridRow: '3 / 5',
        msGridColumn: 1,
        gridColumn: 1,
        zIndex: 1,
        print: {
            gridRow: '3 / 4',
            msGridRowSpan: '1',
            maxHeight: 200
        }
    },
    frm: {
        position: relative,
        msGridRow: '3',
        msGridRowSpan: '2',
        gridRow: '3 / 5',
        msGridColumn: 6,
        gridColumn: 6,
        zIndex: 1,
        print: {
            gridRow: '3 / 4',
            msGridRowSpan: '1',
            maxHeight: 200
        }
    },
    main: slug => {
        const base = {
            position: relative,
            msGridRow: contentRow,
            gridRow: contentRow,
            msGridColumn: 2,
            gridColumn: '2 / 6',
            gridColumnSpan: 4,
            zIndex: 3,
            minHeight: '80vh',
            print: {
                paddingTop: 0
            },
            ...genericMobileContainerStyles
        }

        if (slug.length === 0)
            return {
                ...base,
                gridColumn: '1 / 7',
                marginTop: 0,
               // marginTop: [-50, .7, 50],
                mobile: {
                    padding: 0,
                    marginTop: 0
                }
            }

        if(slug === 'places')
            return {
                ...base,
                mobile: {
                    padding: 0
                }
            }

        return {
            ...base
        }

    },
    content: {
        gridColumn: '2 / 6',
        gridColumnSpan: 4,
        msGridRow: 3,
        gridRow: 3,
        marginTop: 50
    },
    footer: slug => {
        const base = {
            gridColumn: '1 / 7',
            gridColumnSpan: 6,
            msGridRow: 4,
            gridRow: 4,
            background: white
        }

        if (slug.length === 0)
            return {
                ...base,
                marginTop: 0
            }

        return {
            ...base
        }

    },
    modal: {
        position: fixed,
        height: '100vh',
        width: '100vw',
        zIndex: 11,
        backgroundColor: 'rgb(75 81 80 / 40%)',
        empty: {
            zIndex: -1,
            background: transparent
        }
    }
}

export const overlayStyle = {
    position: fixed,
    height: '100vh',
    width: '100vw',
    maxWidth: '100%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colorPalette.grayPurple,
    zIndex: -1,
    hover: {
        cursor: pointer
    }
}

export const contentWrapperStyle = {
    margin: '0 auto',
    width: [globals.style.siteInnerWidth, globals.style.layoutScalingValue, '100%'],
    transition: 'width 500ms ease'
}

export const fullContentWrapperStyle = {
    margin: '0 auto',
    width: '100vw',
    transition: 'width 500ms ease'
}


export const notFoundStyle = {
    textAlign: center,
    size: 90,
    font: globals.fonts.fancy,
    maxWidth: [800, globals.style.layoutScalingValue, 'none'],
    margin: '0 auto'

}

export const defaultModalStyle = {
    position: fixed,
    top: '50%',
    left: '50%',
    height: '30vw',
    width: '30vw',
    marginLeft: '-15vw',
    marginTop: '-15vw',
    padding: sv(50),
    backgroundColor: white,
    border: `1px solid #000`,
    mobile: {
        paddingTop: 100,
        marginLeft: 0,
        marginTop: 0,
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw'
    }
}

export const notificationWrapperStyle = theme => {
    const baseStyle = {
        position: 'fixed',
        display: flex,
        alignItems: center,
        justifyContent: center,
        textTransform: 'lowercase',
        fontStyle: 'italic',
        weight: 500,
        background: '#cc0000',
        paddingTop: [7, globals.style.layoutScalingValue, 7],
        paddingBottom: [5, globals.style.layoutScalingValue, 5],
        paddingLeft: [5, globals.style.layoutScalingValue, 5],
        paddingRight: [5, globals.style.layoutScalingValue, 5],
        top: [0, .7, globals.style.mobileHeaderHeight],
        left: 0,
        width: '100vw',
        textAlign: center,
        color: white,
        size: [18, .7, 18],
        height: 0,
        opacity: 0,
        zIndex: 11,
        mobile: {
            top: 0,
            left: 0,
            marginLeft: 0
        }
    }

    if (theme === 'green')
        return {
            ...baseStyle,
            background: '#428d67'
        }


    return {
        ...baseStyle
    }

}
export const transitionOverlayStyle = {
    backgroundColor: globals.colors.transitionOverlayBackground,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    height: 0,
    zIndex: 12,
    display: 'static'
}

