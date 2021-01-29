import {CDN}           from 'config'
import {
    list,
    pause,
    play,
    stepBackward,
    stepForward,
    volumeMute,
    windowMinimize
}                      from 'config/icons/fa'
import {globals}       from 'config/styles'
import {mobileFlag}    from 'features/site/slice'
import React, {
    useContext,
    useEffect,
    useRef,
    useState
}                      from 'react'
import ReactPlayer     from 'react-player'
import {useSelector}   from 'react-redux'
import Div             from 'shared/Basic/Div'
import Icon            from 'shared/Basic/Icon'
import LinkSwitch      from 'shared/Basic/LinkSwitch'
import MotionDiv       from 'shared/Basic/MotionDiv'
import {playerContext} from 'shared/Containers/PlayerController'
import {
    playerControlsWrapperStyle,
    playerIconStyle,
    playerInnerStyle,
    playerMinimizeIconStyle,
    playerMuteStyle,
    playerQueueArtistStyle,
    playerQueueInnerStyle,
    playerQueueStyle,
    playerQueueTitleStyle,
    playerQueueTrackInnerStyle,
    playerQueueTrackStyle,
    playerSongsWrapperStyle,
    playerStyle
}                      from 'shared/Player/styles'
import {
    auto,
    sv
}                      from 'utils/themer'

const Player = () => {
    const isMobile = useSelector(mobileFlag)
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
    const [isQueueOpen, setIsQueueOpen] = useState(true)
    const isLastItem = (currentMediaIndex + 1) === playlistLength
    const isFirstItem = (currentMediaIndex) === 0

    const queueVariants = {
        open: {
            width: !isMobile ? 300 : 'calc(100% - 50px)',
            height: 'auto',
            borderRadius: 10
        },
        closed: {
            width: 50,
            height: 50,
            paddingTop: 16,
            borderRadius: 50
        }
    }

    const queueListVariants = {
        open: {
            height: auto,
            transition: {
                ease: 'easeIn',
                duration: 1,
                delay: .5
            }
        },
        closed: {
            height: 0
        }
    }

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
                    <MotionDiv
                        theme={playerQueueStyle}
                        initial={false}
                        animate={isQueueOpen ? 'open' : 'closed'}
                        variants={queueVariants}
                    >
                        <Div theme={playerQueueInnerStyle}>
                            <Icon
                                icon={isQueueOpen ? windowMinimize : list}
                                theme={playerMinimizeIconStyle(isQueueOpen)}
                                onClick={() => setIsQueueOpen(flag => !flag)}
                            />
                            <MotionDiv
                                theme={playerSongsWrapperStyle}
                                variants={queueListVariants}
                                initial={false}
                                animate={isQueueOpen ? 'open' : 'closed'}
                            >
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
                                                        url={`/music/${m.albumSlug}`}
                                                        theme={playerQueueTitleStyle}
                                                    >
                                                        {m.title}
                                                    </LinkSwitch>
                                                </Div>
                                            </Div>
                                        )
                                    }
                                )}
                            </MotionDiv>
                        </Div>
                    </MotionDiv>
                    <Div theme={playerStyle}>
                        <Div theme={playerInnerStyle}>
                            <Div theme={playerControlsWrapperStyle}>
                                <Icon
                                    onClick={!isFirstItem ? () => handleBackward() : null}
                                    icon={stepBackward}
                                    theme={playerIconStyle(isFirstItem)}
                                />

                                <Icon
                                    onClick={() => !playing ? handlePlay() : handlePause()}
                                    icon={!playing ? play : pause}
                                    theme={playerIconStyle()}
                                />
                                <Icon
                                    onClick={!isLastItem ? () => handleForward() : null}
                                    icon={stepForward}
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