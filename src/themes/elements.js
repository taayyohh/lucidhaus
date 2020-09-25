import {
    absolute,
    black,
    block,
    borderBox,
    center,
    fixed,
    flex,
    flexStart,
    hidden,
    none,
    pointer,
    relative,
    white
}                from '../utils/themer'
import {globals} from '../variables/styles'

export const defaultLinkStyle = {
    color: globals.colors.black
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

export const genericButtonStyle = {
    border: none,
    background: '#000',
    color: '#fff',
    padding: '10px 20px',
    cursor: pointer,
    fontFamily: globals.fonts.script,
    marginTop: 20,
    focus: {
        outline: none,
    },
    hover: {
        cursor: 'pointer',
        backgroundColor: globals.colors.orange
    }
}

export const dropZoneStyle = {
    position: relative,
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
            selector: '.dzu-dropzone',
            display: block,
            height: [300, .7, "100%"],
            width: [300, .7, "100%"],
            background: '#fff',
            border: `1px solid ${globals.colors.borderColor}`,
            borderRadius: 10,
            overflow: hidden
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