import {AnimatePresence, AnimateSharedLayout} from 'framer-motion'
import React, {lazy, Suspense, useContext}    from 'react'
import {Route, Switch}                        from 'react-router-dom'
import AdminRoute                             from 'shared/Basic/AdminRoute'
import MotionDiv                              from 'shared/Basic/MotionDiv'
import PrivateRoute                           from 'shared/Basic/PrivateRoute'
import Fallback                               from 'shared/Layout/Fallback'
import {TransitionAnimations}                 from './TransitionController'

const Sitemap = lazy(() => import('./Sitemap'))
const Home = lazy(() => import('features/site/views/Home'))
const AdminDashboard = lazy(() => import('features/admin/views/AdminDashboard'))
const UserDashboard = lazy(() => import('features/user/views/dashboard'))
const CreatePlace = lazy(() => import('features/place/admin/views/Create'))
const CreateProduct = lazy(() => import('features/shop/admin/product/views/Create'))
const CreateProductCategory = lazy(() => import('features/shop/admin/product/taxonomy/category/Create'))
const CreateUser = lazy(() => import('features/user/admin/views/Create'))
const ManagePlaces = lazy(() => import('features/place/admin/views/Manage'))
const ManageUsers= lazy(() => import('features/user/admin/views/Manage'))
const ManageOrders = lazy(() => import('features/shop/admin/order/views/Manage'))
const ManageShop = lazy(() => import('features/shop/admin/product/views/Manage'))
const ManageTaxonomy = lazy(() => import('features/site/admin/Manage'))
const UpdatePlace = lazy(() => import('features/place/admin/views/Update'))
const UpdateProduct = lazy(() => import('features/shop/admin/product/views/Update'))
const UpdateProductCategory = lazy(() => import('features/shop/admin/product/taxonomy/category/Update'))
const UpdateUser = lazy(() => import('features/user/admin/views/Update'))
const Place = lazy(() => import('features/place/views/Place'))
const Places = lazy(() => import('features/place/views/Places'))
const Product = lazy(() => import('features/shop/views/Product'))
const Shop = lazy(() => import('features/shop/views/Shop'))
const FilteredProduct = lazy(() => import('features/shop/views/FilteredShop'))
const NotFound = lazy(() => import('features/site/views/NotFound'))
const SignIn = lazy(() => import('features/site/views/SignIn'))
const SignUp = lazy(() => import('features/site/views/SignUp'))
const UserOrders = lazy(() => import('features/user/views/dashboard/Orders'))
const UserSettings = lazy(() => import('features/user/views/dashboard/Settings'))

const Routes = () => {
    const {contentAnimation, currentPath} = useContext(TransitionAnimations)

    return (
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                <MotionDiv animate={contentAnimation} theme={{width: '100%'}}>
                    <Suspense fallback={<Fallback/>}>
                        <Switch location={{pathname: currentPath}}>
                            <Route path="/" exact component={Home} />
                            <Route path="/signup" exact component={SignUp} />
                            <Route path="/signin" exact component={SignIn} />
                            <Route path="/places" exact component={Places} />
                            <Route path="/places/:slug" exact component={Place} />
                            <Route path="/shop" exact component={Shop} />
                            <Route path="/shop/:slug" exact component={Product} />
                            <Route path="/shop/category/:slug" exact component={FilteredProduct} />
                            <PrivateRoute path="/dashboard" exact component={UserDashboard}/>
                            <PrivateRoute path="/dashboard/orders" exact component={UserOrders}/>
                            <PrivateRoute path="/dashboard/settings" exact component={UserSettings}/>
                            <AdminRoute path="/admin" exact component={AdminDashboard}/>
                            <AdminRoute path="/admin/shop" exact component={ManageShop}/>
                            <AdminRoute path="/admin/product-category" exact component={ManageTaxonomy}/>
                            <AdminRoute path="/admin/product-category/update/:slug" exact component={UpdateProductCategory}/>
                            <AdminRoute path="/create/product-category" exact component={CreateProductCategory}/>
                            <AdminRoute path="/create/category" exact component={CreateProductCategory}/>
                            <AdminRoute path="/admin/taxonomy" exact component={ManageTaxonomy}/>
                            <AdminRoute path="/admin/places" exact component={ManagePlaces}/>
                            <AdminRoute path="/admin/places/update/:slug" exact component={UpdatePlace}/>
                            <AdminRoute path="/create/place" exact component={CreatePlace}/>
                            <AdminRoute path="/admin/users" exact component={ManageUsers}/>
                            <AdminRoute path="/admin/users/update/:slug" exact component={UpdateUser}/>
                            <AdminRoute path="/create/user" exact component={CreateUser}/>
                            <AdminRoute path="/admin/orders" exact component={ManageOrders}/>
                            <AdminRoute path="/admin/shop/update/:slug" exact component={UpdateProduct}/>
                            <AdminRoute path="/create/product" exact component={CreateProduct}/>
                            <AdminRoute path="/sitemap" exact component={Sitemap}/>
                            <Route component={NotFound} />
                        </Switch>
                    </Suspense>
                </MotionDiv>
            </AnimatePresence>
        </AnimateSharedLayout>
    )
}

export default Routes


