import React, {useEffect}   from 'react'
import {
    useDispatch,
    useSelector
}                           from 'react-redux'
import GenericFormik        from '../../shared/Forms/GenericFormik'
import ContentWrapper       from '../../shared/Layout/ContentWrapper'
import {businessFieldTypes} from '../../variables/fieldTypes'

const UpdateBusiness = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {business} = useSelector(state => state.business)
    const initialValues = {
        name: business.name,
        description: business.description,
        photo: business.photo,
        image: '',
        slug,
        _id,
        token,
    }

    useEffect(() => {
        dispatch({
            type: 'business/getBusiness',
            payload: {
                slug: slug
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <GenericFormik
                initialValues={initialValues}
                fields={businessFieldTypes}
                //   validationSchema={validateSignin}
                dispatchAction={'admin/updateBusiness'}
                formHeading={'Update Business'}
                buttonText={'Update'}
                theme={{width: 1100}}
                enableReinitialize={true}
            />
        </ContentWrapper>
    )
}

export default UpdateBusiness