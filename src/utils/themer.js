import {css}                  from 'styled-components/macro'
import {breakpointUpperLimit} from '../variables/styles'

const defaultScalingValue = .7
const defaultMaxScreen = 1680
const defaultMobileMax = 768

/**
 * Takes a theme object and converts it to CSS that is then applied to styled-components
 * Certain properties will convert numerical values into pixel values (see: pixelProperties below)
 *
 * @param {object} theme
 * @param {boolean} isNested
 * @returns {string}
 */
export const themer = (theme, isNested = false) => {
    let style = '',
        normalProperties = {},
        scaledProperties = {},
        subProperties = {},
        mediaQueryProperties = {}

    // Organize theme properties into containers that are each handled differently.
    for (let prop in theme) {
        if (theme.hasOwnProperty(prop)) {
            if (isCssProperty(prop)) {
                if (isScalable(theme[prop], prop) && !isNested) {
                    scaledProperties = {...scaledProperties, [prop]: theme[prop]}
                } else
                    normalProperties = {...normalProperties, [prop]: theme[prop]}
            } else if (isMediaQuery(prop)) {
                mediaQueryProperties = {...mediaQueryProperties, [prop]: theme[prop]}
                mediaQueryProperties = {...mediaQueryProperties, [prop]: theme[prop]}
            } else
                subProperties = {...subProperties, [prop]: theme[prop]}
        }
    }

    // Compile styles
    if (!isEmpty(normalProperties))
        style += handleCssProperties(normalProperties)

    if (!isEmpty(scaledProperties))
        style += handleScalableProperties(scaledProperties)

    if (!isEmpty(subProperties))
        style += handleSubProperties(subProperties)

    if (!isEmpty(mediaQueryProperties))
        style += handleMediaQueries(mediaQueryProperties)

    return style
}

const isCssProperty = prop => cssProperties[prop]

const isCssPseudoClass = prop => cssPseudoClasses[prop]

const isPlaceholder = prop => prop.toLowerCase() === 'placeholder'

const isMediaQuery = prop => mediaQueries.hasOwnProperty(prop)

const isModifierClass = prop => prop.toLowerCase() === 'class'

const isChildSelector = prop => prop.toLowerCase() === 'child'

const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n)

const isPixelProp = prop => pixelProperties.includes(cssProperties[prop])

const isScalable = (style, prop) =>
    isPixelProp(prop) && (isNumeric(style) || (Array.isArray(style) && isNumeric(style[0]))) && style !== 0

const handleCssProperties = theme => {
    let style = ''

    for (let prop in theme) {
        if (theme.hasOwnProperty(prop)) {
            style += handleCssProperty(theme[prop], prop)
        }
    }

    return style
}

const cssProperty = (style, prop) => `${cssProperties[prop]}: ${handleStyle(style, prop)};`

const handleCssProperty = (style, prop) => {
    if (msPrefixProperties.hasOwnProperty(cssProperties[prop]))
        return cssProperty(style, prop) + `${msPrefixProperties[cssProperties[prop]]}: ${style};`

    return cssProperty(style, prop)
}

const handleScalableProperties = theme => {
    let style = '',
        mainStyles = '',
        maxStyles = ''

    for (let prop in theme) {
        if (theme.hasOwnProperty(prop)) {
            let maxValue = theme[prop],
                scalingValue = defaultScalingValue,
                mobileOverride = false

            if (Array.isArray(theme[prop]))
                [maxValue, scalingValue, mobileOverride] = theme[prop]

            const min = Math.round(maxValue * scalingValue)

            style += handleCssProperty(mobileOverride || min, prop)
            mainStyles += handleCssProperty(sv(maxValue, scalingValue), prop)
            maxStyles += handleCssProperty(maxValue, prop)
        }
    }

    style += `@media print, screen and (min-width: ${defaultMobileMax}px) {${mainStyles}}`
    style += `@media screen and (min-width: ${defaultMaxScreen}px) {${maxStyles}}`

    return style
}

