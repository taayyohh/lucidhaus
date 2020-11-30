import React, {useEffect} from 'react'
import {
    useDispatch,
    useSelector
}                         from 'react-redux'
import AdminControls      from '../../shared/Admin/AdminControls'
import AdminTaxonomy      from '../../shared/Admin/AdminTaxonomy'
import DeletePrompt       from '../../shared/Admin/DeletePrompt'
import AdminWrapper       from '../../shared/Layout/AdminWrapper'
import ContentWrapper     from '../../shared/Layout/ContentWrapper'

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
                <AdminControls
                    data={productCategories}
                    title={'Product Category'}
                    create={'/create/product-category'}
                />
                <AdminTaxonomy productCategories={productCategories}/>
                <DeletePrompt destroyAction={'admin/destroyProductCategory'}/>
            </AdminWrapper>
        </ContentWrapper>
    )
}

export default ManageTaxonomy
