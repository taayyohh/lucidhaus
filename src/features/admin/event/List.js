import AdminCreateButton   from 'features/admin/AdminCreateButton'
import {
    adminEventCardStyle,
    adminEventCardWrapperStyle,
    adminEventsInnerWrapperStyle,
    searchWrapperStyle
}                          from 'features/admin/styles'
import PropTypes           from 'prop-types'
import React, {useContext} from 'react'
import {
    connectHits,
    InstantSearch,
    SearchBox
}                          from 'react-instantsearch-dom'
import Div                 from 'shared/Basic/Div'
import GenericCard         from 'shared/Cards/GenericCard'
import {searchContext}     from 'shared/Containers/SearchController'

const List = ({events}) => {
    const {searchClient} = useContext(searchContext)

    const Hits = connectHits(
        ({hits}) =>
            <>
                {hits && hits.map((event) =>
                    <Div
                        key={event.slug}
                        theme={adminEventCardWrapperStyle}
                    >
                        <GenericCard
                            slug={`events/update/${event.slug}`}
                            name={event.name}
                            photo={event.flyer}
                            theme={adminEventCardStyle}
                        />
                    </Div>
                )}
            </>
    )

    return (
        <InstantSearch
            indexName="Events"
            searchClient={searchClient}
            stalledSearchDelay={500}
        >
            <Div theme={searchWrapperStyle}>
                <SearchBox
                    searchAsYouType={false}
                    autoFocus
                />
                <AdminCreateButton url={'/create/event'}/>
            </Div>
            <Div theme={adminEventsInnerWrapperStyle}>
                <Hits/>
            </Div>
        </InstantSearch>
    )
}


List.propTypes = {
    events: PropTypes.array.isRequired
}

export default List
