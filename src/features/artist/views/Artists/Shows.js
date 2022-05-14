import React, {useMemo}                   from 'react'
import Div                                from 'shared/Basic/Div'
import LinkSwitch                         from 'shared/Basic/LinkSwitch'
import ContentWrapper                                               from 'shared/Layout/ContentWrapper'
import {showLinkStyle, showsTicketHeadlineStyle, showsWrapperStyle} from '../styles'

const Shows = () => {

    const shows = useMemo(() => {
        return [
            {
                url: 'https://www.knittingfactory.com/event/tw-artistinfo/Really+From/',
                headline: 'BABYFANG Plays Knitting Factory',
                date: 'May 28',
                description: ''
            },
            {
                url: 'https://www.eventbrite.com/e/nnamdi-tickets-320792949347',
                headline: 'BABYFANG PLAYS Union Pool',
                date: 'June 1',
                description: ''
            }
        ]
    }, [])


    return (
        <ContentWrapper>
            <Div theme={showsTicketHeadlineStyle}>BUY TICKETS - COME SUPPORT</Div>
            <Div theme={showsWrapperStyle}>
                {shows && shows?.map((show) =>
                    <Div theme={showLinkStyle}>
                        <LinkSwitch url={show.url}>
                            <div>{show.headline}</div>
                            <div>{show.date}</div>
                        </LinkSwitch>
                    </Div>
                )}
            </Div>
        </ContentWrapper>
    )
}

export default Shows
