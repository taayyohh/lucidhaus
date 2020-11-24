import React                       from 'react'
import {useSelector}               from 'react-redux'
import GenericFormik               from '../../shared/Forms/GenericFormik'
import ContentWrapper              from '../../shared/Layout/ContentWrapper'
import {productCategoryFieldTypes} from '../../config/fieldTypes'

const CreateProductCategory = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {_id, token, name: ''}

    return (
        <ContentWrapper>
            <GenericFormik
                initialValues={initialValues}
                fields={productCategoryFieldTypes}
                //   validationSchema={validateSignin}
                dispatchAction={'shop/createProductCategory'}
                formHeading={'Create Product Category'}
                buttonText={'Create'}
                theme={{width: 1100}}
            />
        </ContentWrapper>
    )
}

export default CreateProductCategory