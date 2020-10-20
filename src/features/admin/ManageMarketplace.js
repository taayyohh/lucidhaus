import React, {useEffect}             from 'react'
import {
    useDispatch,
    useSelector
}                                     from 'react-redux'
import Div                            from '../../shared/Basic/Div'
import {adminMarketplaceWrapperStyle} from '../../themes/admin'
import {postContentStyle}             from '../../themes/layout'
import AdminControls                  from './AdminControls'
import AdminMarketplace               from './AdminMarketplace'
import DeletePrompt                   from './DeletePrompt'

const ManageMarketplace = () => {
    const {slug} = useSelector(state => state.site)
    const {marketplace} = useSelector(state => state.business)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'business/getMarketplace'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [marketplace])

    return (
        <Div theme={postContentStyle(slug)}>
            <Div theme={adminMarketplaceWrapperStyle}>
                <AdminControls
                    data={marketplace}
                    title={'Business'}
                    create={'/create/business'}
                />
                <AdminMarketplace marketplace={marketplace}/>
                <DeletePrompt/>
            </Div>
        </Div>
    )
}

export default ManageMarketplace
