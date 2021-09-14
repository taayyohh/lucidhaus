import {userDashboardMenu}                      from 'config/menus/dashboard/user'
import {submitPlaceFields, validateSubmitPlace} from 'features/user/admin/fields/submit'
import React, {useEffect}                       from 'react'
import {useDispatch, useSelector}               from 'react-redux'
import Div                                      from 'shared/Basic/Div'
import Form                                     from 'shared/Fields/Form'
import ContentWrapper                           from 'shared/Layout/ContentWrapper'
import {adminFormWrapperStyle}                  from 'shared/Layout/Dashboard/admin/styles'
import DashboardWrapper                         from 'shared/Layout/Dashboard/DashboardWrapper'

const Submit = () => {
    const dispatch = useDispatch()
    const {taxonomy} = useSelector(state => state.place)
    const {_id, token, user, pendingPlaces} = useSelector(state => state.user)


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
        name: '',
        submittedBy: _id,
        website: '',
        isPendingSubmission: true,
    }

    const {
        communitiesServed,
        placeCategory
    } = taxonomy


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


    useEffect(() => {
        dispatch({type: 'place/listCommunitiesServed'})
        dispatch({type: 'place/listPlaceCategory'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        user?.pendingPlaceSubmissions?.forEach(_id => {
            dispatch({
                type: 'site/getEntityById',
                payload: {
                    entityId: _id,
                    path: 'pending-place',
                    feature: 'user',
                }
            })
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])


    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <Div>
                    <Form
                        initialValues={initialValues}
                        fields={submitPlaceFields}
                        validationSchema={validateSubmitPlace}
                        dispatchAction={'user/submitPlace'}
                        formHeading={'Submit A Place'}
                        buttonText={'Submit'}
                        theme={adminFormWrapperStyle}
                        options={options}
                        enableReinitialize={true}
                    />
                </Div>
                <Div>
                    Pending Submissions
                    {pendingPlaces && pendingPlaces.map((place) =>
                        <Div key={place._id}>
                            <Div>{place.name}</Div>
                            <Div>{place.isPendingSubmission ? 'Pending' : 'Submitted'}</Div>
                        </Div>
                    )}
                </Div>
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Submit