const handleSubProperties = theme => {
    let style = ''

    for (let prop in theme) {
        if (theme.hasOwnProperty(prop)) {
            if (isCssPseudoClass(prop)) style += handleCssPseudoClass(theme[prop], prop)
            else if (isPlaceholder(prop)) style += handlePlaceholder(theme[prop])
            else if (isModifierClass(prop)) style += handleModifierClass(theme[prop])
            else if (isChildSelector(prop)) style += handleChildSelector(theme[prop])
        }
    }

    return style
}

const handleMediaQueries = theme => {
    let mediaQueryCollection = []

    for (let prop in theme) {
        if (theme.hasOwnProperty(prop)) {
            mediaQueryCollection[Object.keys(mediaQueries).indexOf(prop)] = handleMediaQuery(theme[prop], prop)
        }
    }

    return mediaQueryCollection.join('')
}

const handleMediaQuery = (style, prop) => mediaQueries[prop]`${themer(style, true)}`.join('')

const handleCssPseudoClass = (style, prop) =>
    `&:${cssPseudoClasses[prop]}${style.param !== undefined ? `(${style.param})` : ''} {${themer(style)}}`

const handlePlaceholder = style => {
    let output = ''
    for (let i in placeholderSelectors) {
        output += `${placeholderSelectors[i]} {${themer(style)}}`
    }

    return output
}

export const sv = (styleValue, scalingValue = defaultScalingValue) => {
    const min = Math.round(styleValue * scalingValue)

    return `calc(${min / 10}rem + ${(styleValue - min) / 10} * ((100vw - ${defaultMobileMax / 10}rem) / ${(defaultMaxScreen - defaultMobileMax) / 10}))`
}

const getSelector = (entry, prefix = '') => {
    let selectors = []
    if (Array.isArray(entry)) {
        for (let i in entry) {
            selectors.push(`${prefix}${entry[i]}`)
        }

        return selectors.join(', ')
    }

    return `${prefix}${entry}`
}

const handleModifierClass = style => {
    if (Array.isArray(style)) {
        let output = ''
        for (let i in style) {
            if (style.hasOwnProperty(i))
                output += `${getSelector(style[i].name, '&.')} {${themer(style[i])}}`
        }

        return output
    }

    return `${getSelector(style.name, '&.')} {${themer(style)}}`
}

const handleChildSelector = style => {
    if (Array.isArray(style)) {
        let output = ''
        for (let i in style) {
            if (style.hasOwnProperty(i))
                output += `${getSelector(style[i].selector)} {${themer(style[i])}}`
        }

        return output
    }

    return `${getSelector(style.selector)} {${themer(style)}}`
}

const handleStyle = (style, prop) => {
    if (isPixelProp(prop) && isNumeric(style) && style !== 0)
        return `${style}px`
    return style
}

