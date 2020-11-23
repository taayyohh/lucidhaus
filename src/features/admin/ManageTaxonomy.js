import React, {useEffect}             from 'react'
import {
    useDispatch,
    useSelector
}                                     from 'react-redux'
import AdminControls                  from '../../shared/Admin/AdminControls'
import AdminTaxonomy                  from '../../shared/Admin/AdminTaxonomy'
import DeletePrompt                   from '../../shared/Admin/DeletePrompt'
import Div                            from '../../shared/Basic/Div'
import {adminMarketplaceWrapperStyle} from '../../themes/admin'
import {contentWrapperStyle}          from '../../themes/layout'

const ManageTaxonomy = () => {
    const {slug} = useSelector(state => state.site)
    const {productCategories} = useSelector(state => state.shop)
    const {confirmDelete} = useSelector(state => state.admin)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'shop/getProductCategories'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirmDelete])


    return (
        <Div theme={contentWrapperStyle}>
            <Div theme={adminMarketplaceWrapperStyle}>
                <AdminControls
                    data={productCategories}
                    title={'Product Category'}
                    create={'/create/product-category'}
                />
                <AdminTaxonomy productCategories={productCategories}/>
                <DeletePrompt destroyAction={'admin/destroyProductCategory'}/>
            </Div>
        </Div>
    )
}

export default ManageTaxonomy
