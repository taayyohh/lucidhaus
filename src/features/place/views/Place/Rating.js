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

    const {averageSafe, averageCelebrated, averageWelcome, inclusiveScore} = place


    return (
        <Div theme={{display: 'flex'}}>
            <Div>Overall Rating: {inclusiveScore}</Div>
            <Div>Safe: {averageSafe}</Div>
            <Div>Celebrated: {averageCelebrated}</Div>
            <Div>Welcome: {averageWelcome}</Div>
            <Div># of Reviews: {reviews.length}</Div>
        </Div>
    )
}

export default Rating
