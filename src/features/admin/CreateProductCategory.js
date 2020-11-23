import {Formik}                    from 'formik'
import React                       from 'react'
import {
    useDispatch,
    useSelector
}                                  from 'react-redux'
import Button                      from '../../shared/Basic/Button'
import Div                         from '../../shared/Basic/Div'
import H3                          from '../../shared/Basic/H3'
import FieldSwitch                 from '../../shared/Forms/FieldSwitch'
import {genericButtonStyle}        from '../../themes/elements'
import {contentWrapperStyle}       from '../../themes/layout'
import {genericFormStyle}          from '../../themes/signup'
import {productCategoryFieldTypes} from '../../variables/fieldTypes'

const CreateProductCategory = () => {
    const {_id, token} = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <Div theme={contentWrapperStyle}>
            <Formik
                initialValues={{name: ''}}
                onSubmit={values => dispatch({
                    type: 'shop/createProductCategory',
                    payload: {_id: _id, token: token, values: values}
                })}
            >
                {formik => (
                    <Div as="form" theme={genericFormStyle} onSubmit={formik.handleSubmit}>
                        <H3 theme={genericFormStyle.heading}>Create Product Category</H3>
                        {productCategoryFieldTypes.map((f, i) =>
                            <FieldSwitch
                                key={i}
                                formik={formik}
                                field={f}
                            />
                        )}
                        <Button
                            theme={{...genericButtonStyle}}
                            children={'Submit'}
                        />
                    </Div>
                )}
            </Formik>
        </Div>
    )
}

export default CreateProductCategory