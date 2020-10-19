import {Formik}              from 'formik'
import React, {useEffect}    from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import Div                   from '../../Basic/Div'
import Form                  from '../../Basic/Form'
import H2                    from '../../Basic/H2'
import FieldSwitch           from '../../Forms/FieldSwitch'
import {genericButtonStyle}  from '../../themes/elements'
import {defaultNewFormStyle} from '../../themes/forms'
import {postContentStyle}    from '../../themes/layout'
import {businessFieldTypes}  from '../../variables/fieldTypes'
import {businessUploadPath}  from '../../variables/s3'

const UpdateBusiness = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {business} = useSelector(state => state.business)
    const {name, description, photo} = business
    const s3Path = businessUploadPath

    useEffect(() => {
        if (slug.length > 0)
            dispatch({type: 'business/getBusiness', payload: {slug: slug}})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])

    return (
        <Div theme={postContentStyle()}>
            {business && (
                <Formik
                    initialValues={{name: name, description: description, key: photo, image: ''}}
                    enableReinitialize={true}
                    onSubmit={values => dispatch({
                        type: 'admin/updateBusiness',
                        payload: {_id: _id, token: token, values: values, s3Path: s3Path}
                    })}
                >
                    {formik => (
                        <Form onSubmit={formik.handleSubmit}>
                            <H2 theme={defaultNewFormStyle.heading}>Create Business</H2>
                            <Div theme={defaultNewFormStyle.inner}>
                                {businessFieldTypes.map((f, i) =>
                                    <FieldSwitch
                                        key={i}
                                        formik={formik}
                                        field={f}
                                    />
                                )}
                                <Div
                                    as="button"
                                    theme={{...genericButtonStyle}}
                                >
                                    Updated Business
                                </Div>
                            </Div>
                        </Form>
                    )}
                </Formik>
            )}
        </Div>
    )
}

export default UpdateBusiness