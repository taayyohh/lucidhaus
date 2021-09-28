import React, {useEffect, useState} from 'react'
import {useSelector}                from 'react-redux'
import Div           from 'shared/Basic/Div'

const Rating = ({}) => {
    const {
        place,
        boonePlace,
        createdFromBoone,
        error,
        reviews,
        bathrooms,
        placeCategory,
        communitiesServed,
        foodOptions,
        languageSpoken
    } = useSelector(state => state.place)

    const {averageSafe, averageCelebrated, averageWelcome} = place

    // const [totalReviewCount, setTotalReviewCount] = useState(0)
    // const [totalCelebratedScore, setTotalCelebratedScore] = useState(0)
    // const [totalSafeScore, setTotalSafeScore] = useState(0)
    // const [totalWelcomeScore, setTotalWelcomeScore] = useState(0)
    //
    // useEffect(() => {
    //     console.log('reveiws', reviews)
    //
    //     for(const review of reviews) {
    //         setTotalSafeScore(totalSafeScore + review.safe[1])
    //         setTotalCelebratedScore(totalCelebratedScore + review.celebrated[1])
    //         setTotalWelcomeScore(totalWelcomeScore + review.welcome[1])
    //     }
    //
    //     setTotalSafeScore(totalSafeScore / reviews.length)
    //     setTotalCelebratedScore(totalCelebratedScore / reviews.length)
    //     setTotalWelcomeScore(totalWelcomeScore / reviews.length)
    //
    //
    // }, [reviews])
    //

    return (
        <Div theme={{display: 'flex'}}>
            <Div>Overall Rating: {Math.round((averageSafe + averageCelebrated + averageWelcome) / 3)}</Div>
            <Div>Safe: {averageSafe}</Div>
            <Div>Celebrated: {averageCelebrated}</Div>
            <Div>Welcome: {averageWelcome}</Div>
            <Div># of Reviews: {reviews.length}</Div>
        </Div>
    )
}

export default Rating
