import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import DangerZone                 from 'shared/Controls/DangerZone'
import Form                       from 'shared/Fields/Form'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper      from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {adminFormWrapperStyle}    from 'shared/Layout/Dashboard/admin/styles'
import {productCategoryFields}    from './fields'

const Update = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {taxonomy} = useSelector(state => state.shop)
    const {productCategory} = taxonomy
    const initialValues = {
        name: productCategory?.name,
        categoryId: productCategory?._id,
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
                <DangerZone
                    attemptDestroyAction={'site/attemptDestroyEntity'}
                    destroyAction={'site/destroyEntity'}
                    slug={slug}
                    type={'product-category'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update
