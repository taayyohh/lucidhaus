import AdminDashboardWrapper                               from 'features/admin/views/AdminDashboardWrapper'
import {adaptiveEquipmentField, validateAdaptiveEquipment} from 'features/user/admin/fields/adaptiveEquipment'
import React                                               from 'react'
import {useSelector}                                       from 'react-redux'
import Form                                                from 'shared/Fields/Form'
import ContentWrapper                                      from 'shared/Layout/ContentWrapper'

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
                    fields={adaptiveEquipmentField}
                    validationSchema={validateAdaptiveEquipment}
                    dispatchAction={'admin/createAdaptiveEquipmentType'}
                    formHeading={'Create Adaptive Equipment Type'}
                    buttonText={'Create'}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create
