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
}                             from 'react-router-dom'
import AdminRoute             from 'shared/Basic/AdminRoute'
import MotionDiv              from 'shared/Basic/MotionDiv'
import PrivateRoute           from 'shared/Basic/PrivateRoute'
import {TransitionAnimations} from 'shared/Containers/TransitionController'
import Fallback               from 'shared/Layout/Fallback'

const AdminDashboard = lazy(() => import('features/admin/AdminDashboard'))
const UserDashboard = lazy(() => import('features/user/dashboard'))
const CreatePost = lazy(() => import('features/admin/post/Create'))
const CreateArtist = lazy(() => import('features/admin/artist/Create'))
const CreateAlbum = lazy(() => import('features/admin/album/Create'))
const CreateProduct = lazy(() => import('features/admin/product/Create'))
const CreateProductCategory = lazy(() => import('features/admin/taxonomy/productCategory/Create'))
const ManagePosts = lazy(() => import('features/admin/post/Manage'))
const ManageArtists = lazy(() => import('features/admin/artist/Manage'))
const ManageAlbums = lazy(() => import('features/admin/album/Manage'))
const ManageOrders = lazy(() => import('features/admin/order/Manage'))
const ManageShop = lazy(() => import('features/admin/product/Manage'))
const ManageTaxonomy = lazy(() => import('features/admin/taxonomy/Manage'))
const UpdateArtist = lazy(() => import('features/admin/artist/Update'))
const UpdateAlbum = lazy(() => import('features/admin/album/Update'))
const UpdatePost = lazy(() => import('features/admin/post/Update'))
const UpdateProduct = lazy(() => import('features/admin/product/Update'))
const UpdateProductCategory = lazy(() => import('features/admin/taxonomy/productCategory/Update'))
const Artist = lazy(() => import('features/artist/Artist'))
const Artists = lazy(() => import('features/artist/Artists'))
const Album = lazy(() => import('features/album/Album'))
const Albums = lazy(() => import('features/album/Albums'))
const Post = lazy(() => import('features/post/Post'))
const Posts = lazy(() => import('features/post/Posts'))
const Product = lazy(() => import('features/shop/Product'))
const Shop = lazy(() => import('features/shop/Shop'))
const FilteredProduct = lazy(() => import('features/shop/FilteredShop'))
const NotFound = lazy(() => import('features/site/NotFound'))
const SignIn = lazy(() => import('features/user/SignIn'))
const SignUp = lazy(() => import('features/user/SignUp'))
const UserOrders = lazy(() => import('features/user/dashboard/Orders'))
const UserSettings = lazy(() => import('features/user/dashboard/Settings'))
const Home = lazy(() => import('features/site/Home'))

const Routes = () => {
    const {contentAnimation, currentPath} = useContext(TransitionAnimations)


    return (
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                <MotionDiv animate={contentAnimation} theme={{width: '100%'}}>
                    <Suspense fallback={<Fallback/>}>
                        <Switch location={{pathname: currentPath}}>
                            <Route path="/" exact component={Posts}/>
                            <Route path="/signup" exact component={SignUp}/>
                            <Route path="/signin" exact component={SignIn}/>
                            <Route path="/artists" exact component={Artists}/>
                            <Route path="/artists/:slug" exact component={Artist}/>
                            <Route path="/music" exact component={Albums}/>
                            <Route path="/music/:slug" exact component={Album}/>
                            <Route path="/posts" exact component={Posts}/>
                            <Route path="/posts/:slug" exact component={Post}/>
                            <Route path="/shop" exact component={Shop}/>
                            <Route path="/shop/:slug" exact component={Product}/>
                            <Route path="/shop/category/:slug" exact component={FilteredProduct} />
                            <PrivateRoute path="/dashboard" exact component={UserDashboard}/>
                            <PrivateRoute path="/dashboard/orders" exact component={UserOrders}/>
                            <PrivateRoute path="/dashboard/settings" exact component={UserSettings}/>
                            <AdminRoute path="/admin" exact component={AdminDashboard}/>
                            <AdminRoute path="/admin/shop" exact component={ManageShop}/>
                            <AdminRoute path="/admin/taxonomy" exact component={ManageTaxonomy}/>
                            <AdminRoute path="/admin/product-category" exact component={ManageTaxonomy}/>
                            <AdminRoute path="/admin/posts" exact component={ManagePosts}/>
                            <AdminRoute path="/admin/artists" exact component={ManageArtists}/>
                            <AdminRoute path="/admin/artists/update/:slug" exact component={UpdateArtist}/>
                            <AdminRoute path="/create/artist" exact component={CreateArtist}/>
                            <AdminRoute path="/admin/music" exact component={ManageAlbums}/>
                            <AdminRoute path="/admin/music/update/:slug" exact component={UpdateAlbum}/>
                            <AdminRoute path="/create/album" exact component={CreateAlbum}/>
                            <AdminRoute path="/admin/shop/update/:slug" exact component={UpdateProduct}/>
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

export default Routes


