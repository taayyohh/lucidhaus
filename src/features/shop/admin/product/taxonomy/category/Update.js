import {productCategoryFields} from 'features/shop/admin/product/fields/productCategory'
import AdminDashboardWrapper   from 'features/admin/views/AdminDashboardWrapper'
import {adminFormWrapperStyle} from 'features/admin/views/styles'
import React, {useEffect}      from 'react'
import {
    useDispatch,
    useSelector
}                              from 'react-redux'
import Form                    from 'shared/Fields/Form'
import ContentWrapper          from 'shared/Layout/ContentWrapper'

const Update = () => {
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
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={productCategoryFields}
                    //   validationSchema={validateSignin}
                    dispatchAction={'shop/updateProductCategory'}
                    formHeading={'Update Product Category'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update
