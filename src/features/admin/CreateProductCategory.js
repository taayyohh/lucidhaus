import {productCategoryField} from 'config/fields/productCategory'
import React                  from 'react'
import {useSelector}          from 'react-redux'
import GenericFormik         from 'shared/Forms/GenericFormik'
import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import {postFormStyle}        from '../post/styles'

const CreateProductCategory = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {_id, token, name: ''}

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <GenericFormik
                    initialValues={initialValues}
                    fields={productCategoryField}
                    //   validationSchema={validateSignin}
                    dispatchAction={'shop/createProductCategory'}
                    formHeading={'Create Product Category'}
                    buttonText={'Create'}
                    theme={postFormStyle}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default CreateProductCategory