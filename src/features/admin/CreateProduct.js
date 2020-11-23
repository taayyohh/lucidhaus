import {Formik}              from 'formik'
import React, {useEffect}    from 'react'
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
import {contentWrapperStyle} from '../../themes/layout'
import {productFieldTypes}   from '../../variables/fieldTypes'

const CreateProduct = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {productCategories} = useSelector(state => state.shop)
    const options = [
        {
            name: 'category',
            options: productCategories
        }
    ]

    useEffect(() => {
        dispatch({
            type: 'shop/getProductCategories',
            payload: {
                _id: _id,
                token: token
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Div theme={contentWrapperStyle}>
            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    photo: '',
                    image: '',
                    quantity: 0,
                    price: 0,
                    category: ''
                }}
                onSubmit={values => dispatch({
                    type: 'admin/createProduct',
                    payload: {
                        _id: _id,
                        token: token,
                        values: values
                    }
                })}
            >
                {formik => (
                    <Form onSubmit={formik.handleSubmit}>
                        <H2 theme={defaultNewFormStyle.heading}>Create Product</H2>
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
                                Create Product
                            </Button>
                        </Div>
                    </Form>
                )}
            </Formik>
        </Div>
    )
}

export default CreateProduct