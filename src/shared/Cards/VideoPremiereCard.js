import {AnimatePresence} from 'framer-motion'
import React, {lazy, useState} from 'react'
import Div from 'shared/Basic/Div'
import MotionDiv from 'shared/Basic/MotionDiv'
import {fadeIn, fadeOut, nOpacity} from 'shared/Layout/styles/animations'
import {genericCardStyle} from './styles'
import ReactPlayer from "react-player";
import {globals} from "config/styles";
import {sv} from "utils/themer";
import {CDN} from "config";
import {useSelector} from "react-redux";
import {mobileFlag} from "../../features/site/slice";

//TODO:code split elsewhere where necessary, define fallback component
const S3Img = lazy(() => import('shared/Basic/S3Img'))

const VideoPremiereCard = ({photo, video, theme}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const isMobile = useSelector(mobileFlag)

    return (
        <AnimatePresence>
            <MotionDiv initial={nOpacity} animate={fadeIn} exit={fadeOut}>
                <Div
                    theme={{...genericCardStyle, ...theme}}
                    onClick={() => setIsPlaying(true)}
                >
                    {video && (
                        <ReactPlayer
                            url={video}
                            controls
                            height={
                                !isMobile
                                ? `calc(100vh - ${sv(globals.style.headerHeight)})`
                                : '200px'
                            }
                            width={'100%'}
                            light={`${CDN}${photo}`}
                            playing={isPlaying}
                            config={{
                                youtube: {
                                    playerVars: {
                                        modestbranding: true
                                    }
                                }
                            }}
                        />
                    )}
                </Div>
            </MotionDiv>
        </AnimatePresence>
    )
}


VideoPremiereCard.defaultProps = {
    theme: {}
}

export default VideoPremiereCard