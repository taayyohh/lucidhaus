import {globals}                     from 'config/styles'
import {flex, flexStart, none, wrap} from 'utils/themer'

export const userProfileFormStyle = {
    multiSelect: {
        display: flex
    }
}

export const multiSelectOptionListWrapperStyle = {
    display: flex,
    flexWrap: wrap,
    minHeight: [200, .7, 200],
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
