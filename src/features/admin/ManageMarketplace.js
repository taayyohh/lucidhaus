import {AnimatePresence} from 'framer-motion'
import React, {useEffect} from 'react'
import {Portal} from 'react-portal'
import {
    useDispatch,
    useSelector
} from 'react-redux'
import Div from '../../Basic/Div'
import MotionDiv from '../../Basic/MotionDiv'
import {
    adminMarketplaceWrapperStyle,
    genericButtonStyle
} from '../../themes/admin'
import {
    defaultModalStyle,
    postContentStyle
} from '../../themes/layout'
import AdminControls from './AdminControls'
import AdminMarketplace from './AdminMarketplace'

const ManageMarketplace = () => {
    const {slug} = useSelector(state => state.site)
    const {marketplace} = useSelector(state => state.business)
    const {_id, token} = useSelector(state => state.user)
    const {confirmDelete} = useSelector(state => state.admin)
    const {shouldDelete, destroy} = confirmDelete
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'business/getMarketplace'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div theme={postContentStyle(slug)}>
            <Div theme={adminMarketplaceWrapperStyle}>
                <AdminControls
                    data={marketplace}
                    title={'Manage Business'}
                    create={'/create/business'}
                />
                <AdminMarketplace marketplace={marketplace}/>
            </Div>
            {shouldDelete && (
                <Portal node={document && document.getElementById('modal')}>
                    <AnimatePresence>
                        <MotionDiv theme={defaultModalStyle}>
                            {!destroy && (
                                <Div>
                                    Are you sure you want to delete?
                                    <Div
                                        theme={genericButtonStyle}
                                        onClick={() => dispatch({type: 'admin/denyDestroyBusiness'})}
                                    >
                                        Do <strong>not</strong> delete this business
                                    </Div>
                                    <Div
                                        theme={genericButtonStyle}
                                        onClick={() => dispatch({type: 'admin/acceptDestroyBusiness'})}
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
                                            type: 'admin/destroyBusiness',
                                            payload: {_id: _id, token: token, slug: slug}
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
        </Div>
    )
}

export default ManageMarketplace
