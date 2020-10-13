import {
    absolute,
    black,
    block,
    borderBox,
    center,
    fixed,
    flex,
    flexEnd,
    flexStart,
    none,
    pointer,
    relative,
    row,
    spaceBetween,
    transparent,
    white
}                from '../utils/themer'
import {globals} from '../variables/styles'

export const defaultLinkStyle = {
    color: globals.colors.linkColor
}

export const richTextDefaultStyle = {
    font: globals.fonts.type,
    size: [18, .7, 18]
}

export const defaultH2Style = {
    margin: 0
}

export const addArtistFormStyle = {}


export const videoOverlayStyles = {}

export const transitionOverlayStyle = {
    backgroundColor: globals.colors.transitionOverlayBackground,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    height: 0,
    zIndex: 12,
    display: 'static'
}

export const genericButtonStyle = {
    border: `1px solid #000`,
    font: globals.fonts.header,
    borderRadius: [10, .7, 10],
    background: transparent,
    color: black,
    alignSelf: flexEnd,
    paddingTop: [20, .7, 20],
    paddingBottom: [20, .7, 20],
    paddingLeft: [30, .7, 30],
    paddingRight: [30, .7, 30],
    cursor: pointer,
    fontFamily: globals.fonts.script,
    marginTop: 20,
    focus: {
        outline: none,
    },
    hover: {
        cursor: 'pointer',
        backgroundColor: globals.colors.buttonHoverColor,
        borderColor: globals.colors.borderHoverColor,
        color: globals.colors.borderHoverColor
    }
}

export const imageDropZoneWrapperStyle = {
    display: flex,
    flexWrap: 'nowrap',
    flexDirection: row,
    justifyContent: spaceBetween,
    marginBottom: [50, .7, 50],
}


export const imageDropZonePreviewStyle = {
    width: '100%'
}

export const imageDropZonePreviewWrapperStyle = {
    width: [500, globals.style.layoutScalingValue, '100%'],
    border: '1px solid #000',
    boxSizing: borderBox,
    padding: [20, globals.style.layoutScalingValue, 20]
}

export const imageDropZoneStyle = {
    position: relative,
    display: block,
    minHeight: [500, globals.style.layoutScalingValue, '100%'],
    width: [500, globals.style.layoutScalingValue, '100%'],
    background: '#fff',
    border: `1px solid ${globals.colors.borderColor}`,
    borderRadius: 10,
    portal: {
        position: fixed,
        top: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 12,
        child: [
            {
                selector: '.ReactCrop',
                display: flex,
                alignSelf: flexStart,
                width: 500
            }
        ]
    },
    portalInner: {
        display: flex,
        justifyContent: 'space-between',
        borderTop: `1px solid #000`,
        flexWrap: 'wrap',
        position: absolute,
        // maxWidth: 750,
        width: '100vw',
        height: '100vh',
        boxSizing: borderBox,
        left: 0,
        top: 0,
        padding: 50,
        backgroundColor: white,
        child: {
            selector: '> div',
            // firstChild: {
            //     width: 500
            // },
            lastChild: {
                width: '20%'
            }
        }
    },
    cropPreview: {
        child: {
            selector: '> img',
            width: '100%'
        }
    },
    removeButton: {
        backgroundColor: white,
        border: '1px solid #000',
        marginTop: 10,
        display: flex,
        alignItems: center,
        justifyContent: center,
        padding: 5,
        borderRadius: 5,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        hover: {
            color: white,
            backgroundColor: black,
            cursor: pointer
        }
    },
    child: [
        {
            selector: 'input',
            height: '100%',
        },
        {
            selector: '.dzu-inputLabel',
            display: flex,
            alignItems: center,
            justifyContent: center,
            width: '100%',
            height: '100%'
        },
        {
            selector: '.dzu-previewButton',
            cursor: pointer,
            display: block,
            height: 50,
            width: 50,

        },
        {
            selector: '.dzu-input',
            display: none
        },
        {
            selector: '.dzu-previewImage',
            width: '100%',
        }
    ]
}