const cssProperties = {
    alignContent: 'align-content',
    alignItems: 'align-items',
    alignSelf: 'align-self',
    all: 'all',
    animation: 'animation',
    backfaceVisibility: 'backface-visibility',
    background: 'background',
    backgroundAttachment: 'background-attachment',
    backgroundBlendMode: 'background-blend-mode',
    backgroundClip: 'background-clip',
    backgroundColor: 'background-color',
    backgroundImage: 'background-image',
    backgroundOrigin: 'background-origin',
    backgroundPosition: 'background-position',
    backgroundPositionX: 'background-position-x',
    backgroundPositionY: 'background-position-y',
    backgroundRepeat: 'background-repeat',
    backgroundSize: 'background-size',
    border: 'border',
    borderBottom: 'border-bottom',
    borderBottomColor: 'border-bottom-color',
    borderBottomLeftRadius: 'border-bottom-left-radius',
    borderBottomRightRadius: 'border-bottom-right-radius',
    borderBottomStyle: 'border-bottom-style',
    borderBottomWidth: 'border-bottom-width',
    borderCollapse: 'border-collapse',
    borderColor: 'border-color',
    borderImage: 'border-image',
    borderImageOutset: 'border-image-outset',
    borderImageRepeat: 'border-image-repeat',
    borderImageSlice: 'border-image-slice',
    borderImageSource: 'border-image-source',
    borderImageWidth: 'border-image-width',
    borderLeft: 'border-left',
    borderLeftColor: 'border-left-color',
    borderLeftStyle: 'border-left-style',
    borderLeftWidth: 'border-left-width',
    borderRadius: 'border-radius',
    borderRight: 'border-right',
    borderRightColor: 'border-right-color',
    borderRightStyle: 'border-right-style',
    borderRightWidth: 'border-right-width',
    borderSpacing: 'border-spacing',
    borderStyle: 'border-style',
    borderTop: 'border-top',
    borderTopColor: 'border-top-color',
    borderTopLeftRadius: 'border-top-left-radius',
    borderTopRightRadius: 'border-top-right-radius',
    borderTopStyle: 'border-top-style',
    borderTopWidth: 'border-top-width',
    borderWidth: 'border-width',
    bottom: 'bottom',
    boxDecorationBreak: 'box-decoration-break',
    boxShadow: 'box-shadow',
    boxSizing: 'box-sizing',
    breakAfter: 'break-after',
    breakBefore: 'break-before',
    breakInside: 'break-inside',
    captionSide: 'caption-side',
    caretColor: 'caret-color',
    clear: 'clear',
    clip: 'clip',
    clipPath: 'clip-path',
    color: 'color',
    columnCount: 'column-count',
    columnFill: 'column-fill',
    columnGap: 'column-gap',
    columnRule: 'column-rule',
    columnRuleColor: 'column-rule-color',
    columnRuleStyle: 'column-rule-style',
    columnRuleWidth: 'column-rule-width',
    columnSpan: 'column-span',
    columnWidth: 'column-width',
    columns: 'columns',
    content: 'content',
    counterIncrement: 'counter-increment',
    counterReset: 'counter-reset',
    cursor: 'cursor',
    direction: 'direction',
    display: 'display',
    emptyCells: 'empty-cells',
    filter: 'filter',
    flex: 'flex',
    flexBasis: 'flex-basis',
    flexDirection: 'flex-direction',
    flexGrow: 'flex-grow',
    flexShrink: 'flex-shrink',
    flexWrap: 'flex-wrap',
    float: 'float',
    font: 'font-family',
    fontFamily: 'font-family',
    fontFeatureSettings: 'font-feature-settings',
    fontKerning: 'font-kerning',
    fontLanguageOverride: 'font-language-override',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontSynthesis: 'font-synthesis',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    grid: 'grid',
    gridArea: 'grid-area',
    gridAutoColumns: 'grid-auto-columns',
    gridAutoFlow: 'grid-auto-flow',
    gridAutoRows: 'grid-auto-rows',
    gridColumn: 'grid-column',
    gridColumnEnd: 'grid-column-end',
    gridColumnGap: 'grid-column-gap',
    gridColumnSpan: '-ms-grid-column-span',
    gridColumnStart: 'grid-column-start',
    gridGap: 'grid-gap',
    gridRow: 'grid-row',
    gridRowEnd: 'grid-row-end',
    gridRowGap: 'grid-row-gap',
    gridRowStart: 'grid-row-start',
    gridGrowSpan: '-ms-grid-row-span',
    gridTemplate: 'grid-template',
    gridTemplateAreas: 'grid-template-areas',
    gridTemplateColumns: 'grid-template-columns',
    gridTemplateRows: 'grid-template-rows',
    hangingPunctuation: 'hanging-punctuation',
    height: 'height',
    hyphens: 'hyphens',
    imageRendering: 'image-rendering',
    justifyContent: 'justify-content',
    left: 'left',
    letterSpacing: 'letter-spacing',
    lineBreak: 'line-break',
    lineHeight: 'line-height',
    listStyle: 'list-style',
    listStyleImage: 'list-style-image',
    listStylePosition: 'list-style-position',
    listStyleType: 'list-style-type',
    margin: 'margin',
    marginBottom: 'margin-bottom',
    marginLeft: 'margin-left',
    marginRight: 'margin-right',
    marginTop: 'margin-top',
    markerOffset: 'marker-offset',
    maxHeight: 'max-height',
    maxWidth: 'max-width',
    minHeight: 'min-height',
    minWidth: 'min-width',
    mixBlendMode: 'mix-blend-mode',
    msGridColumn: '-ms-grid-column',
    msGridColumns: '-ms-grid-columns',
    msGridColumnSpan: '-ms-grid-column-span',
    msGridRow: '-ms-grid-row',
    msGridRowSpan: '-ms-grid-row-span',
    objectFit: 'object-fit',
    objectPosition: 'object-position',
    opacity: 'opacity',
    order: 'order',
    orphans: 'orphans',
    outline: 'outline',
    outlineColor: 'outline-color',
    outlineOffset: 'outline-offset',
    outlineStyle: 'outline-style',
    outlineWidth: 'outline-width',
    overflow: 'overflow',
    overflowWrap: 'overflow-wrap',
    overflowX: 'overflow-x',
    overflowY: 'overflow-y',
    padding: 'padding',
    paddingBottom: 'padding-bottom',
    paddingLeft: 'padding-left',
    paddingRight: 'padding-right',
    paddingTop: 'padding-top',
    pageBreakAfter: 'page-break-after',
    pageBreakBefore: 'page-break-before',
    pageBreakInside: 'page-break-inside',
    perspective: 'perspective',
    perspectiveOrigin: 'perspective-origin',
    pointerEvents: 'pointer-events',
    position: 'position',
    quotes: 'quotes',
    resize: 'resize',
    right: 'right',
    size: 'font-size',
    tabSize: 'tab-size',
    tableLayout: 'table-layout',
    textAlign: 'text-align',
    textAlignLast: 'text-align-last',
    textCombineUpright: 'text-combine-upright',
    textDecoration: 'text-decoration',
    textDecorationColor: 'text-decoration-color',
    textDecorationLine: 'text-decoration-line',
    textDecorationStyle: 'text-decoration-style',
    textIndent: 'text-indent',
    textJustify: 'text-justify',
    textOrientation: 'text-orientation',
    textOverflow: 'text-overflow',
    textShadow: 'text-shadow',
    textTransform: 'text-transform',
    textUnderlinePosition: 'text-underline-position',
    top: 'top',
    transform: 'transform',
    transformOrigin: 'transform-origin',
    transformStyle: 'transform-style',
    transition: 'transition',
    transitionDelay: 'transition-delay',
    transitionDuration: 'transition-duration',
    transitionProperty: 'transition-property',
    transitionTimingFunction: 'transition-timing-function',
    unicodeBidi: 'unicode-bidi',
    userSelect: 'user-select',
    verticalAlign: 'vertical-align',
    visibility: 'visibility',
    webkitAppearance: '-webkit-appearance',
    weight: 'font-weight',
    whiteSpace: 'white-space',
    width: 'width',
    windows: 'windows',
    wordBreak: 'word-break',
    wordSpacing: 'word-spacing',
    wordWrap: 'word-wrap',
    writingMode: 'writing-mode',
    zIndex: 'z-index'
}

