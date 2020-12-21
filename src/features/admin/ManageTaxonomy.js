import React, {useEffect} from 'react'
import {
    useDispatch,
    useSelector
}                         from 'react-redux'
import AdminTaxonomy      from 'shared/Admin/AdminTaxonomy'
import DeletePrompt       from 'shared/Admin/DeletePrompt'
import AdminWrapper       from 'shared/Layout/AdminWrapper'
import ContentWrapper     from 'shared/Layout/ContentWrapper'

const ManageTaxonomy = () => {
    const {productCategories} = useSelector(state => state.shop)
    const {confirmDelete} = useSelector(state => state.admin)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'shop/getProductCategories'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirmDelete])


    return (
        <ContentWrapper>
            <AdminWrapper>
                <AdminTaxonomy productCategories={productCategories}/>
                <DeletePrompt destroyAction={'admin/destroyProductCategory'}/>
            </AdminWrapper>
        </ContentWrapper>
    )
}

export default ManageTaxonomy
