import {globals} from 'config/styles'
import {
    flexEnd,
    flexStart
}                from 'utils/themer'

export const toggleVariants = {
    true: {
        justifyContent: flexEnd,
        backgroundColor: '#349c58',
        transition: {
            type: 'spring',
            stiffness: 700,
            damping: 30
        }
    },
    false: {
        justifyContent: flexStart,
        backgroundColor: globals.colors.borderColor,
        transition: {
            type: 'spring',
            stiffness: 700,
            damping: 30
        }
    }
}