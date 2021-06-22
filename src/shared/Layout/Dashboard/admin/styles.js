import {colorPalette, globals} from 'config/styles'
import {
    deletePromptButtonStyle,
    genericButtonStyle
}                              from 'shared/Controls/styles'
import {defaultInputStyle}     from 'shared/Fields/styles'
import {menuPanelStyle}        from 'shared/Menus/styles'
import {
    absolute,
    auto,
    black,
    center,
    column,
    flex,
    flexEnd,
    none,
    pointer,
    relative,
    row,
    sv,
    transparent,
    white
}                              from 'utils/themer'

export const addTrackButtonStyle = {
    ...genericButtonStyle,
    display: flex,
    alignItems: center,
    alignSelf: center,
    paddingLeft: [35, .7, 35],
    paddingRight: [35, .7, 35],
    size: [22, .7, 22],
    maxWidth: [200, globals.style.layoutScalingValue, 200],
    justifyContent: center,
    background: transparent,
    color: black,
    border: `1px solid #000`,
    hover: {
        backgroundColor: transparent,
        border: `1px solid ${colorPalette.honeyYellow}`
    }

}

export const adminPostsInnerWrapperStyle = {
    flexDirection: 'column-reverse',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap: sv(30),
    mobile: {
        display: flex
    }
}
export const adminPostCardWrapperStyle = {}
export const adminPostCardStyle = {
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

export const adminPlacesInnerWrapperStyle = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap: sv(30),
    mobile: {
        display: flex,
        flexDirection: column
    }
}
export const adminPlaceCardWrapperStyle = {}
export const adminPlaceCardStyle = {
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

export const adminCollaboratorsInnerWrapperStyle = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap: sv(30),
    mobile: {
        display: flex
    }
}
export const adminCollaboratorCardWrapperStyle = {}
export const adminCollaboratorCardStyle = {
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


export const adminCardControlsButtonStyle = {
    ...deletePromptButtonStyle,
    marginLeft: [10, globals.style.layoutScalingValue, '0'],
    marginTop: [20, globals.style.layoutScalingValue, 20],
}
export const adminCreateButtonStyle = {
    ...adminCardControlsButtonStyle,
    display: flex,
    alignItems: center,
    justifyContent: center,
    marginLeft: [20, .7, 20],
    height: [50, .7, 50],
    size: [22, .7, 22],
    padding: [20, .7, 20],
    marginTop: 0,
    hover: {
        backgroundColor: colorPalette.honeyYellow,
        color: white
    },
    child: {
        selector: '> svg',
        position: relative,
        top: [-1, .7, -1],
        marginRight: [10, .7, 10],
        marginLeft: [10, .7, 10]
    }
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
    gridTemplateColumns: '1fr 1fr',
    gridGap: sv(30),
    mobile: {
        display: flex,
        flexDirection: column
    }
}
export const adminFormWrapperStyle = {
    width: '100%',
    paddingLeft: [100, globals.style.layoutScalingValue, 25],
    paddingRight: [100, globals.style.layoutScalingValue, 25]
}

export const adminFormSongWrapperStyle = {
    child: [
        {
            selector: '> form',
            paddingLeft: 0,
            paddingRight: 0
        }
    ]


}

export const adminTaxonomyStyle = isActive => {
    return {
        size: [18, .7, 18],
        color: !isActive ? black : colorPalette.honeyYellow,
        hover: {
            cursor: pointer,
            color: colorPalette.honeyYellow
        }
    }
}

export const orderStatusFilterStyle = isActive => {
    return {
        position: relative,
        paddingTop: [5, .7, 5],
        paddingBottom: [5, .7, 5],
        marginRight: [30, .7, 30],
        size: [16, .7, 17],
        color: isActive ? colorPalette.honeyYellow : black,
        hover: {
            cursor: pointer
        }
    }

}
export const orderStatusFilterWrapperStyle = {
    display: flex,
    marginBottom: [50, .7, 50]
}
export const orderStatusActiveIndicatorStyle = {
    position: absolute,
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: colorPalette.honeyYellow,
    height: [3, .7, 3]
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

