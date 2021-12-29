import React, {useEffect}         from 'react'
import {useSelector}              from 'react-redux'
import Div                        from 'shared/Basic/Div'
import LinkSwitch                 from 'shared/Basic/LinkSwitch'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper      from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import DashboardInfo              from 'shared/Layout/Dashboard/DashboardInfo'
import {adminContentWrapperStyle} from 'shared/Layout/styles'

const Manage = () => {
    const {confirmDelete} = useSelector(state => state.site)
    const TAX_PATH = '/admin/shop/taxonomy'

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirmDelete])


    return (
        <ContentWrapper theme={adminContentWrapperStyle}>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Shop Taxonomy'}
                    description={'Click to edit.'}
                />
                <Div theme={{display: 'flex', flexDirection: 'column'}}>
                    <LinkSwitch url={`${TAX_PATH}/product-category`}>
                        Product Category
                    </LinkSwitch>
                </Div>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Manage




// import List                       from 'features/shop/admin/product/taxonomy/category/List'
// import React, {useEffect}         from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import ContentWrapper             from 'shared/Layout/ContentWrapper'
// import AdminDashboardWrapper      from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
// import DashboardInfo              from 'shared/Layout/Dashboard/DashboardInfo'
// import {slugify}                  from 'utils/helpers'
//
// const Manage = () => {
//     const {productCategories} = useSelector(state => state.shop)
//     const {confirmDelete} = useSelector(state => state.site)
//     const dispatch = useDispatch()
//
//     useEffect(() => {
//         dispatch({type: 'shop/getProductCategories'})
//
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [confirmDelete])
//
//     const taxonomies = [
//         {
//             title: 'Product Categories',
//             slug: slugify('Product Categories'),
//             items: productCategories,
//             feature: 'shop'
//         }
//     ]
//
//     return (
//         <ContentWrapper>
//             <AdminDashboardWrapper>
//                 <DashboardInfo
//                     heading={'Manage Product Taxonomy'}
//                     description={'Click to edit.'}
//                 />
//                 <List taxonomies={taxonomies}/>
//             </AdminDashboardWrapper>
//         </ContentWrapper>
//     )
// }
//
// export default Manage
