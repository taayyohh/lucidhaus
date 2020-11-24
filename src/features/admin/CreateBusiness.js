import React                from 'react'
import {useSelector}        from 'react-redux'
import GenericFormik        from '../../shared/Forms/GenericFormik'
import ContentWrapper       from '../../shared/Layout/ContentWrapper'
import {businessFieldTypes} from '../../config/fieldTypes'
import {businessFormStyle}  from '../business/styles'

const CreateBusiness = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        name: '',
        description: '',
        photo: '',
        image: '',
        token: token,
        _id: _id
    }

    return (
        <ContentWrapper>
            <GenericFormik
                initialValues={initialValues}
                fields={businessFieldTypes}
                //   validationSchema={validateSignin}
                dispatchAction={'admin/createBusiness'}
                formHeading={'Create Business'}
                buttonText={'Create'}
                theme={businessFormStyle}
            />
        </ContentWrapper>
    )
}

export default CreateBusiness