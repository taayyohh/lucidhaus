/**
 *
 *     FORMS & FIELDS
 *
 */
import {absolute, borderBox, flex, inherit, inlineBlock, none, relative, sv, transparent} from '../utils/themer'
import {globals} from '../variables/styles'


export const defaultFormStyle = {
    padding: 50,
    backgroundColor: '#f7f7f7',
    border: '1px solid #000',
    boxShadow: 'inset 3px -1px 8px 0px #e0e0e0'
}

export const defaultFieldsetStyle = {
    position: relative,
    width: '100%',
    border: '1px solid #000',
    borderRadius: '5px',
    boxSizing: borderBox,
    padding: 0,
    margin: 0,
    transition: 'padding-left 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms, ' +
        'border-width 300ms cubic-bezier(0.0, 0, 0.3, 1) 0ms'
}

export const defaultFieldStyle = {
    display: inlineBlock,
    position: relative,
    height: [50, .7, 50],
    width: '100%',
    padding: `0 ${sv(25)}`,
    border: none,
    margin: 0,
    font: globals.fonts.header,
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

export const defaultCKEditorStyle = {
    minHeight: 300,
    child: [
        {
            selector: '.ck.ck-editor',
            font: globals.fonts.type,
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


export const defaultNewFormStyle = {
    heading: {
        font: globals.fonts.script,
        size: [38, .7, 38],
        marginBottom: [20, .7, 20]

    },
    inner: {
        display: flex,
        flexWrap: 'wrap'
        // display: '-ms-grid; display: grid',
        // gridTemplateColumns: '30% 65%',
        // columnGap: '5%'
    },
    innerLeft: {
        width: [400, .7, '100%']
    },
    innerRight: {
        width: [830, .7, '100%']
    },
    topSectionFieldWrapper: {
        flexGrow: 1
    },
    imageSection: {
        display: flex,
        marginBottom: 40,
        width: [300, .7, '100%'],
        child: [
            {
                selector: '> div',
                flexGrow: 1
            }
        ]
    },
    cropImage: {
        width: '100%'
    },
    button: {
        width: '100%'
    }
}



