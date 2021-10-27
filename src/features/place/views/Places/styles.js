import {colorPalette, globals}                               from 'config/styles'
import {auto, borderBox, none, pointer, relative, sv, white} from 'utils/themer'

export const placeSearchResultsQueryTextStyle = {
    size: [22, .7, 22],
    weight: 700,
    color: colorPalette.honeyYellow,
    child: {
        selector: 'em',
        color: globals.colors.textColor
    }
}

export const placesSidebarHeadlineStyle = {
    size: [26, .7, 22],
    weight: 700,
    boxSizing: borderBox
}

export const placeSidebarListingsStyle = {
    boxSizing: borderBox,
    paddingLeft: [25, globals.style.layoutScalingValue, 20],
    paddingRight: [25, globals.style.layoutScalingValue, 20]
}

export const placeSidebarCardWrapperStyle = {
    paddingBottom: 20,
}

export const placeSidebarCardStyle = isActive => {
    return {
        borderColor: !isActive ? globals.colors.borderColor : colorPalette.forestGreen,
        backgroundColor: white
    }

}

export const placeQueryStyle = {
    padding: [25, globals.style.layoutScalingValue, 25],
    paddingLeft: [50, globals.style.layoutScalingValue, 20],
    paddingRight: [50, globals.style.layoutScalingValue, 20],
    marginBottom: [20, globals.style.layoutScalingValue, 20],
    //  borderBottom: `1px solid ${colorPalette.forestGreen}`,
    boxShadow: `-6px -2px 19px 0px #d5d5d5`
}

export const placesMapSidebarStyle = noResults => {
    return {
        position: relative,
        height: noResults ? auto : `calc(100vh - ${sv(100, .7)} - ${sv(28, .7)} - ${sv(55, .7)})`,
        paddingBottom: [150, .7, 50],
        width: '500px',
        mobile: {
            width: '100%',
            //padding: 0,
            maxHeight: 350
        }
    }

}
export const placesMapStyle = {
    position: relative,
    top: 0,
    right: 0,
    height: `calc(100vh - ${sv(100, .7)} - ${sv(28, .7)} - ${sv(55, .7)})`,
    width: [1420, globals.style.layoutScalingValue, '100%'],
    mobile: {
        maxHeight: 400,
        borderTop: `2px solid ${colorPalette.forestGreen}`
    },
    child: [
        {
            selector: '.mapboxgl-popup-content',
            border: `1px solid ${globals.colors.borderColor}`,
            boxSizing: borderBox,
            padding: [30, .7, 30]
        },
        {
            selector: '.mapboxgl-popup-content h4',
            margin: 0,
            padding: 0
        },
        {
            selector: '.mapboxgl-popup-content a.place-name',
            size: [24, .7, 24],
            textDecoration: none,
            hover: {
                color: globals.colors.linkHoverColor
            }
        },
        {
            selector: '.title',
            hover: {
                cursor: pointer
            }
        }
    ]
}
