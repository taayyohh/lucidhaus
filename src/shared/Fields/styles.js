import {
    colorPalette,
    globals
} from 'config/styles'
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
    grid,
    inherit,
    inlineBlock,
    none,
    pointer,
    relative,
    sv,
    transparent,
    uppercase,
    white
} from 'utils/themer'

/** Default **/

export const defaultFormStyle = {
    display: flex,
    alignItems: flexStart,
    flexDirection: column,
    width: auto,
    padding: [50, .7, 50],
    background: colorPalette.hyphaGray,
    border: `1px solid ${colorPalette.gray}`,
    position: relative,
    height: auto,
    boxSizing: borderBox,
    margin: '0 auto',
    inner: {
        width: '100%'
    },
    heading: {
        margin: 0,
        fontFamily: globals.fonts.sans,
        alignSelf: flexStart,
        size: [60, .7, 38],
        weight: 300,
        marginBottom: 20,
        empty: {
            display: none
        }
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

export const defaultFieldsetStyle = {
    position: relative,
    width: '100%',
    border: `1px solid ${colorPalette.gray}`,
    borderRadius: '5px',
    boxSizing: borderBox,
    padding: 0,
    margin: 0,
    marginBottom: [50, .7, 50],
    background: white,
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
    transform: `translate(-6%,-44%) scale(${globals.style.inputLabelShrinkRatio})`
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
    right: 0,
    top: [-30, .7, -30],
    textTransform: uppercase,
    size: [18, .7, 18],
    color: globals.colors.errorColor
}

export const defaultFieldHeadingStyle = {
    size: [30, .7, 30],
    weight: 300,
    margin: `0 0 ${sv(5)} 0`,
    empty: {
        display: none
    }
}


/** Rich Text **/

export const richTextStyle = {
    position: relative,
    minHeight: 300,
    marginBottom: [50, .7, 50],
    width: '100%',
    class: {
        name: 'error',
        child: [
            {
                selector: '.ck.ck-editor .ck-editor__main .ck-editor__editable',
                borderColor: `${colorPalette.brightRed}`
            }
        ]
    },
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

export const richTextErrorMessageStyle = {
    ...defaultFieldErrorStyle,
    top: [15, .7, 15]
}


/** Upload **/

export const uploadErrorMessageStyle = {
    ...defaultFieldErrorStyle,
    top: [-36, .7, -36]
}

export const imageDropZoneWrapperStyle = {
    display: grid,
    gridTemplateColumns: '1fr 1fr',
    gridGap: sv(50, globals.style.layoutScalingValue),
    marginBottom: [50, .7, 50],
    mobile: {
        gridTemplateColumns: '1fr'
    },
    class: {
        name: 'error',
        child: [
            {
                selector: 'div:first-of-type',
                border: `1px solid ${colorPalette.brightRed}`,
                position: relative
            }
        ]
    },
    child: {
        selector: '> div',
        width: '100%',
        child: [
            {
                selector: ':nth-of-type(1)',
                display: flex,
                alignItems: center,
                justifyContent: center,
                child: {
                    selector: '> p',
                    size: [24, .7, 24]
                }
            },
            {
                selector: ':nth-of-type(2)',
                display: flex,
                justifyContent: center,
                alignItems: center
            }
        ]
    }
}

export const imageDropZonePreviewStyle = {
    width: '100%'
}

export const imageDropZonePreviewWrapperStyle = {
    width: '50%',
    border: `1px solid ${colorPalette.gray}`,
    boxSizing: borderBox,
    padding: [20, globals.style.layoutScalingValue, 20],
    mobile: {
        height: 300
    }
}

export const audioUploadPreviewWrapperStyle = {
    display: flex,
    flexDirection: column
}

export const imageDropZoneStyle = {
    position: relative,
    display: block,
    minHeight: [500, globals.style.layoutScalingValue, 100],
    // width: [500, globals.style.layoutScalingValue, '100%'],
    width: '50%',
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


/** Toggle **/

export const toggleFieldStyle = {
    display: 'flex',
    alignItems: center,
    width: [100, globals.style.layoutScalingValue, 100],
    height: [30, .7, 30],
    borderRadius: [20, .7, 20],
    background: globals.colors.borderColor,
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


/** Country **/

export const countryFieldStyle = {
    height: [52, .7, 52],
    marginBottom: [50, .7, 50],
    child: [
        {
            selector: '.country-field',
            width: '100%',
            height: [50, .7, 50],
            borderRadius: [5, .7, 5],
            padding: `0 ${sv(25)}`,
            border: 0
        }
    ]
}


/** Region **/

export const regionFieldStyle = {
    height: [52, .7, 52],
    marginBottom: [50, .7, 50],
    child: [
        {
            selector: '.region-field',
            width: '100%',
            height: [50, .7, 50],
            borderRadius: [5, .7, 5],
            padding: `0 ${sv(25)}`,
            border: 0
        }
    ]
}


/** AutoComplete **/

export const AutoCompleteInputStyle = {
    ...defaultInputStyle,
    backgroundColor: white,
    marginBottom: [20, .7, 20],
    width: '100%',
    borderRadius: [5, .7, 5],
    placeholder: {
        color: black
    }
}

export const AutoCompleteFieldSetStyle = {
    height: [52, .7, 52]
}

export const AutoCompleteSuggestionStyle = active => {
    const baseStyle = {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: white,
        cursor: 'pointer',
        size: [18, .7, 18],
        letterSpacing: [0.2, .7, 0.2],
        textTransform: none,
        hover: {
            backgroundColor: globals.colors.borderColor
        }
    }


    return {
        ...baseStyle
    }

}

export const AutoCompleteSuggestionWrapperStyle = {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    top: [52, .7, 52],
    border: `1px solid ${globals.colors.borderColor}`,
    borderRadius: [5, .7, 5],
    empty: {
        display: none
    }
}


/** Count **/

export const countFieldStyle = {
    display: flex,
    alignItems: center
}

export const countControlStyle = {
    size: [18, .7, 18],
    marginLeft: [10, .7, 10],
    hover: {
        cursor: pointer,
        color: colorPalette.purple
    }
}

export const countControlNumberStyle = {
    size: [40, .7, 30],
    marginLeft: 30
}

export const selectFieldStyle = {
    position: relative,
    width: '100%',
    marginBottom: [20, .7, 20],
    class: {
        name: 'error',
        child: {
            selector: 'select',
            borderColor: colorPalette.brightRed
        }
    },
    child: [
        {
            selector: 'select',
            width: '100%',
            height: [50, .7, 50],
            borderRadius: [5, .7, 5]
        },
        {
            selector: 'option',
            height: [50, .7, 50],
            paddingLeft: [25, .7, 25],
            size: [20, .7, 20]
        }
    ]
}

export const selectFieldErrorMessageStyle = {
    ...defaultFieldErrorStyle,
    top: [15, .7, 15]
}

export const songsFormStyle = {

    border: 0,
    marginTop: [80, .7, 50],
    boxSizing: borderBox,
    paddingLeft: [160, .7, 160],
    paddingRight: [160, .7, 160],
    marginBottom: [50, .7, 50],

    heading: {},
    inner: {},
    button: {},
    child: [
        {
            selector: '> div > div > div',
            minHeight: [200, .7, 200]
        }
    ]

}

export const rsvpsFormStyle = {
    border: 0,
    boxSizing: borderBox,
    padding: '0 !important',
    marginBottom: [50, .7, 50],
    minWidth: [300, globals.style.layoutScalingValue, '100%'],

    heading: {
        marginLeft: auto
    },
    inner: {},
    button: {},
    child: [
        {
            selector: '> div > div > div',
            minHeight: [200, .7, 200]
        }
    ]

}
