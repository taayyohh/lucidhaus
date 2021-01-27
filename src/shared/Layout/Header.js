import logo                from 'assets/logo.svg'
import {mobileFlag}        from 'features/site/slice'
import PropTypes           from 'prop-types'
import React, {useContext} from 'react'
import {useSelector}       from 'react-redux'
import Div                 from 'shared/Basic/Div'
import Img                 from 'shared/Basic/Img'
import LinkSwitch          from 'shared/Basic/LinkSwitch'
import S3Img               from 'shared/Basic/S3Img'
import {playerContext}     from 'shared/Containers/PlayerController'
import HeaderMenu          from 'shared/Menus/HeaderMenu'
import {
    headerInnerStyle,
    headerLogoLinkStyle,
    headerLogoWrapperStyle,
    headerNowPlayingCoverArtStyle,
    headerNowPlayingInfoStyle,
    headerNowPlayingStyle,
    headerStyle
}                          from './styles/header'

const Header = ({theme}) => {
    const {currentMedia, currentMediaIndex} = useContext(playerContext)
    const nowPlayingCoverArt = currentMedia[currentMediaIndex]?.coverArt
    const nowPlayingAlbumSlug = currentMedia[currentMediaIndex]?.albumSlug
    const nowPlayingAlbumTitle = currentMedia[currentMediaIndex]?.title
    const nowPlayingArtist = currentMedia[currentMediaIndex]?.primaryArtist
    const nowPlayingArtistSlug = currentMedia[currentMediaIndex]?.primaryArtistSlug
    const isMobile = useSelector(mobileFlag)

    return (
        <Div as="header" theme={{...headerStyle, ...theme}}>
            <Div theme={headerInnerStyle}>
                <Div theme={headerNowPlayingStyle}>
                    <Div theme={headerLogoWrapperStyle}>
                        <LinkSwitch url="/" theme={headerLogoLinkStyle}>
                            <Img src={logo}/>
                        </LinkSwitch>
                    </Div>
                    {!isMobile && !!nowPlayingArtist && (
                        <>
                            <Div theme={headerNowPlayingCoverArtStyle}>
                                <S3Img url={nowPlayingCoverArt}/>
                            </Div>
                            <Div theme={headerNowPlayingInfoStyle}>
                                <LinkSwitch url={`/music/${nowPlayingAlbumSlug}`}>{nowPlayingAlbumTitle}</LinkSwitch>
                                <LinkSwitch url={`/artists/${nowPlayingArtistSlug}`}>{nowPlayingArtist}</LinkSwitch>
                            </Div>
                        </>
                    )}
                </Div>
                <HeaderMenu/>
            </Div>
        </Div>
    )
}

Header.defaultProps = {
    theme: {},
}

Header.propTypes = {
    theme: PropTypes.object,
}

export default Header