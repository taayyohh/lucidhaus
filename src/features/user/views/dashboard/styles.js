import {colorPalette, globals}                                                from 'config/styles'
import {block, borderBox, center, column, flex, hidden, sv, uppercase, white} from 'utils/themer'

export const userDashboardInfoWrapperStyle = {
    font: globals.fonts.serif,
    lineHeight: [28, .7, 28],
    marginTop: [30, .7, 30],
    width: 'calc(100% - 100px)',
    margin: '0 auto',
    mobile: {
        width: '100%'
    },
    child: {
        selector: '> div',
        marginBottom: [20, .7, 20]
    }
}

export const userDashboardRTEHeadingStyle = {
    size: [24, .7, 24],
    marginBottom: [30, .7, 30],
}

export const dashboardContentContainerStyle = {
    display: flex,
    flexDirection: column,
    background: white,
    padding: [50, .7, 25],
    paddingLeft: [50, globals.style.layoutScalingValue, 25],
    paddingRight: [50, globals.style.layoutScalingValue, 25],
    boxSizing: borderBox,
    border: `1px solid ${globals.colors.borderColor}`,
    borderRadius: [10, .7, 10],
    marginBottom: [50, .7, 50],
    child: {
        select: 'strong',
        marginBottom: [20, .7, 20],
        display: block
    }
}

export const userDashboardBookmarkStyle = {
    size: [20, .7, 20],
    color: colorPalette.honeyYellow
}

export const userDashboardAvatarStyle = {
    minHeight: [130, .7, 160],
    minWidth: [130, .7, 160],
    width: [130, .7, 160],
    height: [130, .7, 160],
    borderRadius: [100, .7, 150],
    overflow: hidden
}

export const yourInputHeadingWrapperStyle = {
    backgroundColor: '#0081A7',
    paddingTop: [60, .7, 60],
    paddingBottom: [60, .7, 60],
    marginBottom: [75, .7, 50],
    textAlign: center,
    size: [42, .7, 42],
    mobile: {
        lineHeight: 44
    },
    child: {
        selector: 'span',
        textTransform: uppercase,
        color: white
    }
}

export const yourInputInfoWrapperStyle = {
    display: flex,
    width: `calc(100% - ${sv(100, globals.style.layoutScalingValue)})`,
    margin: '0 auto',
    mobile: {
        flexDirection: column
    },
    heading: {
        weight: 700,
        size: [20, .7, 20],
        paddingBottom: [20, .7, 20]
    },
    imageWrapper: {
      mobile: {
          maxWidth: 400,
          margin: '0 auto'
      }
    },
    image: {
        width: [345, globals.style.layoutScalingValue, '100%'],
        height: [345, globals.style.layoutScalingValue, 'auto'],
        minWidth: [345, globals.style.layoutScalingValue, '100%'],
        minHeight: [345, globals.style.layoutScalingValue, 'auto'],
        marginLeft: [90, globals.style.layoutScalingValue, '0'],
        mobile: {
            maxWidth: 400,
            marginTop: 15
        }
    }
}
