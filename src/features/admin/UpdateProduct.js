import {Formik}              from 'formik'
import React, {useEffect}    from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import FieldSwitch           from '../../Forms/FieldSwitch'
import Div                   from '../../shared/Basic/Div'
import Form   from '../../shared/Basic/Form'
import Button from '../../shared/Basic/Button'
import H2     from '../../shared/Basic/H2'
import {defaultNewFormStyle} from '../../themes/forms'
import {postContentStyle}    from '../../themes/layout'
import {productFieldTypes}   from '../../variables/fieldTypes'

const UpdateProduct = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {product} = useSelector(state => state.shop)
    const {name, description, photo, quantity, price, sold} = product

    useEffect(() => {
        if (slug.length > 0)
            dispatch({type: 'shop/getProduct', payload: {slug: slug}})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])

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
                                    />
                                )}
                                <Button>
                                    Updated Business
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