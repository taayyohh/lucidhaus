/**
 * Appends the appropriate article before a string.
 * This is not a robust solution, but it will work for what we need.
 *
 * @param {string} text
 * @returns {string}
 */
export const articlize = text => (['a', 'e', 'i', 'o', 'u'].includes(text.toLowerCase().charAt(0)) ? 'an ' : 'a ') + text


/**
 * Decodes HTML entities. Must have trailing semicolon.
 * Example: &amp; => &
 *
 * @param {string} html
 * @returns {string}
 */
export const decodeEntities = html => {
    let cache = {},
        character,
        e = document.createElement('div')

    return html.replace(/([&][^&; ]+[;])/g, entity => {
        character = cache[entity]
        if (!character) {
            e.innerHTML = entity
            if (e.childNodes[0])
                character = cache[entity] = e.childNodes[0].nodeValue
            else
                character = ''
        }
        return character
    })
}

/**
 *  Returns the first 40 words of a string.
 *
 * @param {string} source
 * @param {number} words
 * @returns {string}
 */
export const excerpt = (source, words = 20) =>
    source && decodeEntities(stripHtml(source).trim()).split(' ').slice(0, words).join(' ')

/**
 * Return an array with the separator interspersed between each element of the array
 * sourceArray must be an array of React components.
 * For plain strings, just use .join()
 *
 * @param {array} sourceArray
 * @param {string} separator
 * @returns {array}
 */
export const intersperse = (sourceArray, separator) =>
    sourceArray.length > 0
        ? sourceArray.slice(1).reduce((xs, x) => xs.concat([separator, x]), [sourceArray[0]])
        : []


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

/**
 * Compares 2 objects to see if they're identical or not.
 *
 * @param {object} a
 * @param {object} b
 * @returns {boolean}
 */
export const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)

/**
 * Determines if the parameter is a string.
 *
 * @param a
 * @returns {boolean}
 */
export const isString = a => typeof a === 'string' || a instanceof String



/**
 * Determines if two arrays are equal.
 *
 */
export const arrayEquals = (a, b) => {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}


/**
 * Randomizes an array
 *
 * @param {array} a
 * @returns {array}
 */
export const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a
}


/**
 * Sorts the given object alphabetically by the given property key
 *
 * Usage: sortAlpha(myObject, 'title')
 *
 * @param {object} object
 * @param {string} key
 * @returns {object}
 */
export const sortAlpha = (object, key) =>
    object.sort((a, b) => {
        if (a[key] < b[key]) return -1
        if (a[key] > b[key]) return 1
        return 0
    })

/**
 * Strips HTML tags from string
 *
 * @param {string} html
 * @returns {string}
 */
export const stripHtml = html => html.replace(/<(?:.|\n)*?>/gm, '')


/**
 * Determines whether browser is on a device with Touch Events (ie. Tablet or Mobile device)
 *
 * @param {string}
 * @returns {boolean}
 */
export const isTouchDevice = () => {
    return 'ontouchstart' in window
}

/**
 *
 * Can be used with await keyword inside async function and will resolve
 *
 */
export const timeoutAsync = (ms) => new Promise(resolve => setTimeout(resolve, ms))
export const clearTimeout = () => new Promise(resolve => clearTimeout(resolve))
export const resolvedPromise = (fn) => new Promise((resolve, reject) => resolve(fn))
export const getScrollbarWidth = () => {

    // Creating invisible container
    const outer = document.createElement('div')
    outer.style.visibility = 'hidden'
    outer.style.overflow = 'scroll' // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar' // needed for WinJS apps
    document.body.appendChild(outer)

    // Creating inner element and placing it in the container
    const inner = document.createElement('div')
    outer.appendChild(inner)

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth)

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer)

    return scrollbarWidth

}

export const bytesToMegaBytes = bytes => (bytes / (1024 * 1024)).toFixed(2)

export const getById = (arr, id) =>
    arr.filter(item => item._id === id)[0]

export const getNameById = (arr, id) =>
    arr.filter(item => item._id === id)[0]?.name


/**
 *
 * Slugify
 *
 */

export const slugify = string => {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w-]+/g, '') // Remove all non-word characters
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
}


/**
 *
 * Unslugify
 *
 */

export const unslugify = slug => {
    const result = slug.replace(/-/g, " ")
    return result.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}

/**
 *
 * Debounce
 *
 */



export const debounce = (func, wait) => {
    let timeout

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }

        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}


/**
 *
 * Format Phone Number
 *
 */


export const formatPhone = (value) => value
    ?.match(/\d*/g).join('')
    ?.match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
    ?.slice(1)
    ?.join('-')
    ?.replace(/-*$/g, '')


export const phoneRegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
export const passwordRegExp = /[^ ]{8,36}/


/**
 *
 * Remove Item From Array
 *
 */


