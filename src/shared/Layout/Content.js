import {AnimatePresence, AnimateSharedLayout}      from 'framer-motion'
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
const CreatePost = lazy(() => import('../../features/admin/CreatePost'))
const CreateProduct = lazy(() => import('../../features/admin/CreateProduct'))
const CreateProductCategory = lazy(() => import('../../features/admin/CreateProductCategory'))
const ManageMarketplace = lazy(() => import('../../features/admin/ManagePosts'))
const ManageOrders = lazy(() => import('../../features/admin/ManageOrders'))
const ManageShop = lazy(() => import('../../features/admin/ManageShop'))
const ManageTaxonomy = lazy(() => import('../../features/admin/ManageTaxonomy'))
const UpdatePost = lazy(() => import('../../features/admin/UpdatePost'))
const UpdateProduct = lazy(() => import('../../features/admin/UpdateProduct'))
const UpdateProductCategory = lazy(() => import('../../features/admin/UpdateProductCategory'))
const Post = lazy(() => import('../../features/post/Post'))
const Marketplace = lazy(() => import('../../features/post/Posts'))
const Product = lazy(() => import('../../features/shop/Product'))
const Shop = lazy(() => import('../../features/shop/Shop'))
const NotFound = lazy(() => import('../../features/site/NotFound'))
const SignIn = lazy(() => import('../../features/user/SignIn'))
const SignUp = lazy(() => import('../../features/user/SignUp'))
const UpdateProfile = lazy(() => import('../../features/user/UpdateProfile'))
const UserDashboard = lazy(() => import('../../features/user/UserDashboard'))
const Home = lazy(() => import('../../features/site/Home'))

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
                            <Route path="/posts" exact component={Marketplace}/>
                            <Route path="/posts/:slug" exact component={Post}/>
                            <Route path="/shop" exact component={Shop}/>
                            <Route path="/shop/:slug" exact component={Product}/>
                            <PrivateRoute path="/settings/profile" exact component={UpdateProfile}/>
                            <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
                            <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
                            <AdminRoute path="/admin/shop" exact component={ManageShop}/>
                            <AdminRoute path="/admin/taxonomy" exact component={ManageTaxonomy}/>
                            <AdminRoute path="/admin/posts" exact component={ManageMarketplace}/>
                            <AdminRoute path="/admin/product/update/:slug" exact component={UpdateProduct}/>
                            <AdminRoute path="/admin/product-category/update/:slug" exact
                                        component={UpdateProductCategory}/>
                            <AdminRoute path="/admin/posts/update/:slug" exact component={UpdatePost}/>
                            <AdminRoute path="/admin/orders" exact component={ManageOrders}/>
                            <AdminRoute path="/create/category" exact component={CreateProductCategory}/>
                            <AdminRoute path="/create/product" exact component={CreateProduct}/>
                            <AdminRoute path="/create/product-category" exact component={CreateProductCategory}/>
                            <AdminRoute path="/create/post" exact component={CreatePost}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Suspense>
                </MotionDiv>
            </AnimatePresence>
        </AnimateSharedLayout>
    )
}

export default Content


