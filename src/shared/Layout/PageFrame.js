import DocumentHead     from 'features/site/DocumentHead'
import StaticHead       from 'features/site/StaticHead'
import React            from 'react'
import Div              from 'shared/Basic/Div'
import Notification     from 'shared/Layout/Notification'
import Overlay          from 'shared/Layout/Overlay'
import Player           from 'shared/Player'
import Footer           from './Footer'
import Header           from './Header'
import Main             from './Main'
import {pageFrameStyle} from './styles'

const PageFrame = () =>
    <Div theme={pageFrameStyle}>
        <StaticHead/>
        <DocumentHead/>
        <Div id="header-left-margin" theme={pageFrameStyle.hlm}/>
        <Header theme={pageFrameStyle.header}/>
        <Div id="header-right-margin" theme={pageFrameStyle.hrm}/>
        <Div id="left-margin" theme={pageFrameStyle.lm}/>
        <Main theme={pageFrameStyle.main}/>
        <Div id="right-margin" theme={pageFrameStyle.rm}/>
        <Div id="footer-left-margin" theme={pageFrameStyle.flm}/>
        <Footer theme={pageFrameStyle.footer}/>
        <Div id="footer-right-margin" theme={pageFrameStyle.frm}/>
        <Overlay/>
        <Notification/>
        <Div id="modal" theme={pageFrameStyle.modal}/>
        <Player/>
    </Div>

export default PageFrame
