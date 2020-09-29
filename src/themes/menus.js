import {absolute, borderBox, center, fixed, flex, none, pointer, white, column} from "../utils/themer";
import {globals} from "../variables/styles";

export const headerMenuPanelWrapperStyle = {
    position: absolute,
    zIndex: 25
}


export const headerMenuPanelStyle = {
    display: flex,
    position: fixed,
    flexDirection: column,
    font: globals.fonts.header,
    height: '100vh',
    width: [940, .5],
    maxWidth: [940, .5],
    top: 0,
    right: 0,
    paddingLeft: [120, globals.style.layoutScalingValue],
    paddingRight: [60, globals.style.layoutScalingValue],
    backgroundColor: white,
    borderLeft: `1px solid #000`,
    boxSizing: borderBox,
    zIndex: 22,
    mobile: {
        display: none
    },
    heading: {
        font: globals.fonts.header,
        size: [72, .5],
        marginTop: 0,
        marginBottom: [45, .7],
        lineHeight: 66,
        letterSpacing: -1,
        weight: 800,
      //  color: globals.colors.headingColor
    },
    closeButton: {
        position: absolute,
        display: flex,
        alignItems: center,
        justifyContent: center,
        top: 0,
        right: 0,
        height: [80, .7],
        width: [80, .7],
        backgroundColor: globals.colors.menuPanelCloseButtonBackgroundColor,
      //  backgroundColor: colorPalette.offBlue,
        transition: 'background-color 250ms ease',
        hover: {
           // backgroundColor: colorPalette.lightBlue,
            cursor: pointer
        }
    },
    closeButtonIcon: {
        color: white,
        size: 30
    }
}
