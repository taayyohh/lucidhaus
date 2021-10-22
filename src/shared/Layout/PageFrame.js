import DocumentHead     from 'features/site/views/DocumentHead'
import StaticHead       from 'features/site/views/StaticHead'
import React            from 'react'
import {useSelector}    from 'react-redux'
import Div              from 'shared/Basic/Div'
import Notification     from 'shared/Layout/Notification'
import Overlay          from 'shared/Layout/Overlay'
import Player           from 'shared/Player'
import {mobileFlag}     from '../../features/site/slice'
import Footer           from './Footer'
import Header           from './Header'
import Main             from './Main'
import Search           from './Search'
import {pageFrameStyle} from './styles'

const PageFrame = () => {
    const {slug, url} = useSelector(state => state.site)
    const isAdmin = url.includes('admin') || url.includes('dashboard')
    const isSign = url.includes('signup') || url.includes('signin') || url.includes('recover')
    const isHome = url.length === 0
    const isMobile = useSelector(mobileFlag)
    const isPlaceDetail = url.length === 2 && url.includes('places')
    const isSearchResults = url.length === 3 && url.includes('search')


    return (
        <Div theme={pageFrameStyle}>
            <StaticHead/>
            <DocumentHead/>
            <Div id="header-left-margin" theme={pageFrameStyle.hlm}/>
            <Header theme={pageFrameStyle.header}/>
            {(!isAdmin && !isSign && !isHome && !isMobile && !isPlaceDetail) && (
                <Search theme={pageFrameStyle.search}/>
            )}
            <Div id="header-right-margin" theme={pageFrameStyle.hrm}/>
            <Div id="left-margin" theme={pageFrameStyle.lm}/>
            <Main theme={pageFrameStyle.main({slug, isSearchResults})}/>
            <Div id="right-margin" theme={pageFrameStyle.rm}/>
            <Div id="footer-left-margin" theme={pageFrameStyle.flm}/>
            <Footer theme={pageFrameStyle.footer({slug, isSearchResults})}/>
            <Div id="footer-right-margin" theme={pageFrameStyle.frm}/>
            <Overlay/>
            <Notification/>
            <Div id="modal" theme={pageFrameStyle.modal}/>
            <Player/>
        </Div>
    )
}


export default PageFrame
