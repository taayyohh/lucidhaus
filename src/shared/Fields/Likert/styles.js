import {column, flex, pointer} from 'utils/themer'

export const likertOptionsWrapperStyle = {
    display: flex,
    marginBottom: [30, .7, 30],
    mobile: {
        flexDirection: column
    }
}

export const likertOptionStyle = {
    marginRight: [20, .7, '0'],
    hover: {
        cursor: pointer
    }
}
