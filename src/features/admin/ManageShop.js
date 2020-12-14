import React, {useEffect} from 'react'
import {
    useDispatch,
    useSelector
}                         from 'react-redux'
import AdminControls      from 'shared/Admin/AdminControls'
import AdminShop          from 'shared/Admin/AdminShop'
import DeletePrompt       from 'shared/Admin/DeletePrompt'
import AdminWrapper       from 'shared/Layout/AdminWrapper'
import ContentWrapper     from 'shared/Layout/ContentWrapper'

const ManageShop = () => {
    const {shop} = useSelector(state => state.shop)
    const {confirmDelete} = useSelector(state => state.admin)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'shop/getShop'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirmDelete])


    return (
        <ContentWrapper>
            <AdminWrapper>
                <AdminControls
                    data={shop}
                    title={'Product'}
                    create={'/create/product'}
                />
                <AdminShop shop={shop}/>
                <DeletePrompt destroyAction={'admin/destroyProduct'}/>
            </AdminWrapper>
        </ContentWrapper>
    )
}

export default ManageShop
