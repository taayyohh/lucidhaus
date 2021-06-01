import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'
import {
    methodsOfCommunicationField,
    validateMethodsOfCommunication
}                            from 'features/user/admin/fields/methodsOfCommunication'
import React                 from 'react'
import {useSelector}         from 'react-redux'
import Form                  from 'shared/Fields/Form'
import ContentWrapper        from 'shared/Layout/ContentWrapper'

const Create = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        _id,
        token,
        name: '',
        description: ''
    }

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={methodsOfCommunicationField}
                    validationSchema={validateMethodsOfCommunication}
                    dispatchAction={'admin/createMethodsOfCommunicationType'}
                    formHeading={'Create Methods of Communication Type'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create
