import {colorPalette, globals} from 'config/styles'
import {
    absolute,
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
}                              from 'utils/themer'

export const albumsWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    maxWidth: [1400, globals.style.layoutScalingValue, '100%'],
    gridGap: sv(30),
    margin: '0 auto',
    marginTop: [50, .7, 50],
    marginBottom: [100, .7, 50],
    mobile: {
        gridTemplateColumns: '1fr 1fr'
    }
}

export const albumCardStyle = {
    name: {
        size: [22, .7, 22],
        lineHeight: [22, .7, 14],
        weight: 800
    },
    textWrapper: {
        minHeight: 150
    },
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
    margin: '0 auto',
    marginTop: [50, .7, 50]
}

export const albumWrapperInnerStyle = {
    display: grid,
    gridTemplateColumns: `${sv(500, globals.style.layoutScalingValue)} 3fr`,
    gridGap: sv(60, globals.style.layoutScalingValue),
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
    size: [22, .7, 22],
    color: colorPalette.purple,
    hover: {
        color: colorPalette.purple,
        textDecoration: 'underline'
    }
}

export const albumCollaboratorStyle = {
    ...albumPrimaryArtistStyle,
    color: black,
    marginLeft: [15, .7, 15],
    hover: {
        color: black
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
        size: [18, .7, 18],
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

export const albumSongActiveIndicatorStyle = {
    height: [8, .7, 8],
    width: [8, .7, 8],
    borderRadius: [4, .7, 4],
    position: absolute,
    top: '50%',
    marginTop: [-4, .7, -4],
    background: colorPalette.honeyYellow,
    right: 0
}
export const albumTitleStyle = {
    font: globals.fonts.fancy,
    textAlign: center,
    size: [38, .7, 28],
    weight: 800,
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
    borderTop: `1px solid ${colorPalette.gray}`,
    child: [
        {
            selector: 'p:first-child',
            size: [32, .7, 26],
            lineHeight: [48, .7, 36]
        }
    ]
}
