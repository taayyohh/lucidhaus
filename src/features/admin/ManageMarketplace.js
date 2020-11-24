import React, {useEffect}             from 'react'
import {
    useDispatch,
    useSelector
}                                     from 'react-redux'
import AdminControls                  from '../../shared/Admin/AdminControls'
import AdminMarketplace               from '../../shared/Admin/AdminMarketplace'
import DeletePrompt                   from '../../shared/Admin/DeletePrompt'
import Div                            from '../../shared/Basic/Div'
import {contentWrapperStyle}          from '../../shared/Layout/styles'
import {adminMarketplaceWrapperStyle} from './styles'

const ManageMarketplace = () => {
    const {marketplace} = useSelector(state => state.business)
    const {confirmDelete} = useSelector(state => state.admin)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'business/getMarketplace'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirmDelete])

    return (
        <Div theme={contentWrapperStyle}>
            <Div theme={adminMarketplaceWrapperStyle}>
                {/*//TODO:improve*/}
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