const pixelProperties = [
    cssProperties.borderRadius,
    cssProperties.bottom,
    cssProperties.columnWidth,
    cssProperties.fontSize,
    cssProperties.gridColumnGap,
    cssProperties.gridRowGap,
    cssProperties.height,
    cssProperties.left,
    cssProperties.letterSpacing,
    cssProperties.lineHeight,
    cssProperties.margin,
    cssProperties.marginBottom,
    cssProperties.marginLeft,
    cssProperties.marginRight,
    cssProperties.marginTop,
    cssProperties.maxHeight,
    cssProperties.maxWidth,
    cssProperties.minHeight,
    cssProperties.minWidth,
    cssProperties.padding,
    cssProperties.paddingBottom,
    cssProperties.paddingLeft,
    cssProperties.paddingRight,
    cssProperties.paddingTop,
    cssProperties.right,
    cssProperties.size,
    cssProperties.textIndent,
    cssProperties.top,
    cssProperties.width,
]

const msPrefixProperties = {
    [cssProperties.grid]: '-ms-grid',
    [cssProperties.gridTemplateColumns]: '-ms-grid-columns',
    [cssProperties.gridTemplateRows]: '-ms-grid-rows'
}

const cssPseudoClasses = {
    active: 'active',
    after: 'after',
    before: 'before',
    checked: 'checked',
    disabled: 'disabled',
    empty: 'empty',
    enabled: 'enabled',
    firstChild: 'first-child',
    firstOfType: 'first-of-type',
    focus: 'focus',
    hover: 'hover',
    inRange: 'in-range',
    internalAutoFillSelected: '-internal-autofill-selected',
    invalid: 'invalid',
    lang: 'lang',
    lastChild: 'last-child',
    lastOfType: 'last-of-type',
    link: 'link',
    not: 'not',
    nthChild: 'nth-child',
    nthLastChild: 'nth-last-child',
    nthLastOfType: 'nth-last-of-type',
    nthOfType: 'nth-of-type',
    onlyOfType: 'only-of-type',
    onlyChild: 'only-child',
    optional: 'optional',
    outOfRange: 'out-of-range',
    readOnly: 'read-only',
    readWrite: 'read-write',
    required: 'required',
    root: 'root',
    target: 'target',
    valid: 'valid',
    visited: 'visited',
    firstLetter: 'first-letter',
    firstLine: 'first-line',
    selection: 'selection',
}

