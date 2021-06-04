import AdminDashboardWrapper                    from 'features/admin/views/AdminDashboardWrapper'
import {foodOptionsFields, validateFoodOptions} from 'features/place/admin/fields/foodOptions'
import React                                    from 'react'
import {useSelector}                            from 'react-redux'
import Form                                     from 'shared/Fields/Form'
import ContentWrapper                           from 'shared/Layout/ContentWrapper'

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
                    fields={foodOptionsFields}
                    validationSchema={validateFoodOptions}
                    dispatchAction={'admin/createFoodOptionsType'}
                    formHeading={'Create Food Options Type'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create
