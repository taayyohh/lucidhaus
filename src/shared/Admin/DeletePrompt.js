import {AnimatePresence}    from 'framer-motion'
import React                from 'react'
import {Portal}             from 'react-portal'
import {
    useDispatch,
    useSelector
}                           from 'react-redux'
import Div                  from '../Basic/Div'
import MotionDiv            from '../Basic/MotionDiv'
import {genericButtonStyle} from '../../themes/admin'
import {defaultModalStyle}  from '../../themes/layout'

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
                                        theme={genericButtonStyle}
                                        onClick={() => dispatch({type: 'admin/denyDestroyItem'})}
                                    >
                                        Do <strong>not</strong> delete this business
                                    </Div>
                                    <Div
                                        theme={genericButtonStyle}
                                        onClick={() => dispatch({type: 'admin/acceptDestroyItem'})}
                                    >
                                        Yes, delete this business
                                    </Div>
                                </Div>
                            )}

                            {destroy && (
                                <>
                                    <Div>Clicking this button will permanently delete this business</Div>
                                    <Div
                                        theme={genericButtonStyle}
                                        onClick={() => dispatch({
                                            type: destroyAction, ///abstract
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
