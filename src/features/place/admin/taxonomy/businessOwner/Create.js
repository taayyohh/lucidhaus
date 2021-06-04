import AdminDashboardWrapper              from 'features/admin/views/AdminDashboardWrapper'
import {businessOwnerFields, validateBusinessOwner} from 'features/place/admin/fields/businessOwner'
import React                              from 'react'
import {useSelector}                      from 'react-redux'
import Form                               from 'shared/Fields/Form'
import ContentWrapper                     from 'shared/Layout/ContentWrapper'

const CreateBusinessOwner = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        _id,
        token,
        avatar: '',
        bio: '',
        email: '',
        name: '',
        tel: ''
    }

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={businessOwnerFields}
                    validationSchema={validateBusinessOwner}
                    dispatchAction={'admin/createBusinessOwnerType'}
                    formHeading={'Create Bathroom'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default CreateBusinessOwner
