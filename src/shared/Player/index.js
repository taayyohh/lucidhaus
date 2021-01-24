import {CDN}           from 'config'
import {
    backward,
    forward,
    pause,
    play,
    volumeMute
}                      from 'config/icons/fa'
import React, {
    useContext,
    useEffect,
    useRef,
    useState
}                      from 'react'
import ReactPlayer     from 'react-player'
import Div             from 'shared/Basic/Div'
import Icon            from 'shared/Basic/Icon'
import LinkSwitch      from 'shared/Basic/LinkSwitch'
import {playerContext} from 'shared/Containers/PlayerController'
import {
    playerControlsWrapperStyle,
    playerIconStyle,
    playerInnerStyle,
    playerMuteStyle,
    playerQueueArtistStyle,
    playerQueueStyle,
    playerQueueTitleStyle,
    playerQueueTrackInnerStyle,
    playerQueueTrackStyle,
    playerStyle
}                      from 'shared/Player/styles'

const Player = () => {
    const {
        currentMedia,
        setCurrentMedia,
        currentMediaIndex,
        setCurrentMediaIndex,
        playing,
        setPlaying,
        volume,
        setVolume,
        muted,
        setMuted,
        loop,
        setLoop
    } = useContext(playerContext)
    const ref = useRef()
    const [playlistLength, setPlaylistLength] = useState(currentMedia?.length)
    const isLastItem = (currentMediaIndex + 1) === playlistLength
    const isFirstItem = (currentMediaIndex) === 0

    useEffect(() => {
        setPlaylistLength(currentMedia?.length)
    }, [currentMedia])


    const handlePlay = () =>
        setPlaying(true)


    const handlePause = () =>
        setPlaying(false)

    const handleMute = () =>
        setMuted(flag => !flag)


    const handleBuffer = () => {

    }

    const handleEnded = () => {
        if (!isLastItem) {
            setCurrentMediaIndex(currentMediaIndex + 1)
            setPlaying(true)
        } else {
            setCurrentMediaIndex(0)
        }
    }

    const handleForward = () => {
        setCurrentMediaIndex(currentMediaIndex + 1)
        setPlaying(true)
    }

    const handleBackward = () => {
        setCurrentMediaIndex(currentMediaIndex - 1)
        setPlaying(true)
    }

    const handleDuration = () => {

    }

    const handleReady = () => {

    }

    const handleStart = () => {

    }


    return (
        <>
            {currentMedia.length > 0 && (
                <>
                    <Div theme={playerQueueStyle}>
                        {currentMedia && currentMedia.map((m, i) => {
                                const currentAudio = currentMedia[currentMediaIndex]?.audio
                                const isActive = m.audio === currentAudio && currentMediaIndex === i

                                return (
                                    <Div key={i} theme={playerQueueTrackStyle}>
                                        <Div theme={playerQueueTrackInnerStyle(isActive)}>
                                            <LinkSwitch
                                                url={`/artists/${m.primaryArtistSlug}`}
                                                theme={playerQueueArtistStyle}
                                            >
                                                {m.primaryArtist}
                                            </LinkSwitch>
                                            <LinkSwitch
                                                url={`/albums/${m.albumSlug}`}
                                                theme={playerQueueTitleStyle}
                                            >
                                                {m.title}
                                            </LinkSwitch>
                                        </Div>
                                    </Div>
                                )
                            }
                        )}
                    </Div>
                    <Div theme={playerStyle}>
                        <Div theme={playerInnerStyle}>
                            <Div theme={playerControlsWrapperStyle}>
                                <Icon
                                    onClick={!isFirstItem ? () => handleBackward() : null}
                                    icon={backward}
                                    theme={playerIconStyle(isFirstItem)}
                                />

                                <Icon
                                    onClick={() => !playing ? handlePlay() : handlePause()}
                                    icon={!playing ? play : pause}
                                    theme={playerIconStyle()}
                                />
                                <Icon
                                    onClick={!isLastItem ? () => handleForward() : null}
                                    icon={forward}
                                    theme={playerIconStyle(isLastItem)}
                                />
                                <Icon
                                    icon={volumeMute}
                                    onClick={() => handleMute()}
                                    theme={playerMuteStyle(muted)}
                                />
                            </Div>
                        </Div>
                        <ReactPlayer
                            ref={ref}
                            url={currentMedia[0] instanceof String ? currentMedia[0] : CDN + currentMedia[currentMediaIndex]?.audio}
                            playing={playing}
                            volume={volume}
                            muted={muted}
                            loop={loop}
                            onReady={handleReady}
                            onStart={handleStart}
                            onPlay={handlePlay}
                            onPause={handlePause}
                            onEnded={handleEnded}
                            onBuffer={handleBuffer}
                            onDuration={handleDuration}
                            config={{
                                file: {
                                    forceAudio: true
                                }
                            }}
                        />
                    </Div>
                </>
            )}
        </>
    )
}

export default Player