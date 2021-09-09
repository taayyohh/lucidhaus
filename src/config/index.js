/** API KEYS **/


export const API = process.env.REACT_APP_API_URL
export const CDN = process.env.REACT_APP_CDN_URL
export const algoliaAppId = process.env.REACT_APP_ALGOLIA_APP_ID
export const algoliaSearchApiKey = process.env.REACT_APP_ALGOLIA_ADMIN_API_KEY
export const alogiaAdminKey = process.env.REACT_APP_ALGOLIA_ADMIN_API_KEY
export const googlePlacesApiKey = process.env.REACT_APP_PLACES_API_KEY
// export const shippoApiKey = process.env.REACT_APP_SHIPPO_API_KEY
export const shippoApiKeyTest = process.env.REACT_APP_SHIPPO_TEST_API_KEY
export const shippo = require('shippo')(shippoApiKeyTest)
export const googleAnalyticsId = process.env.REACT_APP_GOOGLE_ANALYTICS_ID


/** INPUT TYPES **/
// HTML INPUT TYPES
export const BUTTON = "button"
export const CHECKBOX = "checkbox"
export const COLOR = "color"
export const DATE= "date"
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
export const IMAGE_UPLOAD = 'imageUpload'
export const AUDIO_UPLOAD = 'audioUpload'
export const RICH_TEXT = 'richText'
export const TOGGLE = 'toggle'
export const SONGS = 'songs'


/** S3 IMAGE_UPLOAD PATHS **/
export const UPLOAD_PATHS = {
    post: 'post/',
    shop: 'shop/',
    artist: 'artist/',
    event: 'event/',
    collaborator: 'collaborator/',
    audio: 'audio/',
    audioCoverArt: 'audio/coverArt/'
}


/** SITE CONFIG **/
export const siteDisplayName = 'LucidHaus'
export const siteTwitterUrl = 'https://twitter.com/lucidhaus'
export const siteInstagramUrl = 'https://instagram.com/lucidhaus'
