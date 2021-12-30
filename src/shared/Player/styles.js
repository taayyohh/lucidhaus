import {colorPalette, globals} from 'config/styles'
import {
    absolute,
    auto,
    black,
    block,
    center,
    column,
    fixed,
    flex,
    flexEnd,
    hidden,
    none,
    pointer,
    relative,
    white
}                              from 'utils/themer'

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
        position: absolute,
        right: isOpen ? 20 : 14,
        top: isOpen ? 5 : 12,
        zIndex: 1,
        size: [20, .7, 18],
        // marginTop: !isOpen ? 11 : -3,
        // marginLeft: auto,
        mobile: {
            size: 18,
            marginTop: isOpen ? -10 : 7,
            marginLeft: isOpen ? auto : -3,
        },
        hover: {
            color: colorPalette.honeyYellow,
            cursor: pointer
        }
    }

}

export const playerSongsWrapperStyle = {
    overflow: hidden
}

export const playerQueueInnerStyle = {
    position: relative,
    paddingTop: [35, .7, 15],
    paddingBottom: [20, .7, 20],
    paddingLeft: [20, .7, 20],
    paddingRight: [20, .7, 20]
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
    background: '#FAFAFA',
    border: `1px solid #4d0b69`,
    zIndex: 5,
    overflowY: 'scroll',
    msScrollBar: none,
    ffScrollBar: none,
    hover: {
        cursor: pointer,
    },
    scrollBar: {
        display: none,
    },
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
        display: flex,
        // display: grid,
        // gridTemplateColumns: `${sv(90)} 1fr`,
        // gridGap: sv(30),
        width: '100%',
        transform: 'color 250ms ease, font-size 250ms ease',
        // paddingTop: 3,
        // paddingBottom: 3,
        mobile: {
            gridTemplateColumns: `100px 1fr`,
            gridGap: 50,
        }
    }

    if (isActive)
        return {
            ...base,
            backgroundColor: '#cdcdcd',
            child: {
                selector: 'a',
                color: white,
                hover: {
                    color: colorPalette.black
                }
            }
        }

    return {
        ...base,


    }
}

export const playerQueueTitleStyle = {
    textDecoration: none,
    color: black,
    marginLeft: [15, globals.style.layoutScalingValue, 15],
    hover: {
        color: colorPalette.honeyYellow
    }
}

export const playerQueueArtistStyle = {
    textDecoration: none,
    whiteSpace: 'nowrap',
    paddingLeft: 20,
    hover: {
        color: colorPalette.honeyYellow
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
            color: colorPalette.honeyYellow,
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
            color: colorPalette.honeyYellow,
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
