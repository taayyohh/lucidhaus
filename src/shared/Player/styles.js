import {
    colorPalette,
    globals
} from 'config/styles'
import {
    auto,
    black,
    block,
    center,
    column,
    fixed,
    flex,
    flexEnd,
    grid,
    hidden,
    none,
    pointer,
    relative,
    sv,
    white
} from 'utils/themer'

export const playerStyle = {
    position: fixed,
    left: [40, .7, 25],
    bottom: [40, .7, 20],
    height: [50, .7, 50],
    width: [300, globals.style.layoutScalingValue, '100%'],
    background: '#FAFAFA',
    borderRadius: [10, .7, 10],
    border: `1px solid #4d0b69`,
    zIndex: 5,
    mobile: {
        width: 'calc(100% - 50px)'
    }
}

export const playerInnerStyle = {
    display: flex,
    alignItems: center,
    paddingLeft: [30, .7, 30],
    position: relative,
    height: [50, .7, 50],
    width: [300, .7, '100%'],
    mobile: {
        width: 'calc(100% - 50px)'
    }
}

export const playerControlsWrapperStyle = {
    display: flex,
    alignItems: center,
    justifyContent: center
}

export const playerMinimizeStyle = {
    position: relative,
    top: 5,
    right: 5,
    alignSelf: flexEnd,
    paddingTop: 10,
    paddingBottom: 20
}

export const playerMinimizeIconStyle = isOpen => {
    return {
        display: block,
        marginBottom: [15, .7, 15],
        marginLeft: auto,
        mobile: {
            size: 22,
            marginTop: isOpen ? -10 : -3,
            marginLeft: isOpen ? auto : -6,
        },
        hover: {
            color: colorPalette.purple,
            cursor: pointer
        }
    }

}

export const playerSongsWrapperStyle = {
    overflow: hidden
}

export const playerQueueInnerStyle = {
    position: relative
}

export const playerQueueStyle = {
    display: flex,
    flexDirection: column,
    position: fixed,
    left: [40, .7, 25],
    bottom: [95, .7, 75],
    minHeight: [50, .7, 50],
    height: auto,
    width: [300, globals.style.layoutScalingValue, 350],
    maxWidth: [300, globals.style.layoutScalingValue, 350],
    maxHeight: [300, .7, 300],
    paddingTop: [5, .7, 5],
    paddingBottom: [20, .7, 20],
    paddingLeft: [20, .7, 20],
    paddingRight: [20, .7, 20],
    background: '#FAFAFA',
    borderRadius: [10, .7, 10],
    border: `1px solid #4d0b69`,
    zIndex: 5,
    overflowY: 'scroll',
    msScrollBar: none,
    ffScrollBar: none,
    scrollBar: {
        display: none,
    },
    hover: {},
    mobile: {
        width: 'calc(100% - 50px)'
    }
}

export const playerQueueTrackStyle = {
    display: flex,
}

export const playerQueueTrackInnerStyle = isActive => {
    const base = {
        position: relative,
        display: grid,
        gridTemplateColumns: `${sv(90)} 1fr`,
        gridGap: sv(30),
        width: '100%',
        transform: 'color 250ms ease, font-size 250ms ease',
        paddingTop: 3,
        paddingBottom: 3,
        mobile: {
            gridTemplateColumns: `100px 1fr`,
            gridGap: 50,
        }
    }

    if (isActive)
        return {
            ...base,
            backgroundColor: colorPalette.purple,
            child: {
                selector: 'a',
                color: white,
                hover: {
                    textDecoration: 'underline'
                }
            }
        }

    return {
        ...base

    }
}

export const playerQueueTitleStyle = {
    textDecoration: none,
    color: black,
    hover: {
        color: colorPalette.purple
    }
}

export const playerQueueArtistStyle = {
    textDecoration: none,
    whiteSpace: 'nowrap',
    paddingLeft: 20,
    hover: {
        color: colorPalette.purple
    }
}

export const playerMuteStyle = muted => {
    return {
        size: [30, .7, 30],
        marginRight: [20, .7, 20],
        color: !muted ? '#b1b1b1' : '#000',
        marginLeft: auto,
        hover: {
            cursor: pointer,
            color: colorPalette.purple,
        }
    }
}

export const playerIconStyle = modifier => {
    const base = {
        size: [30, .7, 30],
        marginRight: [20, .7, 20],
        color: black,
        hover: {
            cursor: pointer,
            color: colorPalette.purple,
        }
    }

    if (modifier)
        return {
            ...base,
            color: 'rgb(177 177 177 / 45%)',
            hover: {
                ...base.hover,
                color: 'rgb(177 177 177 / 45%)',
                cursor: 'default'
            }
        }

    return {
        ...base
    }
}