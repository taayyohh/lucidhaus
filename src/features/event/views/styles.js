import {colorPalette, globals}                                       from 'config/styles'
import {auto, borderBox, center, column, flex, row, sv, transparent} from 'utils/themer'

export const eventsWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: sv(50, globals.style.layoutScalingValue),
    margin: '0 auto',
    marginTop: [50, .7, 50],
    mobile: {
        display: flex,
        flexDirection: column
    }
}

export const eventCardStyle = {
    border: 0,
    padding: 0,
    hover: {
        background: transparent
    },
    child: {
        selector: 'img',
        transform: 'scale(.75)',
        transition: 'transform 500ms ease',
        hover: {
            transform: 'scale(.9)'
        }
    }
}

export const eventWrapperStyle = {
    display: flex,
    flexDirection: row,
    width: '100%',
    marginTop: [50, .7, 50],
    mobile: {
        flexDirection: column
    }
}

export const eventContentWrapperStyle = {
    width: auto,

}

export const eventImageWrapperStyle = {
    minWidth: [850, globals.style.layoutScalingValue, '100%'],
    width: [850, globals.style.layoutScalingValue, '100%'],
    child: {
        selector: 'img',
        float: 'left',
        minWidth: [400, globals.style.layoutScalingValue, '100%'],
        width: [400, globals.style.layoutScalingValue, '100%'],
        marginRight: [50, globals.style.layoutScalingValue, '0'],
        marginBottom: [50, .7, 30]
    }
}

export const eventInfoStyle = {
    marginLeft: auto,
    marginRight: [200, globals.style.layoutScalingValue, '0'],
    paddingLeft: [100, .7, '0'],
    borderLeft: `1px solid #cdcdcd`,
    mobile: {
        margin: 0,
        border: 0
    }
}

export const eventImageWrapperInnerStyle = {
    display: flex

}

export const eventTitleStyle = {
    font: globals.fonts.fancy,
    textAlign: center,
    size: [42, .7, 36],
    margin: 0,
    marginBottom: [30, .7, 20]
}

export const eventDescriptionStyle = {
    marginTop: [60, .7, 30],
    paddingTop: [50, .7, 30],
    boxSizing: borderBox,
    paddingLeft: [30, globals.style.layoutScalingValue, '0'],
    paddingRight: [30, globals.style.layoutScalingValue, '0'],
    borderTop: `1px solid ${colorPalette.gray}`
}

export const eventImageStyle = {}
