import {colorPalette, globals}                                                                    from 'config/styles'
import {black, center, column, flex, flexStart, grid, inlineFlex, none, pointer, sv, white, wrap} from 'utils/themer'
import {genericButtonStyle}                                                                       from '../../../../shared/Controls/styles'

export const userProfileFormStyle = {
    multiSelect: {
        display: flex
    }
}

export const multiSelectOptionListWrapperStyle = {
    display: flex,
    flexWrap: wrap,
    maxHeight: [300, .7, 300],
    overflow: 'scroll',
    scrollBar: {
        display: none
    },
    paddingTop: [20, .7, 20],
    option: {}
}

export const multiSelectOptionWrapperStyle = {
    display: flex
}

export const multiSelectOptionStyle = {
    background: '#e4e4e4',
    alignSelf: flexStart,
    padding: '5px 25px',
    borderRadius: 5,
    marginRight: [10, globals.style.layoutScalingValue, 10],
    marginBottom: [10, globals.style.layoutScalingValue, 10]
}

export const multiSelectSearchFieldStyle = {
    background: '#fff',
    border: `1px solid ${globals.colors.borderColor}`,
    height: [50, .7, 50],
    borderRadius: [10, .7, 10],
    width: [350, globals.style.layoutScalingValue, '100%'],
    size: [14, .7, 14],
    weight: 400,
    focus: {
        outline: none
    }
}

export const multiSelectWrapperStyle = {
    marginBottom: [50, .7, 50]
}

export const multiSelectInnerWrapperStyle = {
    border: `1px solid ${globals.colors.borderColor}`,
    padding: [40, globals.style.layoutScalingValue, 40],
    borderRadius: [10, .7, 10]
}

export const multiSelectHelperTextStyle = {
    size: [15, .7, 15],
    marginLeft: [5, .7, 5]
}


export const userContentWrapperStyle = {
    width: [1360, globals.style.layoutScalingValue, '100%']
}

export const userDashboardWelcomeStyle = {
    display: flex,
    alignItems: center,
    marginBottom: [70, .7, 70],
    howToWrapper: {
        display: grid,
        gridTemplateColumns: `${sv(250, .4)} ${sv(250, .4)} ${sv(250, .4)}`,
        gridGap: sv(50, globals.style.layoutScalingValue),
        mobile: {
            display: flex,
            flexDirection: column
        }
    },
    details: {
        display: flex,
        child: {
            selector: 'span',
            display: inlineFlex,
            whiteSpace: 'nowrap',
            marginRight: [5, .7, 5]
        }

    },
    howToHeading: {
        size: [32, .7, 32]
    },
    setup: {
        backgroundColor: 'rgb(84 13 110 / 30%)'
    },
    search: {
        backgroundColor: 'rgb(255 180 0 / 30%)'
    },
    review: {
        backgroundColor: 'rgb(14 131 75 / 30%)'
    },
    info: {
        marginLeft: [50, .7, 50],
        size: [15, .7, 15],
        child: {
            selector: 'span',
            weight: 700
        }
    },
    heading: {
        size: [36, .7, 36],
        marginBottom: [10, .7, 10]
    },
    unverified: {
        display: flex,
        color: colorPalette.brightRed,
        weight: 700,
        marginLeft: [5, .7, 5]
    },
    verifyEmail: {
        paddingTop: [10, .7, 10],
        paddingBottom: [10, .7, 10],
        paddingLeft: [15, .7, 15],
        paddingRight: [15, .7, 15],
        marginTop: [20, .7, 20],
        background: colorPalette.paleGreen,
        display: flex,
        alignSelf: flexStart,
        borderRadius: [5, .7, 5],
        color: white,
        hover: {
            cursor: pointer,
            backgroundColor: colorPalette.forestGreen,
            color: white
        }
    },
    verifyWrapper: {
        display: flex,
        flexDirection: column
    },
    tooltip: {
        width: [400, .7, 400],
        color: globals.colors.textColor,
        weight: 400,
        message: {
            top: [-10, .7, -10],
            backgroundColor: globals.colors.borderColor
        }
    }

}

export const submitFormWrapperStyle = {
    border: 0,
    paddingLeft: [100, globals.style.layoutScalingValue, 20],
    paddingRight: [100, globals.style.layoutScalingValue, 20],
    fieldset: {
        marginBottom: [20, .7, 20],
        lastOfType: {
            marginBottom: [70, .7, 50]
        }
    }
}

export const adminReviewWrapperStyle = {
    display: grid,
    gridTemplateColumns: '1fr 1fr',
    gridGap: sv(30, globals.style.layoutScalingValue),
    mobile: {
        display: flex,
        flexDirection: column
    }
}

