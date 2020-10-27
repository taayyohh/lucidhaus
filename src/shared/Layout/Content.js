import {AnimatePresence}      from 'framer-motion'
import React, {useContext}    from 'react'
import {
    Route,
    Switch
}                            from 'react-router'
import AdminDashboard        from '../../features/admin/AdminDashboard'
import CreateBusiness        from '../../features/admin/CreateBusiness'
import CreateProductCategory from '../../features/admin/CreateProductCategory'
import CreateProduct         from '../../features/admin/CreateProduct'
import ManageMarketplace     from '../../features/admin/ManageMarketplace'
import ManageOrders          from '../../features/admin/ManageOrders'
import ManageShop            from '../../features/admin/ManageShop'
import ManageTaxonomy        from '../../features/admin/ManageTaxonomy'
import UpdateBusiness        from '../../features/admin/UpdateBusiness'
import UpdateCategory        from '../../features/admin/UpdateCategory'
import UpdateProduct         from '../../features/admin/UpdateProduct'
import Business              from '../../features/business/Business'
import Marketplace           from '../../features/business/Marketplace'
import Product               from '../../features/shop/Product'
import Shop                  from '../../features/shop/Shop'
import NotFound              from '../../features/site/NotFound'
import Profile               from '../../features/user/Profile'
import SignIn                from '../../features/user/SignIn'
import SignUp                 from '../../features/user/SignUp'
import UserDashboard from '../../features/user/UserDashboard'
import AdminRoute   from '../Admin/AdminRoute'
import PrivateRoute from '../Admin/PrivateRoute'
import MotionDiv    from '../Basic/MotionDiv'
import {TransitionAnimations} from '../Containers/TransitionController'

const Content = () => {
    const {contentAnimation, currentPath} = useContext(TransitionAnimations)

    return (
        <AnimatePresence>
            <MotionDiv animate={contentAnimation} theme={{width: '100%'}}>
                <Switch location={{pathname: currentPath}}>
                    <Route path="/signup" exact component={SignUp}/>
                    <Route path="/signin" exact component={SignIn}/>
                    <Route path="/marketplace" exact component={Marketplace}/>
                    <Route path="/marketplace/:slug" exact component={Business}/>
                    <Route path="/shop" exact component={Shop}/>
                    <Route path="/shop/:slug" exact component={Product}/>
                    <PrivateRoute path="/settings/profile" exact component={Profile}/>
                    <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
                    <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
                    <AdminRoute path="/admin/shop" exact component={ManageShop}/>
                    <AdminRoute path="/admin/taxonomy" exact component={ManageTaxonomy} />
                    <AdminRoute path="/admin/marketplace" exact component={ManageMarketplace}/>
                    <AdminRoute path="/admin/product/update/:slug" exact component={UpdateProduct}/>
                    <AdminRoute path="/admin/marketplace/update/:slug" exact component={UpdateBusiness}/>
                    <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory}/>
                    <AdminRoute path="/admin/orders" exact component={ManageOrders}/>
                    <AdminRoute path="/create/category" exact component={CreateProductCategory}/>
                    <AdminRoute path="/create/product" exact component={CreateProduct}/>
                    <AdminRoute path="/create/product-category" exact component={CreateProductCategory}/>
                    <AdminRoute path="/create/business" exact component={CreateBusiness}/>
                    <Route component={NotFound}/>
                </Switch>
            </MotionDiv>
        </AnimatePresence>
    )
}

export default Content


