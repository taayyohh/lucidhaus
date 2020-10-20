import {Formik}              from 'formik'
import React, {useEffect}    from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import {
    useDispatch,
    useSelector
}                   from 'react-redux'
import Div          from '../../shared/Basic/Div'
import Form         from '../../shared/Basic/Form'
import H2           from '../../shared/Basic/H2'
import SubmitButton from '../../shared/Basic/SubmitButton'
import FieldSwitch  from '../../Forms/FieldSwitch'
import {genericButtonStyle}  from '../../themes/elements'
import {defaultNewFormStyle} from '../../themes/forms'
import {postContentStyle}    from '../../themes/layout'
import {businessFieldTypes}  from '../../variables/fieldTypes'

const UpdateBusiness = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {business} = useSelector(state => state.business)
    const {name, description, photo} = business

    useEffect(() => {
        if (slug.length > 0)
            dispatch({type: 'business/getBusiness', payload: {slug: slug}})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])

    return (
        <Div theme={postContentStyle()}>
            {business && (
                <Formik
                    initialValues={{
                        name: name,
                        description: description,
                        photo: photo,
                        image: ''
                    }}
                    enableReinitialize={true}
                    onSubmit={values => dispatch({
                        type: 'admin/updateBusiness',
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
                            <H2 theme={defaultNewFormStyle.heading}>Update Business</H2>
                            <Div theme={defaultNewFormStyle.inner}>
                                {businessFieldTypes.map((f, i) =>
                                    <FieldSwitch
                                        key={i}
                                        formik={formik}
                                        field={f}
                                    />
                                )}
                                <SubmitButton
                                    theme={{...genericButtonStyle}}
                                >
                                    Updated Business
                                </SubmitButton>
                            </Div>
                        </Form>
                    )}
                </Formik>
            )}
        </Div>
    )
}

export default UpdateBusiness