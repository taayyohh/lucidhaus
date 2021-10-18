import {globals}                       from 'config/styles'
import {auto, borderBox, relative, sv} from 'utils/themer'

export const placeSearchResultsQueryTextStyle = {
    size: [24, .7, 20],
    marginBottom: [30, .7, 30],
    child: {
        selector: 'em',
        size: [19, .7, 19]
    }
}
export const placesSidebarHeadlineStyle = {
    size: [32, .7, 32],
    weight: 700,
    boxSizing: borderBox
}
export const placeSidebarListingsStyle = {
    boxSizing: borderBox,
    paddingLeft: [30, .7, 30],
    paddingRight: [30, .7, 30]

}
export const placesMapSidebarStyle = noResults => {
    return {
        position: relative,
        height: noResults ? auto : `calc(100vh - ${sv(100, .7)} - ${sv(28, .7)} - ${sv(55, .7)})`,
        paddingLeft: [50, globals.style.layoutScalingValue, 50],
        paddingRight: [0, globals.style.layoutScalingValue, '0'],
        paddingTop: [50, globals.style.layoutScalingValue, 50],
        paddingBottom: [150, .7, 50],
        width: '500px'
    }

}
