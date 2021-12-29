import {artistFields, validateArtist} from 'features/artist/admin/fields'
import {userContentWrapperStyle}      from 'features/user/admin/views/styles'
import React                          from 'react'
import {useSelector}                  from 'react-redux'
import Form                           from 'shared/Fields/Form'
import ContentWrapper                 from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper          from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'

const Create = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        _id: _id,
        token: token,
        name: '',
        description: '',
        photo: '',
        photoFile: '',
        isPublished: false
    }

    return (
        <ContentWrapper theme={userContentWrapperStyle}>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={artistFields}
                    validationSchema={validateArtist}
                    dispatchAction={'artist/createArtist'}
                    formHeading={'Create Artist'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create
