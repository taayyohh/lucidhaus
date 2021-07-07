import {globals} from 'config/styles'
import {
    center,
    flexEnd,
    flexStart
} from 'utils/themer'

export const toggleVariants = {
    initial: {
        justifyContent: center,
        backgroundColor: globals.colors.borderColor,
        transition: {
            type: 'spring',
            stiffness: 700,
            damping: 30
        }
    },
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
