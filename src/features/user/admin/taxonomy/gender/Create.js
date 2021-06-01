import AdminDashboardWrapper         from 'features/admin/views/AdminDashboardWrapper'
import {genderField, validateGender} from 'features/user/admin/fields/gender'
import React                         from 'react'
import {useSelector}                 from 'react-redux'
import Form                          from 'shared/Fields/Form'
import ContentWrapper                from 'shared/Layout/ContentWrapper'

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
                    fields={genderField}
                    validationSchema={validateGender}
                    dispatchAction={'admin/createGenderType'}
                    formHeading={'Create Gender Type'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create
