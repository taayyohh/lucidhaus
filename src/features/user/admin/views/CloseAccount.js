import React, {useContext}                          from 'react'
import {useDispatch, useSelector}                   from 'react-redux'
import Div                                          from 'shared/Basic/Div'
import H2                                           from 'shared/Basic/H2'
import Span                                         from 'shared/Basic/Span'
import {searchContext}                              from 'shared/Containers/SearchController'
import DangerZone                                   from 'shared/Controls/DangerZone'
import DeletePrompt                                 from 'shared/Controls/DeletePrompt'
import {closeAccountButtonStyle, closeAccountStyle} from './styles'

const CloseAccount = (formik) => {
    const {user, objectID, slug} = useSelector(state => state.user)
    const {usersIndex} = useContext(searchContext)
    const dispatch = useDispatch()
    const {confirmDelete} = useSelector(state => state.site)
    const {shouldDelete} = confirmDelete

    return (
        <Div theme={closeAccountStyle}>
            <H2 heme={closeAccountStyle.heading}>Close Account</H2>
            <p>Delete your account and all saved account data.</p>
            <Span theme={closeAccountStyle.disclaimer}>
                <span>*</span>Please Note: Deleting your Inclusive Guide account will remove all saved account details,
                identity profile information, saved places, and reviews from our database.
                You will need to repeat the verification process for your desired phone number
                and email address should you choose to create a new account on the Inclusive Guide website.
                A verified phone number and email are required to leave reviews on the Inclusive Guide.
            </Span>
            <Div
                theme={closeAccountButtonStyle}
                onClick={() => dispatch({
                    type: 'site/attemptDestroyEntity',
                    payload: {
                        slug: slug,
                        type: 'user'
                    }
                })}
            >
                Delete Account
            </Div>
            {shouldDelete && (
                <DeletePrompt
                    key={objectID}
                    destroyAction={'site/destroyEntity'}
                    type={'user'}
                    objectID={objectID}
                    index={usersIndex}
                />
            )}
        </Div>
    )
}

export default CloseAccount
