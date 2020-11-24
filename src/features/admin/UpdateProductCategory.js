import React, {useEffect}          from 'react'
import {
    useDispatch,
    useSelector
}                                  from 'react-redux'
import GenericFormik               from '../../shared/Forms/GenericFormik'
import ContentWrapper              from '../../shared/Layout/ContentWrapper'
import {productCategoryFieldTypes} from '../../config/fieldTypes'

const UpdateProductCategory = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {productCategory} = useSelector(state => state.shop)
    const initialValues = {
        name: productCategory.name,
        categoryId: productCategory._id,
        _id,
        token,
    }

    useEffect(() => {
        dispatch({
            type: 'shop/getProductCategory',
            payload: {slug: slug}
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <GenericFormik
                initialValues={initialValues}
                fields={productCategoryFieldTypes}
                //   validationSchema={validateSignin}
                dispatchAction={'shop/updateProductCategory'}
                formHeading={'Update Product Category'}
                buttonText={'Update'}
                theme={{width: 1100}}
                enableReinitialize={true}
            />
        </ContentWrapper>
    )
}

export default UpdateProductCategory