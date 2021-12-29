import React                                            from 'react'
import {useSelector}                                    from 'react-redux'
import Form                                             from 'shared/Fields/Form'
import ContentWrapper                                   from 'shared/Layout/ContentWrapper'
import {productCategoryFields, validateProductCategory} from './fields'

const Create = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        _id,
        token,
        name: ''
    }

    return (
        <ContentWrapper>
            <Form
                initialValues={initialValues}
                fields={productCategoryFields}
                validationSchema={validateProductCategory}
                dispatchAction={'shop/createProductCategory'}
                formHeading={'Create Product Category'}
                buttonText={'Create'}
            />
        </ContentWrapper>
    )
}

export default Create
