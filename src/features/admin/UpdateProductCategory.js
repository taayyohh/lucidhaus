import {Formik}                    from 'formik'
import React, {useEffect}          from 'react'
import {
    useDispatch,
    useSelector
}                                  from 'react-redux'
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

const UpdateProductCategory = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {productCategory} = useSelector(state => state.shop)


    useEffect(() => {
        dispatch({
            type: 'shop/getProductCategory',
            payload: {slug: slug}
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])

    return (
        <Div theme={postContentStyle()}>
            <Formik
                initialValues={{name: productCategory.name}}
                enableReinitialize={true}
                onSubmit={values => dispatch({
                    type: 'shop/updateProductCategory',
                    payload: {
                        _id: _id,
                        token: token,
                        categoryName: values.name,
                        categoryId: productCategory._id
                    }
                })}
            >
                {formik => (
                    <Div as="form" theme={signInFormStyle} onSubmit={formik.handleSubmit}>
                        <H3 theme={signInFormStyle.heading}>Update Product Category</H3>
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

export default UpdateProductCategory