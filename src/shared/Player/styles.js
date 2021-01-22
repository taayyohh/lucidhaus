import {colorPalette} from 'config/styles'
import {
    auto,
    black,
    center,
    fixed,
    flex,
    grid,
    hidden,
    none,
    pointer,
    relative,
    sv
} from 'utils/themer'

export const playerStyle = {
    position: fixed,
    left: [40, .7, 40],
    bottom: [40, .7, 40],
    height: [50, .7, 50],
    width: [350, .7, 350],
    background: 'rgb(218 220 224 / 72%)',
    borderRadius: [25, .7, 25],
    zIndex: 5
}

export const playerInnerStyle = {
    display: flex,
    alignItems: center,
    paddingLeft: [30, .7, 30],
    position: relative,
    height: [50, .7, 50],
    width: [350, .7, 350],
}

export const playerControlsWrapperStyle = {
    display: flex,
    alignItems: center,
    justifyContent: center,
    width: '100%'
}

export const playerQueueStyle = {
    position: fixed,
    left: [40, .7, 40],
    bottom: [91, .7, 91],
    minHeight: [50, .7, 50],
    height: auto,
    width: [350, .7, 350],
    padding: [50, .7, '0'],
    background: 'rgb(218 220 224 / 72%)',
    borderRadius: [25, .7, 25],
    zIndex: 5,
    overflow: hidden
}

export const playerQueueTrackStyle = {
    display: flex

}

export const playerQueueTrackInnerStyle = isActive => {
    const base = {
        position: relative,
        display: grid,
        gridTemplateColumns: '2fr 5fr',
        gridGap: sv(30),
        transform: 'color 250ms ease, font-size 250ms ease'
    }

    if(isActive)
        return {
            ...base,
            size: [20, .7, 20],
            child: {
                selector: 'a',
                color: colorPalette.purple,
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
    color: black,
    whiteSpace: 'nowrap',
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

    if(modifier)
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