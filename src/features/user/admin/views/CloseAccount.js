import React, {useContext}                          from 'react'
import {useDispatch, useSelector}                   from 'react-redux'
import Div                                          from 'shared/Basic/Div'
import H2                                           from 'shared/Basic/H2'
import Span                                         from 'shared/Basic/Span'
import {searchContext}                              from 'shared/Containers/SearchController'
import DeletePrompt                                from 'shared/Controls/DeletePrompt'
import {closeAccountButtonStyle, userAccountStyle} from './styles'

const CloseAccount = () => {
    const {objectID, slug} = useSelector(state => state.user)
    const {usersIndex} = useContext(searchContext)
    const dispatch = useDispatch()
    const {confirmDelete} = useSelector(state => state.site)
    const {shouldDelete} = confirmDelete

    return (
        <Div theme={userAccountStyle}>
            <H2 theme={userAccountStyle.heading}>Close Account</H2>
            <Span>Delete your account and all saved account data.</Span>
            <Span theme={userAccountStyle.disclaimer}>
                * Please Note: Deleting your LucidHaus account will remove all saved account details,
                identity profile information, saved places, and reviews from our database.
                You will need to repeat the verification process for your desired phone number
                and email address should you choose to create a new account on the LucidHaus website.
                A verified phone number and email are required to leave reviews on the LucidHaus.
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
