import React from 'react'
import {useSelector} from 'react-redux'
import Div from '../Basic/Div'
import {pageFrameStyle} from '../themes/layout'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import MenuPanels from "./MenuPanel";
import TransitionOverlay from "./TransitionOverlay";

const PageFrame = () => {
    const {isAdmin} = useSelector(state => state.user)

    return (
        <Div theme={pageFrameStyle} className="page">
            {isAdmin && (
                <MenuPanels/>
            )}
            <Div id="header-left-margin" theme={pageFrameStyle.hlm}/>
            <Header theme={pageFrameStyle.header}/>
            <Div id="header-right-margin" theme={pageFrameStyle.hrm}/>
            <Div id="left-margin" theme={pageFrameStyle.lm}/>
            <Main theme={pageFrameStyle.main}/>
            <Div id="right-margin" theme={pageFrameStyle.rm}/>
            <Div id="footer-left-margin" theme={pageFrameStyle.flm}/>
            <Div id="footer-left-margin" theme={pageFrameStyle.frm}/>
            <Footer theme={pageFrameStyle.footer}/>
            <TransitionOverlay/>
        </Div>
    )
}

export default PageFrame
