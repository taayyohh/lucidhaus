import {productFieldTypes} from 'config/fields/product'
import React, {useEffect}  from 'react'
import {
    useDispatch,
    useSelector
}                          from 'react-redux'
import GenericFormik         from 'shared/Forms/GenericFormik'
import AdminDashboardWrapper from 'features/admin/AdminDashboardWrapper'
import ContentWrapper        from 'shared/Layout/ContentWrapper'
import {postFormStyle}     from '../post/styles'

const CreateProduct = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {productCategories} = useSelector(state => state.shop)
    const initialValues = {
        _id: _id,
        token: token,
        name: '',
        description: '',
        photo: '',
        image: '',
        quantity: 0,
        price: 0,
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
        dispatch({
            type: 'shop/getProductCategories',
            payload: {_id, token}
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <GenericFormik
                    initialValues={initialValues}
                    fields={productFieldTypes}
                    options={options}
                    //   validationSchema={validateSignin}
                    dispatchAction={'admin/createProduct'}
                    formHeading={'Create Product'}
                    buttonText={'Create'}
                    theme={postFormStyle}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default CreateProduct