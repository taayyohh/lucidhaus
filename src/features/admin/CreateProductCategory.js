import {productCategoryFields} from 'config/fields/productCategory'
import AdminDashboardWrapper   from 'features/admin/AdminDashboardWrapper'
import React                  from 'react'
import {useSelector}  from 'react-redux'
import Form           from 'shared/Forms/Form'
import ContentWrapper from 'shared/Layout/ContentWrapper'

const CreateProductCategory = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {_id, token, name: ''}

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={productCategoryFields}
                    //   validationSchema={validateSignin}
                    dispatchAction={'shop/createProductCategory'}
                    formHeading={'Create Product Category'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default CreateProductCategory