import React, {createContext} from 'react'

export const TransitionAnimations = createContext({})

const TransitionController = props => {
    return (
        <TransitionAnimations.Provider {...props}/>
    )
}


export default TransitionController