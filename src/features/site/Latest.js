import React         from 'react'
import Div           from 'shared/Basic/Div'
import LinkSwitch    from '../../shared/Basic/LinkSwitch'
import {latestStyle} from './style'

const Latest = () => {
    const latest = [
        {
            url: 'https://nappynina.bandcamp.com/album/double-down',
            children: 'Double Down Vinyl On Sale Now!',
            artist: 'Nappy Nina'
        },
        {
            url: 'https://dice.fm/partner/elsewhere-llc/event/5v8vd-dreamcastmoe-stas-thee-boss-ol-17th-dec-elsewhere-zone-one-new-york-tickets?utm_source=Elsewhere&utm_medium=Twitter&utm_campaign=dreamcastmoe',
            children: 'Live @ Elsewhere 12/17',
            artist: 'Stas THEE Boss'
        },
        {
            url: 'https://www.ticketweb.com/event/really-from-babyfang-peaceful-faces-knitting-factory-brooklyn-tickets/11392395?pl=bkf&edpPlParam=%3Fpl%3Dbkf',
            children: 'Live @ Knitting Factory 1/16',
            artist: 'babyfang'
        }
    ]
    return (
        <Div theme={latestStyle}>
            {latest?.map((l) => (
                <Div theme={latestStyle.item}>
                    <Div theme={latestStyle.artist}>{l.artist}</Div>
                    <LinkSwitch
                        key={l.url}
                        url={l.url}
                        children={l.children}
                    />
                </Div>

            ))}

        </Div>
    )
}


export default Latest
