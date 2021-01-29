import {
    collaboratorFields,
    validateCollaborator
}                            from 'config/fields/collaborator'
import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import React                 from 'react'
import {useSelector}         from 'react-redux'
import Form                  from 'shared/Fields/Form'
import ContentWrapper        from 'shared/Layout/ContentWrapper'

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
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={collaboratorFields}
                    validationSchema={validateCollaborator}
                    dispatchAction={'admin/createCollaborator'}
                    formHeading={'Create Collaborator'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create