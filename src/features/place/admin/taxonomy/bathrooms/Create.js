import AdminDashboardWrapper              from 'features/admin/views/AdminDashboardWrapper'
import {bathroomFields, validateBathroom} from 'features/place/admin/fields/bathroom'
import React                              from 'react'
import {useSelector}                      from 'react-redux'
import Form                               from 'shared/Fields/Form'
import ContentWrapper                     from 'shared/Layout/ContentWrapper'

const CreateBathroom = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        _id,
        token,
        gender: '',
        description: '',
        multiStall: false,
        toilets: false,
        urinals: false
    }

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={bathroomFields}
                    validationSchema={validateBathroom}
                    dispatchAction={'admin/createBathroomType'}
                    formHeading={'Create Bathroom'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default CreateBathroom
