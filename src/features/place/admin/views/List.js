import PropTypes                   from 'prop-types'
import React, {useContext, useRef} from 'react'
import {
    connectInfiniteHits,
    InstantSearch,
    SearchBox
}                                  from 'react-instantsearch-dom'
import Div                         from 'shared/Basic/Div'
import GenericCard                 from 'shared/Cards/GenericCard'
import {searchContext}             from 'shared/Containers/SearchController'
import AdminCreateButton           from 'shared/Layout/Dashboard/admin/AdminCreateButton'
import {
    adminPlaceCardStyle,
    adminPlaceCardWrapperStyle,
    adminPlacesInnerWrapperStyle,
    searchWrapperStyle
}                                  from 'shared/Layout/Dashboard/admin/styles'

const List = () => {
    const {searchClient} = useContext(searchContext)
    const sentinel = useRef()
    //  console.log('ref', ref)

    // const onSentinelIntersection = entries => {
    //
    //     // const { hasMore, refineNext } = this.props;
    //     //
    //     // console.log('has', hasMore)
    //
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             // In that case we can refine
    //         }
    //     })
    // }
    //
    // useEffect(() => {
    //     const observer = new IntersectionObserver(onSentinelIntersection);
    //
    //     observer.observe(ref);
    //     return () => {
    //         observer.disconnect()
    //     }
    //
    // }, [])

    const Hits = connectInfiniteHits((renderArgs, isFirstRender) => {
        const {hits, hasMore, refineNext} = renderArgs
        //  const { container } = widgetParams

        if (!!sentinel.current) {

            const observer = new IntersectionObserver(entries => {
                console.log('entries', entries)
                entries.forEach(entry => {
                    if (entry.isIntersecting && hasMore) {
                        refineNext()
                    }
                })
            })
            observer.observe(sentinel.current)


        }


        return (
            <>
                {hits && hits.map((place) =>
                    <Div
                        key={place.slug}
                        theme={adminPlaceCardWrapperStyle}
                    >

                        <GenericCard
                            slug={`places/update/${place.slug}`}
                            name={place.name}
                            photo={place.photo}
                            theme={adminPlaceCardStyle}
                        />
                    </Div>
                )}
                <Div ref={sentinel}/>
            </>
        )
    })

    return (
        <InstantSearch
            indexName="Places"
            searchClient={searchClient}
            stalledSearchDelay={500}
        >
            <Div theme={searchWrapperStyle}>
                <SearchBox
                    searchAsYouType={false}
                    autoFocus
                />
                <AdminCreateButton url={'/admin/create/place'}/>
            </Div>
            <Div theme={adminPlacesInnerWrapperStyle}>
                <Hits/>
            </Div>
        </InstantSearch>
    )
}

List.propTypes = {
    places: PropTypes.array.isRequired
}

export default List
