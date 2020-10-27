import {Formik}              from 'formik'
import React                 from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import Div                   from '../Basic/Div'
import Form                  from '../Basic/Form'
import H2                    from '../Basic/H2'
import FieldSwitch           from './FieldSwitch'
import {genericButtonStyle}  from '../../themes/elements'
import {defaultNewFormStyle} from '../../themes/forms'
import {postContentStyle}    from '../../themes/layout'
import {businessFieldTypes}  from '../../variables/fieldTypes'
import Button                from '../Basic/Button'

const GenericForm = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)

    return (
        <Div theme={postContentStyle()}>
            <Formik
                initialValues={{name: '', description: '', photo: '', image: ''}}
                onSubmit={values => dispatch({
                    type: 'admin/createBusiness',
                    payload: {_id: _id, token: token, values: values}
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
                            <Button>
                                Create Business
                            </Button>
                        </Div>
                    </Form>
                )}
            </Formik>
        </Div>
    )
}

export default GenericForm