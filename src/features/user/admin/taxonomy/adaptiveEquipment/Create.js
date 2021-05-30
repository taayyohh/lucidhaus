import {
    productCategoryFields,
    validateProductCategory
}                            from 'features/shop/admin/product/fields/productCategory'
import AdminDashboardWrapper from 'features/admin/views/AdminDashboardWrapper'
import React                 from 'react'
import {useSelector}            from 'react-redux'
import Form                     from 'shared/Fields/Form'
import ContentWrapper           from 'shared/Layout/ContentWrapper'
import {adaptiveEquipmentField} from 'features/user/admin/fields/adaptiveEquipment'

const Create = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        _id,
        token,
        name: ''
    }

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={adaptiveEquipmentField}
                    // validationSchema={validateProductCategory}
                    dispatchAction={'admin/createAdaptiveEquipmentType'}
                    formHeading={'Create Adaptive Equipment Type'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create
