import React, {useEffect} from 'react'
import {useDispatch}      from 'react-redux'
import Div                from '../Basic/Div'
import {pageFrameStyle}   from '../themes/layout'
import Footer             from './Footer'
import Header             from './Header'
import Main               from './Main'

const PageFrame = () => {
    const dispatch = useDispatch()

    const initPageLoad = () => {
        dispatch({
            type: 'user/isAuthenticated',
        })
    }

    useEffect(() => {
        initPageLoad()

        // eslint-disable-next-line consistent-return
    }, [])

    return (
        <Div theme={pageFrameStyle} className="page">
            <Div id="header-left-margin" theme={pageFrameStyle.hlm}/>
            <Header theme={pageFrameStyle.header}/>
            <Div id="header-right-margin" theme={pageFrameStyle.hrm}/>
            <Div id="left-margin" theme={pageFrameStyle.lm}/>
            <Main theme={pageFrameStyle.main}/>
            <Div id="right-margin" theme={pageFrameStyle.rm}/>
            <Div id="footer-left-margin" theme={pageFrameStyle.flm}/>
            <Div id="footer-left-margin" theme={pageFrameStyle.frm}/>
            <Footer theme={pageFrameStyle.footer}/>
        </Div>
    )
}

export default PageFrame
