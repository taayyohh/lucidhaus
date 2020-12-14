import {
    adminControlPanelInnerStyle,
    adminControlPanelStyle,
    adminCreateButtonStyle,
    adminHeadingStyle
}                    from 'features/admin/styles'
import React         from 'react'
import {useSelector} from 'react-redux'
import Div           from 'shared/Basic/Div'
import H2            from 'shared/Basic/H2'
import LinkSwitch    from 'shared/Basic/LinkSwitch'
import Span          from 'shared/Basic/Span'
import GenericFormik from 'shared/Forms/GenericFormik'

const AdminControls = ({data, title, create, publish}) => {
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const hasData = data === Object(data)
    console.log('data')


    return (
        <Div theme={adminControlPanelStyle}>
            <Div theme={adminControlPanelInnerStyle}>
                <H2 theme={adminHeadingStyle}>Manage {title}</H2>
                <LinkSwitch theme={adminCreateButtonStyle} url={create}>
                    Create {title}
                </LinkSwitch>
                {publish && hasData && (
                    <GenericFormik
                        initialValues={
                            {
                                ...data,
                                isPublished: data.isPublished,
                                _id,
                                token,
                                slug
                            }
                        }
                        fields={publish}
                        //   validationSchema={validateSignin}
                        dispatchAction={'admin/updatePost'}
                        formHeading={'Live'}
                        buttonText={'Update'}
                        theme={{
                            width: 'auto',
                            padding: 0,
                            margin: 0
                        }}
                        enableReinitialize={true}
                    />
                )}


                {data?.length > 0 && (
                    <Span>Total: {data.length}</Span>
                )}
            </Div>
        </Div>
    )
}

export default AdminControls