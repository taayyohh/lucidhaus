import {isAuthenticated} from '../api/apiAuth'

export const isSubpage = match => Object.keys(match.params).length > 0
export const isAdmin = () => !!isAuthenticated() && isAuthenticated().user.role === 1