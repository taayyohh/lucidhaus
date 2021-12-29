import {productFields, validateProduct} from 'features/shop/admin/product/fields'
import React, {useEffect}               from 'react'
import {useDispatch, useSelector}       from 'react-redux'
import Form                             from 'shared/Fields/Form'
import ContentWrapper                   from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper            from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {adminFormWrapperStyle}          from 'shared/Layout/Dashboard/admin/styles'
import {userContentWrapperStyle}        from '../../../../user/admin/views/styles'

const Create = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {productCategories} = useSelector(state => state.shop)
    const initialValues = {
        _id: _id,
        token: token,
        name: '',
        description: '',
        photo: '',
        photoFile: '',
        quantity: 0,
        price: 0,
        internationalShippingCost: 0,
        sold: 0,
        category: '',
        isPublished: false
    }

    const options = [
        {
            name: 'category',
            options: productCategories
        }
    ]

    useEffect(() => {
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
                    dispatchAction={'shop/createProduct'}
                    formHeading={'Create Product'}
                    buttonText={'Create'}
                    theme={adminFormWrapperStyle}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create
