import {globals}           from '../../config/styles'
import {deleteButtonStyle} from '../../shared/Controls/styles'
import {menuPanelStyle}    from '../../shared/Menus/styles'
import {
    auto,
    center,
    column,
    flex,
    flexEnd,
    flexStart,
    grid,
    inlineFlex,
    none,
    pointer,
    relative,
    row,
    sv
}                          from '../../utils/themer'
import {postsWrapperStyle} from '../post/styles'

export const adminPostsWrapperStyle = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gridGap: sv(30),
    mobile: {
        display: flex,
        flexDirection: column
    }
}
export const adminPostsInnerWrapperStyle = {
    ...postsWrapperStyle,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: sv(30),
}
export const adminPostCardWrapperStyle = {}
export const adminPostCardStyle = {
    display: grid,
    gridTemplateColumns: `${sv(100)} 1fr`,
    gridGap: sv(15),
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
        maxWidth: [90, .7, '100%']
    },
    name: {
        paddingTop: 0,
        size: [20, .7, 20],
        lineHeight: [22, .7, 22]
    }
}
export const adminDashboardStyle = {
    heading: {
        margin: 0,
        fontFamily: globals.fonts.fancy,
        tablet: {
            size: 60
        },
        small: {},
        large: {}
    }
}
export const adminCardControlsButtonWrapperStyle = {
    display: flex,
    flexDirection: row,
    justifyContent: flexEnd
}
export const adminShopCardWrapperStyle = {
    ...adminPostCardWrapperStyle
}
export const adminShopCardStyle = {
    ...adminPostCardStyle
}
export const adminHeadingStyle = {
    size: [42, .7, 26],
    paddingBottom: [25, .7, 25],
    marginBottom: [25, .7, 25],
    borderBottom: `${sv(5)} solid #000`,
    font: globals.fonts.fancy
}
export const adminCardControlsButtonStyle = {
    ...deleteButtonStyle,
    marginLeft: [10, globals.style.layoutScalingValue, '0'],
    marginTop: [20, globals.style.layoutScalingValue, 20],
}
export const adminCreateButtonStyle = {
    ...adminCardControlsButtonStyle,
    display: inlineFlex,
    alignSelf: flexStart,
    marginBottom: [20, .7, 20],
    marginLeft: 0,
    marginTop: 0
}
export const adminControlPanelStyle = {
    position: relative,
    display: flex,
    flexDirection: column,
    background: '#f8f8f8',
    border: `1px solid ${globals.colors.borderColor}`,
    height: [500, .7, 'auto'],
    padding: sv(20, globals.style.layoutScalingValue),
    mobile: {
        padding: 20
    }
}
export const adminControlPanelInnerStyle = {
    display: flex,
    flexDirection: column,
}
export const adminMenuStyle = {
    ...menuPanelStyle,
    list: {
        display: flex,
        flexDirection: column,
        margin: 0,
        padding: 0,
    },
    listItem: {
        position: relative,
        listStyleType: none,
        marginBottom: [10, .7, 10],
        //  width: '100%',
    },
    link: {
        textDecoration: none,
        color: globals.colors.linkColor,
        transition: 'background 500ms ease',
        hover: {
            background: globals.colors.orange,
            cursor: pointer
        }
    },
    subListWrapper: {
        borderTop: `2px solid ${globals.colors.salmon}`,
        width: '100%',
    },
    subList: {
        padding: 0,
        width: '100%',
        child: [
            {
                selector: '> li',
                margin: 0

            }
        ]
    }
}
export const adminOrderWrapperStyle = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: sv(30),
    mobile: {
        display: flex,
        flexDirection: column
    }
}