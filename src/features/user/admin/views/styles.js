import {colorPalette, globals}          from 'config/styles'
import {
    black,
    borderBox,
    center,
    column,
    flex,
    flexStart,
    grid,
    inlineFlex,
    none,
    pointer,
    row,
    sv,
    white,
    wrap
}                                       from 'utils/themer'
import {genericButtonStyle}             from '../../../../shared/Controls/styles'
import {dashboardContentContainerStyle} from '../../views/dashboard/styles'

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

export const userDashboardIconWrapperStyle = {
    display: flex,
    alignItems: center,
    marginBottom: [40, .7, 20],
    mobile: {
        flexDirection: column
    }
}

export const userDashboardIconTextStyle = {
    child: {
        selector: 'strong',
        color: colorPalette.forestGreen
    }
}

const userDashboardIconStyle = {
    display: flex,
    alignItems: center,
    justifyContent: center,
    height: [90, globals.style.layoutScalingValue, 90],
    width: [90, globals.style.layoutScalingValue, 90],
    minHeight: [90, globals.style.layoutScalingValue, 90],
    minWidth: [90, globals.style.layoutScalingValue, 90],
    borderRadius: [90, globals.style.layoutScalingValue, 90],
    marginRight: [40, globals.style.layoutScalingValue, 40],
    mobile: {
        marginBottom: 20
    },
    child: {
        selector: 'svg',
        size: [32, globals.style.layoutScalingValue, 32]
    }
}

export const userDashboardSafeIconStyle = {
    ...userDashboardIconStyle,
    backgroundColor: 'rgb(84 13 110 / 30%)'
}

export const userDashboardWelcomeIconStyle = {
    ...userDashboardIconStyle,
    backgroundColor: 'rgb(255 180 0 / 30%)'
}

export const userDashboardCelebratedIconStyle = {
    ...userDashboardIconStyle,
    backgroundColor: 'rgb(14 131 75 / 30%)'
}

export const userDashboardHowToStyle = {
    banner: {
        paddingTop: [30, .7, 30],
        paddingBottom: [30, .7, 30],
        marginTop: [85, .7, 85],
        marginBottom: [70, .7, 70],
        size: [22, .7, 22],
        lineHeight: [36, .7, 36],
        textAlign: center,
        weight: 300,
        color: white,
        backgroundColor: colorPalette.forestGreen
    },
    bannerInner: {
        maxWidth: [628, globals.style.layoutScalingValue, 'calc(100% - 50px)'],
        margin: '0 auto'
    }
}

export const userDashboardWelcomeStyle = {
    display: flex,
    alignItems: center,
    boxSizing: borderBox,
    mobile: {
        flexDirection: column
    },
    inner: {
        ...dashboardContentContainerStyle,
        marginBottom: 0,
        flexDirection: row,
        width: '100%',
        mobile: {
            flexDirection: column
        }
    }
    ,
    howToWrapper: {
        display: grid,
        gridTemplateColumns: `${sv(250, .4)} ${sv(250, .4)} ${sv(250, .4)}`,
        gridGap: sv(50, globals.style.layoutScalingValue),
        mobile: {
            display: flex,
            flexDirection: column
        }
    },
    text: {
        textAlign: center,
        padding: [28, .7, 28]
    },
    details: {
        display: flex,
        mobile: {
            flexDirection: column,
            marginBottom: 15
        },
        child: {
            selector: 'span',
            display: inlineFlex,
            whiteSpace: 'nowrap',
            marginRight: [5, .7, 5]
        }

    },
    howToHeader: {
        size: [28, .7, 22],
        background: '#540D6E',
        color: white,
        paddingTop: [10, .7, 10],
        paddingBottom: [10, .7, 10],
        marginBottom: [50, .7, 50],
        textAlign: center,
        width: '100%',
        mobile: {
            paddingLeft: 10,
            paddingRight: 10
        }
    },
    howToHeading: {
        size: [32, .7, 32],
        paddingTop: [20, .7, 20],
        paddingBottom: [20, .7, 20],
        textAlign: center
    },
    setup: {
        borderRadius: [10, .7, 10],
        backgroundColor: 'rgb(84 13 110 / 30%)'
    },
    search: {
        borderRadius: [10, .7, 10],
        backgroundColor: 'rgb(255 180 0 / 30%)'
    },
    review: {
        borderRadius: [10, .7, 10],
        backgroundColor: 'rgb(14 131 75 / 30%)'
    },
    info: {
        width: '100%',
        paddingLeft: [50, .7, '0'],
        boxSizing: borderBox,
        size: [15, .7, 15],
        child: {
            selector: 'span',
            weight: 700
        },
        mobile: {
            width: '100%',
            marginTop: 15
        }
    },
    heading: {
        size: [36, .7, 36],
        marginBottom: [10, .7, 10]
    },
    verified: {
        color: colorPalette.seaGreen,
        weight: 700
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
        flexDirection: column,
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
    subHeading: {
     //   width: '90%',
        width: '100%',
        margin: '0 auto',
        marginTop: [30, .7, 30],
        marginBottom: [40, .7, 20]
    },
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
        display: grid,
        gridTemplateColumns: '1fr 1fr',
        gridGap: sv(40, .7),
        marginTop: [20, .7, 20],
        padding: [20, .7, 20],
        border: `1px solid ${globals.colors.borderColor}`,
        borderRadius: [10, .7, 10],
        mobile: {
            display: flex,
            flexDirection: column
        }
    },
    info: {
        marginBottom: [10, .7, 10],
        marginTop: [10, .7, 10],
        child: {
            selector: 'span',
            color: colorPalette.seaGreen,
            weight: 700
        }
    },
    infoText: {
        display: flex,
        flexDirection: column,
        child: [
            {
                selector: 'span',
                wordBreak: 'break-all'
            },
            {
                selector: 'strong',
                size: [13, .7, 13],
                weight: 400
            }
        ]
    },
    updateLink: {
        ...genericButtonStyle,
        alignSelf: flexStart,
        marginTop: [10, .7, 10],
        size: [12, .7, 12],
        backgroundColor: white,
        paddingLeft: [15, globals.style.layoutScalingValue, 15],
        paddingRight: [15, globals.style.layoutScalingValue, 15],
        paddingTop: [7, globals.style.layoutScalingValue, 7],
        paddingBottom: [7, globals.style.layoutScalingValue, 7],
        color: black,
        hover: {
            cursor: pointer,
            backgroundColor: colorPalette.forestGreen,
            color: white
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
