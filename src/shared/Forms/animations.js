import {
    flexEnd,
    flexStart
} from '../../utils/themer'

export const toggleVariants = {
    true: {
        justifyContent: flexEnd,
        backgroundColor: '#349c58',
        transition: {
            type: "spring",
            stiffness: 700,
            damping: 30
        }
    },
    false: {
        justifyContent: flexStart,
        backgroundColor: '#d0cece',
        transition: {
            type: "spring",
            stiffness: 700,
            damping: 30
        }
    }
}