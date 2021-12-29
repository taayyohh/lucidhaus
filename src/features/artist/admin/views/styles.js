import {postsWrapperStyle}      from 'features/album/admin/views/styles'
import {auto, center, flex, sv} from 'utils/themer'

export const adminArtistsInnerWrapperStyle = {
    ...postsWrapperStyle,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap: sv(30),
}
export const adminArtistCardWrapperStyle = {}
export const adminArtistCardStyle = {
    display: flex,
    width: '100%',
    mobile: {
        display: flex
    },
    imageWrapper: {
        display: flex,
        justifyContent: center,
        maxHeight: 'none',
        width: auto
    },
    image: {
        //maxWidth: [90, .7, '100%']
    },
    name: {
        paddingTop: 0,
        size: [20, .7, 20],
        lineHeight: [22, .7, 22]
    }
}
