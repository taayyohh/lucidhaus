import {
    flexEnd,
    flexStart
} from '../../utils/themer'

export const toggleVariants = {
    true: {
        justifyContent: flexEnd,
        backgroundColor: '#349c58'
    },
    false: {
        justifyContent: flexStart,
        backgroundColor: '#d0cece'
    }
}