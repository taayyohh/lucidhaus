import {isMarketplace} from '../utils/flags'
import {
    black,
    center,
    column,
    fixed,
    flex,
    none,
    pointer,
    relative,
    sv,
    white,
    wrap
}                      from '../utils/themer'
import {
    genericMobileContainerStyles,
    globals
}                      from '../variables/styles'

const contentRow = 2


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
    adminMenu: {
        gridColumn: '2 / 6',
        gridColumnSpan: 4,
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
        backgroundColor: white,
    },
    rm: {
        position: relative,
        msGridRow: contentRow,
        gridRow: contentRow,
        msGridColumn: 6,
        gridColumn: 6,
        backgroundColor: white

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
    main: {
        position: relative,
        msGridRow: contentRow,
        gridRow: contentRow,
        msGridColumn: 2,
        gridColumn: '2 / 6',
        gridColumnSpan: 4,
        backgroundColor: white,
        zIndex: 3,
        minHeight: '80vh',
        print: {
            paddingTop: 0
        },
        ...genericMobileContainerStyles
    },
    content: {
        gridColumn: '2 / 6',
        gridColumnSpan: 4,
        msGridRow: 3,
        gridRow: 3,
        marginTop: 50
    },
    footer: {
        gridColumn: '1 / 7',
        gridColumnSpan: 6,
        msGridRow: 4,
        gridRow: 4,
    },
    modal: {
        position: fixed,
        height: '100vh',
        width: '100vw',
        zIndex: 3,
        empty: {
            zIndex: -1
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
    backgroundColor: black,
    zIndex: -1,
    hover: {
        cursor: pointer
    }
}

export const microCardStyle = {
    marginBottom: 20,
    inner: {
        display: flex,
        flexWrap: wrap,
        background: '#f3f3f3',
        padding: `${sv(30)} ${sv(30)}`
    },
    title: {
        width: '100%',
        order: -1,
        margin: 0
    },
    description: {},
    category: {
        display: none
    },
    price: {},
    controls: {
        display: flex,
        width: '100%'

    },
    image: {
        width: 80,
        maxWidth: 80,
        minWidth: 80,
        wrapper: {

            marginRight: 15
        }
    }
}

export const postContentStyle = slug => {
    const baseStyle = {
        margin: '0 auto',
        width: [globals.style.siteInnerWidth, globals.style.layoutScalingValue, '100%'],
        transition: 'width 500ms ease'
    }

    if (isMarketplace(slug))
        return {
            ...baseStyle,
            width: [globals.style.siteInnerWidth, globals.style.layoutScalingValue, '100%']
        }

    return {
        ...baseStyle
    }
}

export const notFoundStyle = {
    textAlign: center,
    size: 90,
    font: globals.fonts.script,
    maxWidth: [800, globals.style.layoutScalingValue, 'none'],
    margin: '0 auto'

}

export const defaultModalStyle = {
    position: fixed,
    top: '50%',
    left: '50%',
    height: '20vw',
    width: '20vw',
    marginLeft: '-10vw',
    marginTop: '-10vw',
    padding: sv(50),
    backgroundColor: '#cdcdcd',
    borderColor: `1px solid ${globals.colors.borderColor}`
}


