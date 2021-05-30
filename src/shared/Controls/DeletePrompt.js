import {timesCircle}              from 'config/icons'
import {AnimatePresence}          from 'framer-motion'
import React                      from 'react'
import {Portal}                   from 'react-portal'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import Icon                       from 'shared/Basic/Icon'
import MotionDiv                  from 'shared/Basic/MotionDiv'
import {
    deletePromptButtonStyle,
    deletePromptCloseIconStyle,
    deletePromptConfirmButtonStyle,
    deletePromptHeadingStyle
}                                 from 'shared/Controls/styles'
import {defaultModalStyle}        from 'shared/Layout/styles'

const DeletePrompt = ({destroyAction, type, index, objectID}) => {
    const {_id, token} = useSelector(state => state.user)
    const {confirmDelete} = useSelector(state => state.admin)
    const {shouldDelete, destroy} = confirmDelete
    const dispatch = useDispatch()

    return (
        <>
            {shouldDelete && (
                <Portal node={document && document.getElementById('modal')}>
                    <AnimatePresence>
                        <MotionDiv theme={defaultModalStyle}>
                            <Icon
                                icon={timesCircle}
                                theme={deletePromptCloseIconStyle}
                                onClick={() => dispatch({type: 'admin/denyDestroyPost'})}
                            />
                            {!destroy && (
                                <Div>
                                    <Div theme={deletePromptHeadingStyle}>Are you sure?</Div>
                                    <Div
                                        theme={deletePromptButtonStyle}
                                        onClick={() => dispatch({type: 'admin/denyDestroyPost'})}
                                    >
                                        No, I want keep this {type}
                                    </Div>
                                    <Div
                                        theme={{...deletePromptButtonStyle, ...deletePromptConfirmButtonStyle}}
                                        onClick={() => dispatch({type: 'admin/acceptDestroyItem'})}
                                    >
                                        Yes, delete this {type}
                                    </Div>
                                </Div>
                            )}

                            {(destroy && !!objectID && (
                                <>
                                    <Div theme={deletePromptHeadingStyle}>
                                        Click to <strong>permanently</strong> delete.
                                    </Div>
                                    <Div
                                        theme={{...deletePromptButtonStyle, ...deletePromptConfirmButtonStyle}}
                                        onClick={() => index.deleteObject(objectID).then(() => {
                                                dispatch({
                                                    type: destroyAction,
                                                    payload: {
                                                        _id: _id,
                                                        objectID: objectID,
                                                        token: token,
                                                        slug: confirmDelete.slug
                                                    }
                                                })
                                            }
                                        )
                                        }
                                    >
                                        Delete
                                    </Div>
                                </>
                            )) || (destroy && (
                                <>
                                    <Div theme={deletePromptHeadingStyle}>
                                        Click to <strong>permanently</strong> delete.
                                    </Div>
                                    <Div
                                        theme={{...deletePromptButtonStyle, ...deletePromptConfirmButtonStyle}}
                                        onClick={
                                            () => {
                                                dispatch({
                                                    type: destroyAction,
                                                    payload: {
                                                        _id: _id,
                                                        token: token,
                                                        slug: confirmDelete.slug
                                                    }
                                                })
                                            }
                                        }
                                    >
                                        Delete
                                    </Div>
                                </>
                            ))}
                        </MotionDiv>
                    </AnimatePresence>
                </Portal>
            )}
        </>
    )
}


export default DeletePrompt
