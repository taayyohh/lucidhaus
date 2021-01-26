import {
    colorPalette,
    globals
} from 'config/styles'
import {
    black,
    borderBox,
    center,
    column,
    flex,
    flexEnd,
    flexStart,
    grid,
    none,
    pointer,
    relative,
    spaceBetween,
    sv
} from 'utils/themer'

export const albumsWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    maxWidth: [1400, globals.style.layoutScalingValue, '100%'],
    gridGap: sv(30),
    margin: '0 auto',
    mobile: {
        gridTemplateColumns: '1fr 1fr'
    }
}

export const albumCardStyle = {
    child: {
        selector: 'img',
        transform: 'scale(.95)',
        transition: 'transform 500ms ease',
        hover: {
            transform: 'scale(1)'
        }
    }
}

export const albumWrapperStyle = {
    display: flex,
    flexDirection: column,
    width: [1050, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto'
}

export const albumWrapperInnerStyle = {
    display: grid,
    gridTemplateColumns: `${sv(500, globals.style.layoutScalingValue)} 1fr`,
    gridGap: sv(100, globals.style.layoutScalingValue),
    mobile: {
        display: flex,
        flexDirection: column,

    }
}

export const albumWrapperImageWrapperStyle = {
    height: [500, globals.style.layoutScalingValue, 'auto'],
    width: [500, globals.style.layoutScalingValue, 'auto']
}

export const albumInfoWrapperStyle = {
    display: flex,
    flexDirection: column,
    alignItems: flexEnd
}

export const albumPrimaryArtistStyle = {
    textDecoration: none,
    size: [28, .7, 28],
    color: colorPalette.purple,
    hover: {
        color: colorPalette.purple,
        textDecoration: 'underline'
    }
}

export const albumSongsWrapperStyle = {
    width: '100%',
    paddingTop: [40, .7, 20],
    marginTop: [40, .7, 20],
    alignSelf: flexStart,
    borderTop: `1px solid ${globals.colors.borderColor}`
}

export const albumSongWrapperStyle = isActive => {
    return {
        position: relative,
        display: 'flex',
        size: [24, .7, 24],
        alignItems: center,
        justifyContent: spaceBetween,
        color: isActive ? colorPalette.purple : black,
        hover: {
            color: colorPalette.purple,
            cursor: pointer
        }
    }
}

export const albumSongTrackNumberStyle = {
    size: [16, .7, 16],
    marginRight: [15, .7, 15]
}

export const albumTitleStyle = {
    font: globals.fonts.fancy,
    textAlign: center,
    size: [42, .7, 28],
    margin: 0,
    mobile: {
        textAlign: 'left'
    },
    hover: {
        color: colorPalette.purple,
        cursor: pointer
    }
}

export const albumDescriptionStyle = {
    marginTop: [60, .7, 30],
    paddingTop: [50, .7, 30],
    boxSizing: borderBox,
    paddingLeft: [30, globals.style.layoutScalingValue, '0'],
    paddingRight: [30, globals.style.layoutScalingValue, '0'],
    borderTop: `1px solid ${colorPalette.gray}`
}