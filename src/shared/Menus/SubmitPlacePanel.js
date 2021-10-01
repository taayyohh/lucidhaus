import {submitPlaceFields, validateSubmitPlace} from 'features/user/admin/fields/submit'
import {submitFormWrapperStyle}                 from 'features/user/admin/views/styles'
import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector}     from 'react-redux'
import Div                            from 'shared/Basic/Div'
import Form                                     from 'shared/Fields/Form'
import {menuPanelContext}                       from '../Containers/MenuPanelController'
import {submitPlaceWrapperStyle}                from './styles'

const SubmitPlacePanel = () => {
    const {_id, token, placeSubmissionSuccess} = useSelector(state => state.user)
    const {taxonomy} = useSelector(state => state.place)
    const {communitiesServed, placeCategory} = taxonomy
    const {setPanel} = useContext(menuPanelContext)
    const dispatch = useDispatch()

    useEffect(() => {
        if (placeSubmissionSuccess) {
            setPanel(null)
            dispatch({type: 'user/closeSubmissionPanel'})
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [placeSubmissionSuccess])

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
    )
}


export default SubmitPlacePanel
