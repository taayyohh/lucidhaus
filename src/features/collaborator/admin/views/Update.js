import React, {useContext, useEffect}             from 'react'
import {useDispatch, useSelector}                 from 'react-redux'
import {searchContext}                            from 'shared/Containers/SearchController'
import DangerZone                                 from 'shared/Controls/DangerZone'
import Form                                       from 'shared/Fields/Form'
import ContentWrapper                             from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper                      from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {adminFormWrapperStyle}                    from 'shared/Layout/Dashboard/admin/styles'
import {userContentWrapperStyle}                  from '../../../user/admin/views/styles'
import {collaboratorFields, validateCollaborator} from '../fields'

const Update = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {albumCollaborator} = useSelector(state => state.collaborator)
    const {name, photo, isPublished} = albumCollaborator
    const {collaboratorsIndex} = useContext(searchContext)

    const initialValues = {
        name: name,
        photo: photo,
        photoFile: '',
        isPublished: isPublished,
        slug,
        _id,
        token,
    }

    useEffect(() => {
        dispatch({
            type: 'collaborator/getCollaborator',
            payload: {
                slug: slug
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper theme={userContentWrapperStyle}>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={collaboratorFields}
                    validationSchema={validateCollaborator}
                    dispatchAction={'collaborator/updateCollaborator'}
                    formHeading={'Update Collaborator'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                />
                <DangerZone
                    attemptDestroyAction={'admin/attemptDestroyCollaborator'}
                    destroyAction={'admin/destroyCollaborator'}
                    slug={slug}
                    objectID={albumCollaborator.objectID}
                    index={collaboratorsIndex}
                    type={'collaborator'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update
