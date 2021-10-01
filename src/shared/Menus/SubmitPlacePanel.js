import {submitPlaceFields, validateSubmitPlace} from 'features/user/admin/fields/submit'
import {submitFormWrapperStyle}                 from 'features/user/admin/views/styles'
import React                                    from 'react'
import {useSelector}                            from 'react-redux'
import Div                                      from 'shared/Basic/Div'
import Form                                     from 'shared/Fields/Form'
import {adminFormWrapperStyle}                  from 'shared/Layout/Dashboard/admin/styles'
import {submitPlaceWrapperStyle}                from './styles'

const SubmitPlacePanel = () => {
    const {_id, token} = useSelector(state => state.user)
    const {taxonomy} = useSelector(state => state.place)
    const {communitiesServed, placeCategory} = taxonomy

    const options = [
        {
            name: 'communitiesServed',
            options: communitiesServed
        },
        {
            name: 'categories',
            options: placeCategory
        }
    ]

    const initialValues = {
        _id: _id,
        token: token,
        address1: '',
        address2: '',
        city: '',
        zip: '',
        country: '',
        state: '',
        categories: [],
        communitiesServed: [],
        longitude: '',
        latitude: '',
        name: '',
        submittedBy: [_id],
        website: '',
        isPendingSubmission: true,
    }


    return (
        <Div theme={submitPlaceWrapperStyle}>
            <Div>
                <Form
                    initialValues={initialValues}
                    fields={submitPlaceFields}
                    validationSchema={validateSubmitPlace}
                    dispatchAction={'user/submitPlace'}
                    formHeading={'Submit A Place'}
                    buttonText={'Submit'}
                    theme={submitFormWrapperStyle}
                    options={options}
                    enableReinitialize={true}
                />
            </Div>
        </Div>
    )
}


export default SubmitPlacePanel
