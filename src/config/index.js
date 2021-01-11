/** API KEYS **/


export const API = process.env.REACT_APP_API_URL
export const CDN = process.env.REACT_APP_CDN_URL
export const algoliaAppId = process.env.REACT_APP_ALGOLIA_APP_ID
export const algoliaSearchApiKey = process.env.REACT_APP_ALGOLIA_ADMIN_API_KEY
export const alogiaAdminKey = process.env.REACT_APP_ALGOLIA_ADMIN_API_KEY
export const googlePlacesApiKey = process.env.REACT_APP_PLACES_API_KEY
// export const shippoApiKey = process.env.REACT_APP_SHIPPO_API_KEY
export const shippoApiKeyTest = 'shippo_test_43942b9a273603391abfb4a228f2b7b8f7abb91e'
export const shippo = require('shippo')(shippoApiKeyTest)


/** INPUT TYPES **/
// HTML INPUT TYPES
export const BUTTON = "button"
export const CHECKBOX = "checkbox"
export const COLOR = "color"
export const DATA= "date"
export const DATETIME_LOCAL = "datetime-local"
export const EMAIL = "email"
export const FILE = "file"
export const HIDDEN = "hidden"
export const IMAGE = "image"
export const MONTH = "month"
export const NUMBER = "number"
export const PASSWORD = "password"
export const RADIO = "radio"
export const RANGE = "range"
export const RESET = "reset"
export const SEARCH = "search"
export const SELECT = 'select'
export const SUBMIT = "submit"
export const TEL = "tel"
export const TEXT = "text"
export const TIME = "time"
export const URL = "url"
export const WEEK = "week"

// HYPHA INPUT TYPES
export const COUNT = "count"
export const ADDRESS = 'autoAddress'
export const COUNTRY = 'country'
export const REGION = 'region'
export const UPLOAD = 'upload'
export const RICH_TEXT = 'richText'
export const TOGGLE = 'toggle   '


/** S3 UPLOAD PATHS **/
export const UPLOAD_PATHS = {
    post: 'post/',
    shop: 'shop/'
}


/** SITE CONFIG **/
export const siteDisplayName = 'Hypha Beta'
