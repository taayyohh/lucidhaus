import {Formik}              from 'formik'
import React                 from 'react'
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

const CreateBusiness = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const s3Path = businessUploadPath


    return (
        <Div theme={postContentStyle()}>
            <Formik
                initialValues={{name: '', description: '', key: '', image: ''}}
                onSubmit={values => dispatch({
                    type: 'admin/createBusiness',
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
                                Create Business
                            </Div>
                        </Div>
                    </Form>
                )}
            </Formik>
        </Div>
    )
}

export default CreateBusiness