export const adminReviewStyle = {
    paddingTop: [30, globals.style.layoutScalingValue, 30],
    paddingBottom: [30, globals.style.layoutScalingValue, 30],
    paddingLeft: [30, globals.style.layoutScalingValue, 30],
    paddingRight: [30, globals.style.layoutScalingValue, 30],
    border: `1px solid ${globals.colors.borderColor}`,
    borderRadius: [10, .7, 10],
    color: globals.colors.textColor,
    textDecoration: none,
    transition: 'background-color 250ms ease, border-color 250ms ease',
    background: white,
    name: {
        size: [24, .7, 24],
        lineHeight: [28, .7, 28]
    },
    date: {
        color: colorPalette.darkGray,
        size: [15, .7, 15]
    },
    top: {
        marginBottom: [15, .7, 15]
    },
    hover: {
        borderColor: black,
        color: black
    }
}

export const submitPlaceButtonStyle = {
    alignSelf: flexStart,
    backgroundColor: colorPalette.darkHoneyYellow,
    paddingLeft: [15, .7, 15],
    paddingRight: [15, .7, 15],
    paddingTop: [10, .7, 10],
    paddingBottom: [10, .7, 10],
    display: inlineFlex,
    flexDirection: 'column',
    borderRadius: [5, .7, 5],
    color: white,
    size: [15, .7, 15],
    weight: 600,
    border: `1px solid ${colorPalette.darkHoneyYellow}`,
    transition: 'background 200ms ease',
    hover: {
        cursor: pointer,
        backgroundColor: colorPalette.honeyYellow,
        border: `1px solid ${colorPalette.honeyYellow}`,

    }
}

export const myPlacesWrapperStyle = {
    display: grid,
    gridTemplateColumns: '1fr',
    gridGap: sv(20, globals.style.layoutScalingValue),
}

export const userAccountFormStyle = {
    maxWidth: [700, .7, '100%'],
    margin: '0 auto',
    padding: 0,
    border: 0,
    fieldset: {
        marginBottom: [15, .7, 15]
    }
}

export const userAccountStyle = {
    display: flex,
    flexDirection: column,
    marginTop: [50, .7, 50],
    paddingTop: [50, .7, 50],
    borderTop: `1px solid ${globals.colors.borderColor}`,
    heading: {
        size: [24, .7, 24],
        weight: 700,
        marginBottom: [10, .7, 10]
    },
    disclaimer: {
        size: [12, .7, 12],
        lineHeight: [20, .7, 20],
        marginTop: [20, .7, 20],
        weight: 300,
        child: [
            {
                selector: 'span',
                color: colorPalette.red
            }
        ]
    },
    infoWrapper: {
        marginTop: [20, .7, 20],
        padding: [20, .7, 20],
        border: `1px solid ${globals.colors.borderColor}`,
        borderRadius: [10, .7, 10]
    },
    info: {
        display: grid,
        gridTemplateColumns: '1fr 1fr',
        gridGap: sv(40, .7),
        marginBottom: [10, .7, 10],
        marginTop: [10, .7, 10],
        child: {
            selector: 'span',
            color: colorPalette.seaGreen,
            weight: 700
        }
    },
    updateLink: {
        textDecoration: 'underline',
        hover: {
            cursor: pointer,
            color: colorPalette.brightRed
        }
    }
}

export const closeAccountButtonStyle = {
    display: inlineFlex,
    border: `1px solid #dadce0`,
    background: colorPalette.brightRed,
    color: white,
    font: globals.fonts.sans,
    borderRadius: [5, .7, 5],
    alignSelf: flexStart,
    paddingTop: [10, .7, 10],
    paddingBottom: [10, .7, 10],
    paddingLeft: [20, globals.style.layoutScalingValue, 20],
    paddingRight: [20, globals.style.layoutScalingValue, 20],
    letterSpacing: [1, globals.style.layoutScalingValue, 1],
    cursor: pointer,
    marginTop: [30, .7, 50],
    size: [16, .7, 16],
    transition: 'background-color 150ms ease, border-color 150ms ease, color 150ms ease',
    mobile: {
        marginTop: 20
    },
    focus: {
        outline: none,
    },
    hover: {
        cursor: 'pointer',
        border: `1px solid #dadce0`,
        background: colorPalette.red,
        color: white,
    }
}

export const resetPasswordStyle = {
    paddingBottom: [50, .7, 50],
    paddingTop: [50, .7, 50],
    marginBottom: [50, .7, 50],
    marginTop: [50, .7, 50],
    borderBottom: `1px solid ${globals.colors.borderColor}`,
    borderTop: `1px solid ${globals.colors.borderColor}`,
    width: '100%',
    heading: {
        size: [28, .7, 24],
        weight: 700,
        marginBottom: [10, .7, 10]
    }
}

export const resetButtonStyle = {
    ...genericButtonStyle,
    display: inlineFlex,
}

export const resetContactInfoStyle = {}
