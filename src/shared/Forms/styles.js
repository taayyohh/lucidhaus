import {
    colorPalette,
    globals
} from '../../config/styles'
import {
    absolute,
    auto,
    black,
    block,
    borderBox,
    center,
    column,
    fixed,
    flex,
    flexStart,
    inherit,
    inlineBlock,
    none,
    pointer,
    relative,
    row,
    spaceBetween,
    sv,
    transparent,
    uppercase,
    white
} from '../../utils/themer'

export const genericFormStyle = {
    display: flex,
    alignItems: flexStart,
    flexDirection: column,
    width: [700, globals.style.layoutScalingValue, '100%'],
    padding: [80, globals.style.layoutScalingValue, 30],
    background: '#fcfcfc',
    border: `1px solid ${colorPalette.gray}`,
    boxShadow: 'inset 0px 0px 4px #d9d9d9',
    position: relative,
    height: auto,
    boxSizing: borderBox,
    margin: '0 auto',
    heading: {
        margin: 0,
        fontFamily: globals.fonts.fancy,
        alignSelf: flexStart,
        size: [38, .7, 38],
        marginBottom: 20
    },
    fieldset: {
        marginBottom: [20, .7, 20],
        background: white
    },
    button: {
        padding: '20px 60px',
        transition: 'background 250ms ease',
        size: [16, .7, 16],
        hover: {
            background: globals.colors.buttonHoverColor
        }
    },
    error: {
        position: fixed,
        background: '#901313',
        padding: `${sv(10)} ${sv(35)}`,
        color: '#fff',
        zIndex: 10,
    }
}
export const defaultFormStyle = {
    padding: 50,
    backgroundColor: '#f7f7f7',
    border: `1px solid ${colorPalette.gray}`,
    boxShadow: 'inset 3px -1px 8px 0px #e0e0e0'
}
export const defaultFieldsetStyle = {
    position: relative,
    width: '100%',
    border: `1px solid ${colorPalette.gray}`,
    borderRadius: '5px',
    boxSizing: borderBox,
    padding: 0,
    margin: 0,
    transition: 'padding-left 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms, ' +
        'border 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms',
    class: {
        name: 'error',
        borderColor: globals.colors.errorColor
    }
}
export const defaultInputStyle = {
    display: inlineBlock,
    position: relative,
    height: [50, .7, 50],
    width: '100%',
    padding: `0 ${sv(25)}`,
    border: none,
    margin: 0,
    font: globals.fonts.sans,
    size: [16, .7, 16],
    lineHeight: [16, .7, 16],
    fontWeight: 300,
    textOverflow: 'ellipsis',
    backgroundColor: transparent,
    color: globals.colors.black,
    boxSizing: borderBox,
    webkitAppearance: none,
    letterSpacing: none,
    zIndex: 1,
    borderRadius: 10,
    mobile: {
        padding: '0 25px'
    },
    placeholder: {
        color: transparent,
        textTransform: none,
    },
    focus: {
        outline: 'none'
    },
    internalAutoFillSelected: {
        backgroundColor: transparent + '!important'
    },
    icon: {
        color: globals.colors.black,
        position: absolute,
        top: 0,
        right: 20,
        height: '100%',
        marginRight: 0,

    },
    fieldOuter: {
        position: relative
    }
}
export const defaultInputLabelStyle = {
    color: globals.colors.inputLabelColor,
    position: absolute,
    top: 0,
    left: 25,
    transform: 'translate(0px, 100%) scale(1)',
    zIndex: 1,
    border: 0,
    weight: 300,
    transition: 'color 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms, ' +
        'transform 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms',
    transformOrigin: 'top left',
    pointerEvents: none,
    size: [16, .7, 16],
    lineHeight: [16, .7, 16]
}
export const defaultFocusedInputLabelStyle = {
    transform: `translate(-6%,-44%) scale(${globals.style.inputLabelShrinkRatio})`,
    color: globals.colors.orange,
}
export const defaultLegendStyle = {
    marginLeft: 17,
    padding: 0,
    height: 0,
    width: 0,
    margin: 0,
    transition: 'width 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms',
}
export const defaultFieldErrorStyle = {
    position: absolute,
    right: [10, globals.style.layoutScalingValue, 10],
    top: [5, globals.style.layoutScalingValue, 5],
    textTransform: uppercase,
    size: [10, .7, 10],
    color: globals.colors.errorColor
}
export const defaultCKEditorStyle = {
    minHeight: 300,
    marginBottom: [50, .7, 50],
    width: '100%',
    child: [
        {
            selector: '.ck.ck-editor',
            font: globals.fonts.serif,
            height: '100%',
            minHeight: inherit,
            child: {
                selector: '.ck-editor__main',
                minHeight: inherit,
                child: {
                    selector: '.ck-editor__editable',
                    minHeight: inherit,
                }
            }
        }
    ]
}
export const defaultFieldHeadingStyle = {
    margin: `0 0 ${sv(5)} 0`
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
    border: `1px solid ${colorPalette.gray}`,
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
        borderTop: `1px solid #dadce0`,
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
        border: `1px solid ${colorPalette.gray}`,
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

export const toggleFieldStyle = {
    display: 'flex',
    alignItems: center,
    width: [100, globals.style.layoutScalingValue, '100%'],
    height: 30,
    borderRadius: 20,
    background: '#d0cece',
    paddingTop: [20, .7, 20],
    paddingBottom: [20, .7, 20],
    paddingLeft: [10, .7, 10],
    paddingRight: [10, .7, 10],
    hover: {
        cursor: pointer
    }
}

export const toggleBallStyle = {
    height: [25, globals.style.layoutScalingValue, 25],
    width: [25, globals.style.layoutScalingValue, 25],
    borderRadius: [20, globals.style.layoutScalingValue, 20],
    background: white
}

export const countryFieldStyle = {
    marginBottom: [20, .7, 20],
    child: [
        {
            selector: '.country-field',
            width: '100%',
            height: [50, .7, 50],
            padding: `0 ${sv(25)}`,
            border: 0
        }
    ]
}

export const regionFieldStyle = {
    marginBottom: [20, .7, 20],
    child: [
        {
            selector: '.region-field',
            width: '100%',
            height: [50, .7, 50],
            padding: `0 ${sv(25)}`,
            border: 0
        }
    ]
}

export const checkoutAddress = {
    child: {
        selector: '> input',
        size: [24, .7, 24],
        width: '100%',
        height: 50,
        border: none,
        padding: '30px 20px',
        boxSizing: borderBox
    }
}