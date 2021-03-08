import {AnimatePresence, AnimateSharedLayout} from 'framer-motion'
import React, {lazy, Suspense, useContext}    from 'react'
import {Route, Switch}                        from 'react-router-dom'
import AdminRoute                             from 'shared/Basic/AdminRoute'
import MotionDiv                              from 'shared/Basic/MotionDiv'
import PrivateRoute                           from 'shared/Basic/PrivateRoute'
import Fallback                               from 'shared/Layout/Fallback'
import {TransitionAnimations}                 from './TransitionController'

const Sitemap = lazy(() => import('./Sitemap'))
const AdminDashboard = lazy(() => import('features/admin/AdminDashboard'))
const UserDashboard = lazy(() => import('features/user/dashboard'))
const CreatePlace = lazy(() => import('features/admin/place/Create'))
const CreateProduct = lazy(() => import('features/admin/product/Create'))
const CreateProductCategory = lazy(() => import('features/admin/taxonomy/productCategory/Create'))
const ManagePlaces = lazy(() => import('features/admin/place/Manage'))
const ManageOrders = lazy(() => import('features/admin/order/Manage'))
const ManageShop = lazy(() => import('features/admin/product/Manage'))
const ManageTaxonomy = lazy(() => import('features/admin/taxonomy/Manage'))
const UpdatePlace = lazy(() => import('features/admin/place/Update'))
const UpdateProduct = lazy(() => import('features/admin/product/Update'))
const UpdateProductCategory = lazy(() => import('features/admin/taxonomy/productCategory/Update'))
const Place = lazy(() => import('features/place/Place'))
const Places = lazy(() => import('features/place/Places'))
const Product = lazy(() => import('features/shop/Product'))
const Shop = lazy(() => import('features/shop/Shop'))
const FilteredProduct = lazy(() => import('features/shop/FilteredShop'))
const NotFound = lazy(() => import('features/site/NotFound'))
const SignIn = lazy(() => import('features/user/SignIn'))
const SignUp = lazy(() => import('features/user/SignUp'))
const UserOrders = lazy(() => import('features/user/dashboard/Orders'))
const UserSettings = lazy(() => import('features/user/dashboard/Settings'))

const Routes = () => {
    const {contentAnimation, currentPath} = useContext(TransitionAnimations)


    return (
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                <MotionDiv animate={contentAnimation} theme={{width: '100%'}}>
                    <Suspense fallback={<Fallback/>}>
                        <Switch location={{pathname: currentPath}}>
                            <Route path="/" exact component={Places} sitemapIndex={true}/>
                            <Route path="/signup" exact component={SignUp} sitemapIndex={true}/>
                            <Route path="/signin" exact component={SignIn} sitemapIndex={true}/>
                            <Route path="/places" exact component={Places} sitemapIndex={true}/>
                            <Route path="/places/:slug" exact component={Place} sitemapIndex={true}/>
                            <Route path="/shop" exact component={Shop} sitemapIndex={true}/>
                            <Route path="/shop/:slug" exact component={Product} sitemapIndex={true}/>
                            <Route path="/shop/category/:slug" exact component={FilteredProduct} sitemapIndex={true}/>
                            <PrivateRoute path="/dashboard" exact component={UserDashboard}/>
                            <PrivateRoute path="/dashboard/orders" exact component={UserOrders}/>
                            <PrivateRoute path="/dashboard/settings" exact component={UserSettings}/>
                            <AdminRoute path="/admin" exact component={AdminDashboard}/>
                            <AdminRoute path="/admin/shop" exact component={ManageShop}/>
                            <AdminRoute path="/admin/taxonomy" exact component={ManageTaxonomy}/>
                            <AdminRoute path="/admin/product-category" exact component={ManageTaxonomy}/>
                            <AdminRoute path="/admin/places" exact component={ManagePlaces}/>
                            <AdminRoute path="/admin/places/update/:slug" exact component={UpdatePlace}/>
                            <AdminRoute path="/create/place" exact component={CreatePlace}/>
                            <AdminRoute path="/admin/shop/update/:slug" exact component={UpdateProduct}/>
                            <AdminRoute path="/admin/product-category/update/:slug" exact
                                        component={UpdateProductCategory}/>
                            <AdminRoute path="/admin/orders" exact component={ManageOrders}/>
                            <AdminRoute path="/create/category" exact component={CreateProductCategory}/>
                            <AdminRoute path="/create/product" exact component={CreateProduct}/>
                            <AdminRoute path="/create/product-category" exact component={CreateProductCategory}/>
                            <AdminRoute path="/sitemap" exact component={Sitemap}/>
                            <Route component={NotFound} sitemapIndex={true}/>
                        </Switch>
                    </Suspense>
                </MotionDiv>
            </AnimatePresence>
        </AnimateSharedLayout>
    )
}

export default Routes


