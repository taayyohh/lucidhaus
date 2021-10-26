/** API KEYS **/

export const API = process.env.REACT_APP_API_URL
export const CDN = process.env.REACT_APP_CDN_URL
export const CORS = process.env.REACT_APP_CORS_PROXY
export const BOONE_HOST = process.env.REACT_APP_BOONE_HOST
export const BOONE_CLIENT_ID = process.env.REACT_APP_BOONE_CLIENT_ID
export const BOONE_CLIENT_SECRET = process.env.REACT_APP_BOONE_CLIENT_SECRET
export const BOONE_API = process.env.REACT_APP_BOONE_API
export const ALGOLIA_APP_ID = process.env.REACT_APP_ALGOLIA_APP_ID
export const ALGOLIA_SEARCH_API_KEY = process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY
export const ALGOLIA_ADMIN_KEY = process.env.REACT_APP_ALGOLIA_ADMIN_API_KEY
export const GOOGLE_PLACES_API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY
export const GOOGLE_ANALYTICS_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID
export const MAPBOX_SECRET = process.env.REACT_APP_MAPBOX_SECRET
export const MAPBOX_PUBLIC = process.env.REACT_APP_MAPBOX_PUBLIC

/** INPUT TYPES **/
// HTML INPUT TYPES
export const BUTTON = "button"
export const CHECKBOX = "checkbox"
export const COLOR = "color"
export const DATE = "date"
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
export const ADDRESS = 'autoAddress'
export const AUDIO_UPLOAD = 'audioUpload'
export const COUNT = "count"
export const COUNTRY = 'country'
export const FILTER = 'filter'
export const IMAGE_UPLOAD = 'imageUpload'
export const LIKERT = 'likert'
export const MULTI_SELECT = 'multi-select'
export const REGION = 'region'
export const RICH_TEXT = 'richText'
export const SONGS = 'songs'
export const TEXTAREA = "textarea"
export const TOGGLE = 'toggle'
export const USER = 'user'

export const ACCEPTABLE_EXTENSIONS = [
    '.png',
    '.jpg',
    '.jpeg',
    '.svg',
    '.wav',
    '.mp3'
]

/** S3 IMAGE_UPLOAD PATHS **/
export const UPLOAD_PATHS = {
    post: 'post/',
    shop: 'shop/',
    place: 'place/',
    user: 'user/',
    businessOwner: 'business-owner/'
}

/** SITE CONFIG **/
export const siteDisplayName = 'Inclusive Guide'
export const siteTwitterUrl = 'https://twitter.com/inclusiveguide'
export const siteInstagramUrl = 'https://instagram.com/inclusiveguide'
