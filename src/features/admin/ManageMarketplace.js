import React, {useEffect}             from 'react'
import {
    useDispatch,
    useSelector
}                                     from 'react-redux'
import Div                            from '../../shared/Basic/Div'
import {adminMarketplaceWrapperStyle} from '../../themes/admin'
import {postContentStyle} from '../../themes/layout'
import AdminControls    from '../../shared/Admin/AdminControls'
import AdminMarketplace from '../../shared/Admin/AdminMarketplace'
import DeletePrompt     from '../../shared/Admin/DeletePrompt'

const ManageMarketplace = () => {
    const {slug} = useSelector(state => state.site)
    const {marketplace} = useSelector(state => state.business)
    const {confirmDelete} = useSelector(state => state.admin)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'business/getMarketplace'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirmDelete])

    return (
        <Div theme={postContentStyle(slug)}>
            <Div theme={adminMarketplaceWrapperStyle}>
                <AdminControls
                    data={marketplace}
                    title={'Business'}
                    create={'/create/business'}
                />
                <AdminMarketplace marketplace={marketplace}/>
                <DeletePrompt destroyAction={'admin/destroyBusiness'}/>
            </Div>
        </Div>
    )
}

export default ManageMarketplace
