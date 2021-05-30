import AdminDashboardWrapper        from 'features/admin/views/AdminDashboardWrapper'
import {placeFields, validatePlace} from 'features/place/admin/fields'
import React                        from 'react'
import {useSelector}                from 'react-redux'
import Form                         from 'shared/Fields/Form'
import ContentWrapper               from 'shared/Layout/ContentWrapper'

const Create = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        _id: _id,
        token: token,
        name: '',
        description: '',
        photo: '',
        photoFile: '',
        isPublished: false
    }

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={placeFields}
                    validationSchema={validatePlace}
                    dispatchAction={'admin/createPlace'}
                    formHeading={'Create Place'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create
