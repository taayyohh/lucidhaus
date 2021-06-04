import AdminDashboardWrapper                        from 'features/admin/views/AdminDashboardWrapper'
import {placeCategoryFields, validatePlaceCategory} from 'features/place/admin/fields/categories'
import React                                        from 'react'
import {useSelector}                                from 'react-redux'
import Form                                         from 'shared/Fields/Form'
import ContentWrapper                               from 'shared/Layout/ContentWrapper'

const CreatePlaceCategory = () => {
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
                    fields={placeCategoryFields}
                    validationSchema={validatePlaceCategory}
                    dispatchAction={'admin/createPlaceCategory'}
                    formHeading={'Create Place Category'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default CreatePlaceCategory
