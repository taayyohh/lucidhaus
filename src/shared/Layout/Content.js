import {AnimatePresence}      from 'framer-motion'
import React, {
    lazy,
    Suspense,
    useContext
}                             from 'react'
import {
    Route,
    Switch
}                             from 'react-router'
import AdminRoute             from '../Admin/AdminRoute'
import PrivateRoute           from '../Admin/PrivateRoute'
import MotionDiv              from '../Basic/MotionDiv'
import {TransitionAnimations} from '../Containers/TransitionController'

const AdminDashboard = lazy(() => import('../../features/admin/AdminDashboard'))
const CreateBusiness = lazy(() => import('../../features/admin/CreateBusiness'))
const CreateProduct = lazy(() => import('../../features/admin/CreateProduct'))
const CreateProductCategory = lazy(() => import('../../features/admin/CreateProductCategory'))
const ManageMarketplace = lazy(() => import('../../features/admin/ManageMarketplace'))
const ManageOrders = lazy(() => import('../../features/admin/ManageOrders'))
const ManageShop = lazy(() => import('../../features/admin/ManageShop'))
const ManageTaxonomy = lazy(() => import('../../features/admin/ManageTaxonomy'))
const UpdateBusiness = lazy(() => import('../../features/admin/UpdateBusiness'))
const UpdateProduct = lazy(() => import('../../features/admin/UpdateProduct'))
const UpdateProductCategory = lazy(() => import('../../features/admin/UpdateProductCategory'))
const Business = lazy(() => import('../../features/business/Business'))
const Marketplace = lazy(() => import('../../features/business/Marketplace'))
const Product = lazy(() => import('../../features/shop/Product'))
const Shop = lazy(() => import('../../features/shop/Shop'))
const NotFound = lazy(() => import('../../features/site/NotFound'))
const SignIn = lazy(() => import('../../features/user/SignIn'))
const SignUp = lazy(() => import('../../features/user/SignUp'))
const UpdateProfile = lazy(() => import('../../features/user/UpdateProfile'))
const UserDashboard = lazy(() => import('../../features/user/UserDashboard'))
const Home = lazy(() => import('../Templates/Home'))


const Content = () => {
    const {contentAnimation, currentPath} = useContext(TransitionAnimations)

    return (
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
    )
}

export default Content


