import {colorPalette, globals} from 'config/styles'
import {CDN}                   from 'config/variables'
import {
    absolute,
    auto,
    center,
    column,
    flex,
    inlineFlex,
    none,
    pointer,
    relative,
    sv,
    uppercase,
    white
}                              from 'utils/themer'
import {placesSearchFormStyle} from '../../place/views/styles'

export const homeImageWrapperStyle = {
    display: flex,
    alignItems: center,
    justifyContent: center,
    height: '100vh',
    width: '100vw',
    background: '#000',
    mobile: {
        height: '50vh'
    }
}

export const homeImageStyle = {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    cursor: pointer,
    display: flex,
    alignItems: center,
    justifyContent: center,
    backgroundImage: `url(${CDN}assets/ij-home+2)`,
    opacity: .4
}

export const homeSearchWrapperStyle = {
    display: flex,
    flexDirection: column,
    position: absolute,
    marginTop: [-250, .7, -25],
    padding: [40, .7, 40],
    borderRadius: [10, .7, 10],
    maxWidth: [800, globals.style.layoutScalingValue, '100%'],
    width: [800, globals.style.layoutScalingValue, '100%'],
    textAlign: 'center',
    mobile: {
        width: '100%'
    }
}

export const homeSearchStyle = {
    padding: 30,
    borderRadius: 10,
    backgroundColor: colorPalette.seaGreen,
    form: {
        field: {
            position: absolute,
            left: 0,
            top: 0
        },
        button: {
            ...placesSearchFormStyle.button,
        }
    },
    mobile: {
        height: auto
    }
}

export const homeHeadlineStyle = {
    weight: 800,
    marginBottom: 20,
    lineHeight: [80, .7, 38],
    size: [62, globals.style.layoutScalingValue, 26],
    color: '#fff',
    mobile: {
        marginBottom: 15
    }
}

export const homeQuoteStyle = {
    display: none,
    position: relative,
    zIndex: 1,
    width: [1107, globals.style.layoutScalingValue, '100%'],
    height: [564, globals.style.layoutScalingValue, 250],
    marginTop: [-314, globals.style.layoutScalingValue, '0'],
    borderRadius: `${sv(10)} ${sv(10)} ${sv(10)} 0`,
    borderRadiusLeft: 0,
    paddingLeft: [90, globals.style.layoutScalingValue, 25],
    size: [54, globals.style.layoutScalingValue, 32],
    lineHeight: [110, globals.style.layoutScalingValue, 45],
    textTransform: uppercase,
    backgroundColor: colorPalette.forestGreen,
    // display: inlineFlex,
    alignItems: center,
    justifyContent: center,
    color: white,
    mobile: {
        borderRadius: 0
    },
    child: {
        selector: 'span',
        color: colorPalette.seaGreen
    }
}

export const homeSpacerStyle = {
    height: [180, .7, 50],
    width: '100%',
    backgroundColor: colorPalette.honeyYellow,
    zIndex: 1
}

export const homeSignupImageWrapperStyle = {
    display: flex,
    justifyContent: center,
    alignItems: center,
    minWidth: [1015, globals.style.layoutScalingValue, '100%'],
    height: [910, globals.style.layoutScalingValue, 350],
    backgroundColor: colorPalette.paleGreen,
    marginTop: [-235, .7, 50]
}

export const homeSignupImageStyle = {
    width: [908, globals.style.layoutScalingValue, 300],
    height: [800, globals.style.layoutScalingValue, 264],
    paddingTop: [40, .7, '0'],
    margin: 'auto',
}

export const homeSignupWrapperStyle = {
    display: flex,
    flexDirection: column,
    marginBottom: [100, .7, 100],
    mobile: {
        flexDirection: column
    }
}

export const homeSignupQuoteWrapperStyle = {
    display: flex,
    flexDirection: column,
    marginTop: [80, .7, '0'],
    borderRadius: [10, .7, 10],
    border: `1px solid ${globals.colors.borderColor}`,
    margin: '0 auto',
    mobile: {
        width: 'calc(100% - 50px)',
        marginTop: 50
    },
}

export const homeSignupQuoteStyle = {
    size: [28, globals.style.layoutScalingValue, 19],
    margin: '0 auto',
    textAlign: center,
    background: white,
    paddingLeft: [108, globals.style.layoutScalingValue, '0'],
    paddingRight: [108, globals.style.layoutScalingValue, '0'],
    paddingTop: [50, globals.style.layoutScalingValue, 50],
    paddingBottom: [50, globals.style.layoutScalingValue, 50],
    width: [1200, globals.style.layoutScalingValue, '100%'],
    // lineHeight: [55, globals.style.layoutScalingValue, 30],
    mobile: {
        paddingLeft: 50,
        paddingRight: 50
    },
    child: {
        selector: '> div',
        marginTop: [15, .7, 15]
    }
}

