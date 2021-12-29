import {postsWrapperStyle}                 from 'features/album/admin/views/styles'
import {auto, borderBox, center, flex, sv} from 'utils/themer'
import {globals}                           from '../../../../config/styles'

export const adminEventsInnerWrapperStyle = {
    ...postsWrapperStyle,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap: sv(30),
}
export const adminEventCardWrapperStyle = {}
export const adminEventCardStyle = {
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

export const rsvpsFormStyle = {
    border: 0,
    boxSizing: borderBox,
    padding: '0 !important',
    marginBottom: [50, .7, 50],
    minWidth: [300, globals.style.layoutScalingValue, '100%'],

    heading: {
        marginLeft: auto
    },
    inner: {},
    button: {},
    child: [
        {
            selector: '> div > div > div',
            minHeight: [200, .7, 200]
        }
    ]

}
