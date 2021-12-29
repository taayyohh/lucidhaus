import PropTypes                               from 'prop-types'
import React, {useContext}                     from 'react'
import {connectHits, InstantSearch, SearchBox} from 'react-instantsearch-dom'
import Div                                     from 'shared/Basic/Div'
import GenericCard                             from 'shared/Cards/GenericCard'
import {searchContext}                         from 'shared/Containers/SearchController'
import AdminCreateButton                       from 'shared/Layout/Dashboard/admin/AdminCreateButton'
import {
    adminCollaboratorCardStyle,
    adminCollaboratorCardWrapperStyle,
    adminCollaboratorsInnerWrapperStyle,
    searchWrapperStyle
}                                              from 'shared/Layout/Dashboard/admin/styles'

const List = ({collaborators}) => {
    const {searchClient} = useContext(searchContext)

    const Hits = connectHits(
        ({hits}) =>
            <>
                {hits && hits.map((collaborator) =>
                    <Div
                        key={collaborator.slug}
                        theme={adminCollaboratorCardWrapperStyle}
                    >
                        <GenericCard
                            slug={`collaborators/update/${collaborator.slug}`}
                            name={collaborator.name}
                            photo={collaborator.photo}
                            theme={adminCollaboratorCardStyle}
                        />
                    </Div>
                )}
            </>
    )

    return (
        <InstantSearch
            indexName="Collaborators"
            searchClient={searchClient}
            stalledSearchDelay={500}
        >
            <Div theme={searchWrapperStyle}>
                <SearchBox
                    searchAsYouType={false}
                    autoFocus
                />
                <AdminCreateButton url={'create/collaborator'}/>
            </Div>
            <Div theme={adminCollaboratorsInnerWrapperStyle}>
                <Hits/>
            </Div>
        </InstantSearch>
    )
}


List.propTypes = {
    collaborators: PropTypes.array.isRequired
}

export default List
