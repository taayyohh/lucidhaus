import {productFieldTypes} from '../../config/fieldTypes/product'
import React, {useEffect}  from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import {
    useDispatch,
    useSelector
}                          from 'react-redux'
import AdminControls       from '../../shared/Admin/AdminControls'
import GenericFormik       from '../../shared/Forms/GenericFormik'
import AdminWrapper        from '../../shared/Layout/AdminWrapper'
import ContentWrapper      from '../../shared/Layout/ContentWrapper'
import {adminFormWrapperStyle} from './styles'

const UpdateProduct = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {product} = useSelector(state => state.shop)
    const {productCategories} = useSelector(state => state.shop)
    const {name, description, photo, quantity, price, sold, category, isPublished} = product
    const initialValues = {
        name: name,
        description: description,
        photo: photo,
        image: '',
        quantity: quantity,
        category: category,
        price: price,
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
        <ContentWrapper>
            <AdminWrapper>
                {/*//TODO:improve*/}
                <AdminControls
                    data={product}
                    title={'Product'}
                    create={'/create/product'}
                />
                <GenericFormik
                    initialValues={initialValues}
                    fields={productFieldTypes}
                    options={options}
                    //   validationSchema={validateSignin}
                    dispatchAction={'admin/updateProduct'}
                    formHeading={'Update Product'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                />
            </AdminWrapper>
        </ContentWrapper>
    )
}

export default UpdateProduct