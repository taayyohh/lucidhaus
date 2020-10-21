export const overlayFadeout = {
    opacity: 0,
    transition: {
        ease: 'easeOut',
        duration: .7,
        delay: .3
    },
    transitionEnd: {
        height: 0,
        opacity: 1
    }
}
