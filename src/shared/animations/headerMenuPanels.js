import {
    auto,
    hidden
} from '../../utils/themer'

export const headerMenuPanelVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
        overflowY: auto,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: 'circle(30px at 100% 0)',
        overflowY: hidden,
        transition: {
          //  delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40
        }
    }

    // closed: {
    //     translateX: 960,
    //     overflowY: auto,
    //     transition: {
    //         duration: .5,
    //     }
    // },
    // open: {
    //     zIndex: 25,
    //     translateX: 0,
    //     overflowY: 'scroll',
    //     transition: {
    //         duration: .5,
    //     },
    // }
}

export const genericSubMenuVariants = {
    initial: {
        height: 0,
        overflow: 'hidden',
        marginTop: 0,
        transition: {
            duration: .4,
            ease: 'easeOut'
        },
    },
    expanded: {
        height: 'auto',
        marginTop: '2.3%', // 18px
        transition: {
            duration: .4,
            ease: 'easeOut'
        }
    }
}

export const serviceMenuPanelVariants = {
    initial: {
        height: 0,
        marginTop: 0
    },
    expanded: {
        height: 'auto',
        marginTop: 18
    }
}