import {AnimatePresence, AnimateSharedLayout} from 'framer-motion'
import React, {lazy, Suspense, useContext}    from 'react'
import {Route, Switch}                        from 'react-router-dom'
import AdminRoute                             from 'shared/Basic/AdminRoute'
import MotionDiv                              from 'shared/Basic/MotionDiv'
import PrivateRoute                           from 'shared/Basic/PrivateRoute'
import Fallback                               from 'shared/Layout/Fallback'
import {TransitionAnimations}                 from './TransitionController'

const Sitemap = lazy(() => import('./Sitemap'))
const Home = lazy(() => import('features/site/Home'))
const AdminDashboard = lazy(() => import('features/admin/AdminDashboard'))
const UserDashboard = lazy(() => import('features/user/dashboard'))
const CreatePlace = lazy(() => import('features/admin/place/Create'))
const CreateProduct = lazy(() => import('features/admin/product/Create'))
const CreateProductCategory = lazy(() => import('features/admin/taxonomy/productCategory/Create'))
const CreateUser = lazy(() => import('features/admin/user/Create'))
const ManagePlaces = lazy(() => import('features/admin/place/Manage'))
const ManageUsers= lazy(() => import('features/admin/user/Manage'))
const ManageOrders = lazy(() => import('features/admin/order/Manage'))
const ManageShop = lazy(() => import('features/admin/product/Manage'))
const ManageTaxonomy = lazy(() => import('features/admin/taxonomy/Manage'))
const UpdatePlace = lazy(() => import('features/admin/place/Update'))
const UpdateProduct = lazy(() => import('features/admin/product/Update'))
const UpdateProductCategory = lazy(() => import('features/admin/taxonomy/productCategory/Update'))
const UpdateUser = lazy(() => import('features/admin/user/Update'))
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


