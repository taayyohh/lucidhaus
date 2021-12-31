import {productFields, validateProduct} from 'features/shop/admin/product/fields'
import {userContentWrapperStyle}        from 'features/user/admin/views/styles'
import React, {useContext, useEffect}   from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import {useDispatch, useSelector}       from 'react-redux'
import {searchContext}                  from 'shared/Containers/SearchController'
import DangerZone                       from 'shared/Controls/DangerZone'
import Form                             from 'shared/Fields/Form'
import ContentWrapper                   from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper            from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {adminFormWrapperStyle}          from 'shared/Layout/Dashboard/admin/styles'

const Update = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {product} = useSelector(state => state.shop)
    const {productCategories} = useSelector(state => state.shop.taxonomy)
    const {name, description, photo, quantity, price, sold, category, internationalShippingCost, isPublished} = product
    const {productsIndex} = useContext(searchContext)
    const initialValues = {
        name: name,
        description: description,
        photo: photo,
        photoFile: '',
        quantity: quantity,
        category: category,
        price: price,
        internationalShippingCost: internationalShippingCost,
        sold: sold,
        isPublished: isPublished,
        slug,
        _id,
        token,
    }
    //TODO: turn into custom fn that takes options as arguments outputs array of obj
    const options = [
        {
            name: 'category',
            options: productCategories
        }
    ]

    useEffect(() => {
        dispatch({type: 'shop/getProduct', payload: {slug: slug}})
        dispatch({type: 'shop/getProductCategories'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper theme={userContentWrapperStyle}>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={productFields}
                    options={options}
                    validationSchema={validateProduct}
                    dispatchAction={'shop/updateProduct'}
                    formHeading={'Update Product'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                />
                <DangerZone
                    attemptDestroyAction={'shop/attemptDestroyProduct'}
                    destroyAction={'shop/destroyProduct'}
                    slug={slug}
                    objectID={product.objectID}
                    index={productsIndex}
                    type={'product'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update
