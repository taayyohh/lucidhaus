import React, {createContext, useState} from 'react'

export const playerContext = createContext(null)

const PlayerController = ({children}) => {
    const [currentMedia, setCurrentMedia] = useState([])
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
    const [playing, setPlaying] = useState(false)
    const [volume, setVolume] = useState(0.8)
    const [muted, setMuted] = useState(false)
    const [loop, setLoop] = useState(false)

    return (
        <playerContext.Provider value={{
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
        }}>
            {children}
        </playerContext.Provider>
    )
}

export default PlayerController
