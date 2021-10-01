import {colorPalette, globals}                                                            from 'config/styles'
import {black, column, flex, flexStart, grid, inlineFlex, none, pointer, sv, white, wrap} from 'utils/themer'

export const userProfileFormStyle = {
    multiSelect: {
        display: flex
    }
}

export const multiSelectOptionListWrapperStyle = {
    display: flex,
    flexWrap: wrap,
    maxHeight: [300, .7, 300],
    overflow: 'scroll',
    scrollBar: {
        display: none
    },
    paddingTop: [20, .7, 20],
    option: {}
}

export const multiSelectOptionWrapperStyle = {
    display: flex
}

export const multiSelectOptionStyle = {
    background: '#e4e4e4',
    alignSelf: flexStart,
    padding: '5px 25px',
    borderRadius: 5,
    marginRight: [10, globals.style.layoutScalingValue, 10],
    marginBottom: [10, globals.style.layoutScalingValue, 10]
}

export const multiSelectSearchFieldStyle = {
    background: '#fff',
    border: `1px solid ${globals.colors.borderColor}`,
    height: [50, .7, 50],
    borderRadius: [10, .7, 10],
    width: [350, globals.style.layoutScalingValue, '100%'],
    focus: {
        outline: none
    }
}

export const multiSelectWrapperStyle = {
    marginBottom: [50, .7, 50]
}

export const multiSelectInnerWrapperStyle = {
    border: `1px solid ${globals.colors.borderColor}`,
    padding: [40, globals.style.layoutScalingValue, 40],
    borderRadius: [10, .7, 10]
}

export const multiSelectHelperTextStyle = {
    size: [22, .7, 22],
    marginLeft: [5, .7, 5]
}


export const userContentWrapperStyle = {
    width: [1280, globals.style.layoutScalingValue, '100%']
}

export const submitFormWrapperStyle = {
    inner: {
        // display: grid,
        // gridTemplateColumns: '1fr 1fr',
        // maxWidth: '50%'
    }
}

export const adminReviewWrapperStyle = {
    display: grid,
    gridTemplateColumns: '1fr 1fr',
    gridGap: sv(30, globals.style.layoutScalingValue),
    mobile: {
        display: flex,
        flexDirection: column
    }
}

export const adminReviewStyle = {
    paddingTop: [30, globals.style.layoutScalingValue, 30],
    paddingBottom: [30, globals.style.layoutScalingValue, 30],
    paddingLeft: [30, globals.style.layoutScalingValue, 30],
    paddingRight: [30, globals.style.layoutScalingValue, 30],
    border: `1px solid ${globals.colors.borderColor}`,
    borderRadius: [10, .7, 10],
    color: globals.colors.textColor,
    textDecoration: none,
    transition: 'background-color 250ms ease, border-color 250ms ease',
    background: white,
    name: {
        size: [24, .7, 24],
        lineHeight: [28, .7, 28]
    },
    date: {
        color: colorPalette.darkGray,
        size: [15, .7, 15]
    },
    top: {
        marginBottom: [15, .7, 15]
    },
    hover: {
        borderColor: black,
        color: black
    }
}

export const submitPlaceButtonStyle = {
    alignSelf: flexStart,
    backgroundColor: colorPalette.darkHoneyYellow,
    paddingLeft: [15, .7, 15],
    paddingRight: [15, .7, 15],
    paddingTop: [10, .7, 10],
    paddingBottom: [10, .7, 10],
    display: inlineFlex,
    flexDirection: 'column',
    borderRadius: [5, .7, 5],
    color: white,
    size: [15, .7, 15],
    weight: 600,
    border: `1px solid ${colorPalette.darkHoneyYellow}`,
    transition: 'background 200ms ease',
    hover: {
        cursor: pointer,
        backgroundColor: colorPalette.honeyYellow,
        border: `1px solid ${colorPalette.honeyYellow}`,

    }
}
