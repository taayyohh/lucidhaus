import {Formik}              from 'formik'
import React, {useEffect}    from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import Button                from '../../shared/Basic/Button'
import Div                   from '../../shared/Basic/Div'
import Form                  from '../../shared/Basic/Form'
import H2                    from '../../shared/Basic/H2'
import FieldSwitch           from '../../shared/Forms/FieldSwitch'
import {defaultNewFormStyle} from '../../themes/forms'
import {postContentStyle}    from '../../themes/layout'
import {productFieldTypes}   from '../../variables/fieldTypes'

const UpdateProduct = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {product} = useSelector(state => state.shop)
    const {productCategories} = useSelector(state => state.shop)
    const {name, description, photo, quantity, price, sold, category} = product
    //TODO: turn into custom fn that takes options as arguments outputs array of obj
    const options = [
        {
            name: 'category',
            options: productCategories
        }
    ]

    useEffect(() => {
        dispatch({
            type: 'shop/getProduct',
            payload: {slug: slug}
        })
        dispatch({type: 'shop/getProductCategories'})


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div theme={postContentStyle()}>
            {product && (
                <Formik
                    initialValues={{
                        name: name,
                        description: description,
                        photo: photo,
                        image: '',
                        quantity: quantity,
                        category: category,
                        price: price,
                        sold: sold
                    }}
                    enableReinitialize={true}
                    onSubmit={values => dispatch({
                        type: 'admin/updateProduct',
                        payload: {
                            slug: slug,
                            _id: _id,
                            token: token,
                            values: values
                        }
                    })}
                >
                    {formik => (
                        <Form onSubmit={formik.handleSubmit}>
                            <H2 theme={defaultNewFormStyle.heading}>Update Product</H2>
                            <Div theme={defaultNewFormStyle.inner}>
                                {productFieldTypes.map((f, i) =>
                                    <FieldSwitch
                                        key={i}
                                        formik={formik}
                                        field={f}
                                        options={options}
                                    />
                                )}
                                <Button>
                                    Updated Product
                                </Button>
                            </Div>
                        </Form>
                    )}
                </Formik>
            )}
        </Div>
    )
}

export default UpdateProduct