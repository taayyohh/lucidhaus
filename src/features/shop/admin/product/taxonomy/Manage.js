import AdminDashboardWrapper from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import List                  from 'features/shop/admin/product/taxonomy/category/List'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import DeletePrompt               from 'shared/Controls/DeletePrompt'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import DashboardInfo              from 'shared/Layout/Dashboard/DashboardInfo'
import {slugify}                  from 'utils/helpers'

const Manage = () => {
    const {productCategories} = useSelector(state => state.shop)
    const {confirmDelete} = useSelector(state => state.site)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'shop/getProductCategories'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirmDelete])

    const taxonomies = [
        {
            title: 'Product Categories',
            slug: slugify('Product Categories'),
            items: productCategories,
            feature: 'shop'
        }
    ]

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <DashboardInfo
                    heading={'Manage Product Taxonomy'}
                    description={'Click to edit.'}
                />
                <List taxonomies={taxonomies}/>
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Manage
