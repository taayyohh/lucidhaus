import AdminDashboardWrapper                            from 'features/admin/views/AdminDashboardWrapper'
import {languagesSpokenFields, validateLanguagesSpoken} from 'features/place/admin/fields/languagesSpoken'
import React                                            from 'react'
import {useSelector}                                    from 'react-redux'
import Form                                             from 'shared/Fields/Form'
import ContentWrapper                                   from 'shared/Layout/ContentWrapper'

const Create = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        _id,
        token,
        name: '',
        description: ''
    }

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={languagesSpokenFields}
                    validationSchema={validateLanguagesSpoken}
                    dispatchAction={'admin/createLanguagesSpokenType'}
                    formHeading={'Create Food Options Type'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create
