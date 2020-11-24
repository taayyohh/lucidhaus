import {AnimatePresence}   from 'framer-motion'
import React               from 'react'
import {Portal}            from 'react-portal'
import {
    useDispatch,
    useSelector
}                          from 'react-redux'
import Div                 from '../Basic/Div'
import MotionDiv           from '../Basic/MotionDiv'
import {deleteButtonStyle} from '../Controls/styles'
import {defaultModalStyle} from '../Layout/styles'

const DeletePrompt = ({destroyAction}) => {
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
                            {!destroy && (
                                <Div>
                                    Are you sure you want to delete?
                                    <Div
                                        theme={deleteButtonStyle}
                                        onClick={() => dispatch({type: 'admin/denyDestroyItem'})}
                                    >
                                        Do <strong>not</strong> delete this post
                                    </Div>
                                    <Div
                                        theme={deleteButtonStyle}
                                        onClick={() => dispatch({type: 'admin/acceptDestroyItem'})}
                                    >
                                        Yes, delete this post
                                    </Div>
                                </Div>
                            )}

                            {destroy && (
                                <>
                                    <Div>Clicking this button will permanently delete this post</Div>
                                    <Div
                                        theme={deleteButtonStyle}
                                        onClick={() => dispatch({
                                            type: destroyAction,
                                            payload: {_id: _id, token: token, slug: confirmDelete.slug}
                                        })}
                                    >
                                        Delete
                                    </Div>
                                </>
                            )}
                        </MotionDiv>
                    </AnimatePresence>
                </Portal>
            )}
        </>
    )
}


export default DeletePrompt
