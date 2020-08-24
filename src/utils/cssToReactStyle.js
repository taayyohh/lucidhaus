import cssParser from 'css'

//
// Transform implementation or originally thanks to
// https://github.com/raphamorim/native-css
//

const transformRules = (self, rules, result) => {
    rules.forEach(rule => {
        let obj = {}
        if (rule.type === 'media') {
            let name = mediaNameGenerator(rule.media)
            let media = result[name] = result[name] || {
                '__expression__': rule.media
            }
            transformRules(self, rule.rules, media)
        } else if (rule.type === 'rule') {
            rule.declarations.forEach(declaration => {
                if (declaration.type === 'declaration') {
                    let cleanProperty = cleanPropertyName(declaration.property)
                    obj[cleanProperty] = declaration.value
                }
            })
            rule.selectors.forEach(selector =>
                result[nameGenerator(selector.trim())] = obj
            )
        }
    })
}

const cleanPropertyName = name => name.replace(/(-.)/g, v => v[1].toUpperCase())

const mediaNameGenerator = name => '@media ' + name

const nameGenerator = name =>
    name.replace(/\s\s+/g, ' ').replace(/[^a-zA-Z0-9]/g, '_').replace(/^_+/g, '').replace(/_+$/g, '')

export const cssToReact = inputCssText => {

    if (!inputCssText)
        throw new Error('missing css text to transform')

    // If the input "css" doesn't wrap it with a css class (raw styles)
    // we need to wrap it with a style so the css parser doesn't choke.
    let bootstrapWithCssClass = false
    if (inputCssText.indexOf('{') === -1) {
        bootstrapWithCssClass = true
        inputCssText = `.bootstrapWithCssClass { ${inputCssText} }`
    }

    let css = cssParser.parse(inputCssText)
    let result = {}
    transformRules(this, css.stylesheet.rules, result)

    // Don't expose the implementation detail of our wrapped css class.
    if (bootstrapWithCssClass) {
        result = result.bootstrapWithCssClass
    }

    return result
}