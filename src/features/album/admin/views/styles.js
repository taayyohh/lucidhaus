import {defaultInputStyle}                                    from 'shared/Fields/styles'
import {auto, borderBox, center, flex, none, sv, transparent} from 'utils/themer'
import {globals}                                              from '../../../../config/styles'

export const postsWrapperStyle = {
    display: flex,
    flexDirection: 'column-reverse',
    mobile: {
        display: flex
    }
}
export const adminAlbumCardWrapperStyle = {}
export const adminAlbumCardStyle = {
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
export const adminAlbumsInnerWrapperStyle = {
    ...postsWrapperStyle,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap: sv(30),
}
export const searchWrapperStyle = {
    display: flex,
    marginBottom: [50, .7, 50],
    child: [
        {
            selector: 'input',
            ...defaultInputStyle,
            border: `1px solid ${globals.colors.borderColor}`,
            width: [500, .7, '100%'],
            borderRadius: [5, .7, 5],
            hover: {
                after: {
                    content: none
                },
                before: {
                    content: none
                }
            }
        },
        {
            selector: 'form',
            display: flex,
            child: [
                {
                    selector: '.ais-SearchBox-submit',
                    display: none
                }
            ]
        },
        {
            selector: 'button',
            background: transparent,
            border: 0,
            width: [30, .7, 30],
            child: {
                selector: 'svg',
                height: [20, .7, 20],
                width: [20, .7, 20]
            }
        }
    ]
}
export const songsFormStyle = {

    border: 0,
    marginTop: [80, .7, 50],
    boxSizing: borderBox,
    paddingLeft: [160, .7, 160],
    paddingRight: [160, .7, 160],
    marginBottom: [50, .7, 50],

    heading: {},
    inner: {},
    button: {},
    child: [
        {
            selector: '> div > div > div',
            minHeight: [200, .7, 200]
        }
    ]

}