export const homeSignupButtonStyle = {
    width: auto,
    marginTop: [30, .7, 30],
    size: [16, .7, 16],
    paddingLeft: [20, globals.style.layoutScalingValue, 20],
    paddingRight: [20, globals.style.layoutScalingValue, 20],
    paddingTop: [15, globals.style.layoutScalingValue, 15],
    paddingBottom: [15, globals.style.layoutScalingValue, 15],
    backgroundColor: colorPalette.seaGreen,
    display: inlineFlex,
    alignSelf: center,
    alignItems: center,
    justifyContent: center,
    border: `1px solid ${colorPalette.seaGreen}`,
    borderRadius: [5, .7, 5],
    textDecoration: none,
    color: white,
    hover: {
        backgroundColor: colorPalette.forestGreen,
        border: `1px solid ${colorPalette.forestGreen}`,
        color: white
    }
}

export const homeContentWrapperStyle = {
    width: '100%',
    margin: 0
}

export const recentlyViewedPlaceCardStyle = {
    border: `1px solid ${globals.colors.borderColor}`,
    textDecoration: none,
    mobile: {
        textDecoration: none
    },
    hover: {
        color: colorPalette.seaGreen
    },
    locationWrapper: {
        display: none
    }
}

export const recentlyViewedPlaceCardWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: `${sv(460, globals.style.layoutScalingValue)} ${sv(460, globals.style.layoutScalingValue)} ${sv(460, globals.style.layoutScalingValue)}`,
    gridGap: sv(30, globals.style.layoutScalingValue),
    mobile: {
        display: flex,
        flexDirection: column
    }

}

export const recentlyViewedWrapperStyle = {
    maxWidth: [1420, globals.style.layoutScalingValue, '100%'],
    margin: '0 auto',
    marginTop: [50, .7, 50],
    mobile: {
        width: 'calc(100% - 50px)',
        margin: '0 auto',
        marginTop: 50
    }
}

export const recentlyViewedPlacesHeadingStyle = {
    size: [24, .7, 24],
    weight: 500,
    borderBottom: `1px solid ${globals.colors.borderColor}`,
    marginBottom: [50, .7, 50],
    paddingBottom: [20, .7, 20]
}

export const faqStyle = {
    padding: [50, globals.style.layoutScalingValue, 25],
    borderRadius: [10, .7, 10],
    borderTop: `1px solid ${globals.colors.borderColor}`,
    question: {
        display: flex,
        alignItems: center,
        position: relative,
        width: '100%',
        backgroundColor: globals.colors.borderColor,
        borderRadius: [5, .7, 5],
        paddingTop: [20, .7, 20],
        paddingBottom: [20, .7, 20],
        paddingLeft: [15, .7, 15],
        paddingRight: [50, .7, 50],
        marginBottom: [10, .7, 10],
        size: [20, .7, 18],
        hover: {
            cursor: pointer,
            backgroundColor: colorPalette.ijGray
        }
    },
    icon: {
        position: absolute,
        right: [20, globals.style.layoutScalingValue, 20]
    },
    answer: {
        padding: [50, globals.style.layoutScalingValue, 30],
        lineHeight: [28, .7, 24],
        backgroundColor: colorPalette.ijGray,
        borderRadius: [5, .7, 5]
    }
}

export const aboutPageStyle = {
    width: [1040, globals.style.layoutScalingValue, '100%'],
    marginTop: [50, .7, '0'],
    heading: {
        size: [36, .7, 32],
        margin: 0,
        marginBottom: [20, .7, '0'],
        padding: 0,
        color: colorPalette.seaGreen,
        mobile: {
            marginBottom: 20
        }
    },
    image: {
        float: 'right',
        width: [500, globals.style.layoutScalingValue, '100%'],
        paddingLeft: [50, .7, 20],
        paddingBottom: [20, .7, 20],
        height: auto
    },
    sectionHeading: {
        dispaly: flex,
        textAlign: center,
        marginBottom: [40, .7, '0']
    },
    sectionInner: {
        marginTop: [40, .7, 40]
    },
    section: {
        paddingTop: [20, .7, 40],
        marginTop: [40, .7, 40],
        borderTop: `1px solid ${globals.colors.borderColor}`,
        firstOfType: {
            border: 0,
            marginTop: 0,
            mobile: {
                marginTop: 0,
                paddingTop: 0
            }
        },
        child: [
            {
                selector: 'h2',
                marginBottom: [10, .7, 10],
                size: [26, .7, 26]
            },
            {
                selector: 'a',
                color: colorPalette.seaGreen,
                hover: {
                    color: colorPalette.paleGreen
                }
            },
            {
                selector: 'p',
                size: [18, .7, 18],
                lineHeight: [32, .7, 32],
            }
        ]
    }
}
