import {collaboratorCardStyle}     from 'features/collaborator/views/styles'
import React, {useEffect}          from 'react'
import {useDispatch, useSelector}  from 'react-redux'
import Div                         from 'shared/Basic/Div'
import GenericCard                 from 'shared/Cards/GenericCard'
import ContentWrapper              from 'shared/Layout/ContentWrapper'
import {collaboratorsWrapperStyle} from '../styles'

const Collaborators = () => {
    const {collaborators} = useSelector(state => state.collaborator)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'collaborator/getCollaborators'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: 'Collaborators',
                description: 'The collaborators description'
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [collaborators])

    return (
        <ContentWrapper>
            <Div theme={collaboratorsWrapperStyle}>
                {collaborators && collaborators?.map(
                    collaborator => collaborator.isPublished && (
                        <GenericCard
                            key={collaborator.slug}
                            slug={`collaborators/${collaborator.slug}`}
                            name={collaborator.name}
                            photo={collaborator.photo}
                            description={collaborator.description}
                            theme={collaboratorCardStyle}
                        />
                    )
                )}
            </Div>
        </ContentWrapper>
    )
}

export default Collaborators
