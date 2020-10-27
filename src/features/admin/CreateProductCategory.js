import {Formik}                    from 'formik'
import React                       from 'react'
import {
    useDispatch,
    useSelector
} from 'react-redux'
import Button                      from '../../shared/Basic/Button'
import Div                         from '../../shared/Basic/Div'
import H3                          from '../../shared/Basic/H3'
import FieldSwitch                 from '../../shared/Forms/FieldSwitch'
import {genericButtonStyle}        from '../../themes/elements'
import {postContentStyle}          from '../../themes/layout'
import {
    signInFormStyle,
    signUpFormStyle
}                                  from '../../themes/signup'
import {productCategoryFieldTypes} from '../../variables/fieldTypes'

const CreateProductCategory = () => {
    const {_id, token} = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <Div theme={postContentStyle()}>
            <Formik
                initialValues={{name: ''}}
                onSubmit={values => dispatch({type: 'shop/createProductCategory', payload: {_id: _id, token: token, values: values}})}
            >
                {formik => (
                    <Div as="form" theme={signInFormStyle} onSubmit={formik.handleSubmit}>
                        <H3 theme={signInFormStyle.heading}>Create Product Category</H3>
                        {productCategoryFieldTypes.map((f, i) =>
                            <FieldSwitch
                                key={i}
                                formik={formik}
                                field={f}
                            />
                        )}
                        <Button
                            theme={{...genericButtonStyle, ...signUpFormStyle.button}}
                            children={'Submit'}
                        />
                    </Div>
                )}
            </Formik>
        </Div>
    )
}

export default CreateProductCategory