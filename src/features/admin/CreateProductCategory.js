import React                       from 'react'
import {useSelector}               from 'react-redux'
import {productCategoryFieldTypes} from '../../config/fieldTypes'
import AdminControls               from '../../shared/Admin/AdminControls'
import GenericFormik               from '../../shared/Forms/GenericFormik'
import AdminWrapper                from '../../shared/Layout/AdminWrapper'
import ContentWrapper              from '../../shared/Layout/ContentWrapper'
import {postFormStyle}             from '../post/styles'

const CreateProductCategory = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {_id, token, name: ''}

    return (
        <ContentWrapper>
            <AdminWrapper>
                <AdminControls
                    title={'Product Category'}
                    create={'/create/product-category'}
                />
                <GenericFormik
                    initialValues={initialValues}
                    fields={productCategoryFieldTypes}
                    //   validationSchema={validateSignin}
                    dispatchAction={'shop/createProductCategory'}
                    formHeading={'Create Product Category'}
                    buttonText={'Create'}
                    theme={postFormStyle}
                />
            </AdminWrapper>
        </ContentWrapper>
    )
}

export default CreateProductCategory