const placeholderSelectors = [
    ':-moz-placeholder',
    ':-ms-input-placeholder',
    '::-moz-placeholder',
    '::-webkit-input-placeholder'
]

const mediaQuery = (...query) => (...rules) => css`${!query[0][0].startsWith('@') ? '@media ' : ''}${css(...query)} { ${css(...rules)} }`

const mediaQueries = {
    mobile: mediaQuery`screen and (max-width: ${breakpointUpperLimit.mobile - 1}px)`,
    desktop: mediaQuery`print, screen and (min-width: ${breakpointUpperLimit.mobile}px)`,
    print: mediaQuery`print`,
    small: mediaQuery`screen and (min-width: ${breakpointUpperLimit.desktop}px)`,
    large: mediaQuery`screen and (min-width: ${breakpointUpperLimit.small}px)`,
    xLarge: mediaQuery`screen and (min-width: ${breakpointUpperLimit.large}px)`,
    ie: mediaQuery`all and (-ms-high-contrast: none), (-ms-high-contrast: active)`,
    ff: mediaQuery`@-moz-document url-prefix()`,
    edge: mediaQuery`@supports (-ms-ime-align:auto)`,
    ios: mediaQuery`@supports (-webkit-overflow-scrolling: touch)`,
    safari: mediaQuery`@supports (-webkit-marquee-repetition:infinite and (object-fit:fill)`
}

/**
 *  These variable declarations are intended to make styling easier by
 *  eliminating the need to use quotes when writing styles with text values.
 *
 *  These are only useful if your IDE has some sort of auto-import of references.
 */
export const
    absolute = 'absolute',
    auto = 'auto',
    black = 'black',
    block = 'block',
    borderBox = 'border-box',
    bottom = 'bottom',
    center = 'center',
    column = 'column',
    fixed = 'fixed',
    grid = 'grid',
    flex = 'flex',
    flexEnd = 'flex-end',
    flexStart = 'flex-start',
    hidden = 'hidden',
    inherit = 'inherit',
    inlineBlock = 'inline-block',
    inlineFlex = 'inline-flex',
    none = 'none',
    normal = 'normal',
    pointer = 'pointer',
    relative = 'relative',
    row = 'row',
    spaceBetween = 'space-between',
    transparent = 'transparent',
    uppercase = 'uppercase',
    white = 'white',
    wrap = 'wrap'

/**
 * Determines whether an object is empty or not.
 *
 * @param object
 * @returns {boolean}
 */
export const isEmpty = object => {
    for (let key in object) {
        if (object.hasOwnProperty(key)) return false
    }
    return true
}