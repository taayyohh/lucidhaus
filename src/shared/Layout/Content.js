import {
    AnimatePresence,
    AnimateSharedLayout
}                             from 'framer-motion'
import React, {
    lazy,
    Suspense,
    useContext
}                             from 'react'
import {
    Route,
    Switch
}                             from 'react-router'
import AdminDashboard         from '../../features/admin/AdminDashboard'
import CreateBusiness         from '../../features/admin/CreateBusiness'
import CreateProduct          from '../../features/admin/CreateProduct'
import CreateProductCategory  from '../../features/admin/CreateProductCategory'
import ManageMarketplace      from '../../features/admin/ManageMarketplace'
import ManageOrders           from '../../features/admin/ManageOrders'
import ManageShop             from '../../features/admin/ManageShop'
import ManageTaxonomy         from '../../features/admin/ManageTaxonomy'
import UpdateBusiness         from '../../features/admin/UpdateBusiness'
import UpdateProduct          from '../../features/admin/UpdateProduct'
import UpdateProductCategory  from '../../features/admin/UpdateProductCategory'
import Business               from '../../features/business/Business'
import Marketplace            from '../../features/business/Marketplace'
import Product                from '../../features/shop/Product'
import Shop                   from '../../features/shop/Shop'
import NotFound               from '../../features/site/NotFound'
import SignIn                 from '../../features/user/SignIn'
import SignUp                 from '../../features/user/SignUp'
import UpdateProfile          from '../../features/user/UpdateProfile'
import UserDashboard          from '../../features/user/UserDashboard'
import AdminRoute             from '../Admin/AdminRoute'
import PrivateRoute           from '../Admin/PrivateRoute'
import MotionDiv              from '../Basic/MotionDiv'
import {TransitionAnimations} from '../Containers/TransitionController'

const Home = lazy(() => import('../Templates/Home'))


const Content = () => {
    const {contentAnimation, currentPath} = useContext(TransitionAnimations)

    return (
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                <MotionDiv animate={contentAnimation} theme={{width: '100%'}}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch location={{pathname: currentPath}}>
                            <Route path="/" exact component={Home}/>
                            <Route path="/signup" exact component={SignUp}/>
                            <Route path="/signin" exact component={SignIn}/>
                            <Route path="/marketplace" exact component={Marketplace}/>
                            <Route path="/marketplace/:slug" exact component={Business}/>
                            <Route path="/shop" exact component={Shop}/>
                            <Route path="/shop/:slug" exact component={Product}/>
                            <PrivateRoute path="/settings/profile" exact component={UpdateProfile}/>
                            <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
                            <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
                            <AdminRoute path="/admin/shop" exact component={ManageShop}/>
                            <AdminRoute path="/admin/taxonomy" exact component={ManageTaxonomy}/>
                            <AdminRoute path="/admin/marketplace" exact component={ManageMarketplace}/>
                            <AdminRoute path="/admin/product/update/:slug" exact component={UpdateProduct}/>
                            <AdminRoute path="/admin/product-category/update/:slug" exact
                                        component={UpdateProductCategory}/>
                            <AdminRoute path="/admin/marketplace/update/:slug" exact component={UpdateBusiness}/>
                            <AdminRoute path="/admin/orders" exact component={ManageOrders}/>
                            <AdminRoute path="/create/category" exact component={CreateProductCategory}/>
                            <AdminRoute path="/create/product" exact component={CreateProduct}/>
                            <AdminRoute path="/create/product-category" exact component={CreateProductCategory}/>
                            <AdminRoute path="/create/business" exact component={CreateBusiness}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Suspense>
                </MotionDiv>
            </AnimatePresence>
        </AnimateSharedLayout>
    )
}

export default Content


