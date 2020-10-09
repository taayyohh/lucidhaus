/**
 * Appends the appropriate article before a string.
 * This is not a robust solution, but it will work for what we need.
 *
 * @param {string} text
 * @returns {string}
 */
export const articlize = text => (['a', 'e', 'i', 'o', 'u'].includes(text.toLowerCase().charAt(0)) ? 'an ' : 'a ') + text

/**
 * Composes a person's title from their post object
 *
 * @param {object} post
 * @returns {string}
 */
export const composePersonTitle = post => post.alternate_title || post.position?.[0].term

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
 * Converts a base64 data URI to a Blob so that it can be downloaded via IE11.
 *
 * @param dataUri
 * @returns {Blob}
 */
export const dataUriToBlob = dataUri => {
    let b64 = btoa(dataUri),
        parts = b64.split(/[:;,]/),
        type = parts[1],
        binData = atob(parts.pop()),
        mx = binData.length,
        uiArr = new Uint8Array(mx)

    for (let i = 0; i < mx; ++i)
        uiArr[i] = binData.charCodeAt(i)
    return new Blob([uiArr], {type: type})
}

/**
 *  Returns the first 40 words of a string.
 *
 * @param {string} source
 * @param {number} words
 * @returns {string}
 */
export const excerpt = (source, words = 40) =>
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
 * Determines whether the given node is a child of the given parent.
 *
 * @param parent
 * @param child
 * @returns {boolean}
 */
export const isDescendant = (parent, child) => {
    let node = child.parentNode
    while (node !== null) {
        if (node === parent)
            return true

        node = node.parentNode
    }

    return false
}

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


export const getEvenFontSize = () => {
    let scalingPct = .5
    let baseValue = 10
    let vw = Math.floor(window.innerWidth * scalingPct / 100)
    return ((baseValue + vw) % 2) + baseValue + vw
}


/**
 * Determines whether browser is on a device with Touch Events (ie. Tablet or Mobile device)
 *
 * @param {string}
 * @returns {boolean}
 */
export const isTouchDevice = () => {
    return 'ontouchstart' in window
}