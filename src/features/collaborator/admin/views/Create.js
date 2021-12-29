import React                                      from 'react'
import {useSelector}                              from 'react-redux'
import Form                                       from 'shared/Fields/Form'
import ContentWrapper                             from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper                      from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {userContentWrapperStyle}                  from '../../../user/admin/views/styles'
import {collaboratorFields, validateCollaborator} from '../fields'

const Create = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        _id: _id,
        token: token,
        name: '',
        photo: '',
        photoFile: '',
        isPublished: false
    }

    return (
        <ContentWrapper theme={userContentWrapperStyle}>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={collaboratorFields}
                    validationSchema={validateCollaborator}
                    dispatchAction={'collaborator/createCollaborator'}
                    formHeading={'Create Collaborator'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create
