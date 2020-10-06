import {globals} from "../variables/styles";
import {borderBox} from "../utils/themer";

export const footerStyle = {
    borderTop: '1px solid #000',
    marginTop: 50,
    padding: 30,
    minHeight: [150, .7, 150],
    inner: {
        margin: '0 auto',
        width: [globals.style.siteInnerWidth, globals.style.layoutScalingValue, '100%'],
        paddingLeft: 25,
        paddingRight: 25,
        boxSizing: borderBox
    }
}