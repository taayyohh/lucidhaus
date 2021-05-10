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
import Fallback               from 'shared/Layout/Fallback'
import {TransitionAnimations} from './TransitionController'

const Sitemap = lazy(() => import('./Sitemap'))
const AdminDashboard = lazy(() => import('features/admin/AdminDashboard'))
const UserDashboard = lazy(() => import('features/user/dashboard'))
const CreatePost = lazy(() => import('features/admin/post/Create'))
const CreateArtist = lazy(() => import('features/admin/artist/Create'))
const CreateCollaborator = lazy(() => import('features/admin/collaborator/Create'))
const CreateEvent = lazy(() => import('features/admin/event/Create'))
const CreateAlbum = lazy(() => import('features/admin/album/Create'))
const CreateProduct = lazy(() => import('features/admin/product/Create'))
const CreateProductCategory = lazy(() => import('features/admin/taxonomy/productCategory/Create'))
const ManagePosts = lazy(() => import('features/admin/post/Manage'))
const ManageArtists = lazy(() => import('features/admin/artist/Manage'))
const ManageCollaborators = lazy(() => import('features/admin/collaborator/Manage'))
const ManageEvents = lazy(() => import('features/admin/event/Manage'))
const ManageAlbums = lazy(() => import('features/admin/album/Manage'))
const ManageOrders = lazy(() => import('features/admin/order/Manage'))
const ManageShop = lazy(() => import('features/admin/product/Manage'))
const ManageTaxonomy = lazy(() => import('features/admin/taxonomy/Manage'))
const UpdateArtist = lazy(() => import('features/admin/artist/Update'))
const UpdateCollaborator = lazy(() => import('features/admin/collaborator/Update'))
const UpdateEvent = lazy(() => import('features/admin/event/Update'))
const UpdateAlbum = lazy(() => import('features/admin/album/Update'))
const UpdatePost = lazy(() => import('features/admin/post/Update'))
const UpdateProduct = lazy(() => import('features/admin/product/Update'))
const UpdateProductCategory = lazy(() => import('features/admin/taxonomy/productCategory/Update'))
const Artist = lazy(() => import('features/artist/Artist'))
const Artists = lazy(() => import('features/artist/Artists'))
const Collaborator = lazy(() => import('features/collaborator/Collaborator'))
const Collaborators = lazy(() => import('features/collaborator/Collaborators'))
const Event = lazy(() => import('features/event/Event'))
const Events = lazy(() => import('features/event/Events'))
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

const Routes = () => {
    const {contentAnimation, currentPath} = useContext(TransitionAnimations)


    return (
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                <MotionDiv animate={contentAnimation} theme={{width: '100%'}}>
                    <Suspense fallback={<Fallback/>}>
                        <Switch location={{pathname: currentPath}}>
                            <Route path="/" exact component={Posts} sitemapIndex={true}/>
                            <Route path="/signup" exact component={SignUp} sitemapIndex={true}/>
                            <Route path="/signin" exact component={SignIn} sitemapIndex={true}/>
                            <Route path="/artists" exact component={Artists} sitemapIndex={true}/>
                            <Route path="/artists/:slug" exact component={Artist} sitemapIndex={true}/>
                            <Route path="/collaborators" exact component={Collaborators} sitemapIndex={true}/>
                            <Route path="/collaborators/:slug" exact component={Collaborator} sitemapIndex={true}/>
                            <Route path="/events" exact component={Events} sitemapIndex={true}/>
                            <Route path="/events/:slug" exact component={Event} sitemapIndex={true}/>
                            <Route path="/music" exact component={Albums} sitemapIndex={true}/>
                            <Route path="/music/:slug" exact component={Album} sitemapIndex={true}/>
                            <Route path="/posts" exact component={Posts} sitemapIndex={true}/>
                            <Route path="/posts/:slug" exact component={Post} sitemapIndex={true}/>
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
                            <AdminRoute path="/admin/posts" exact component={ManagePosts}/>
                            <AdminRoute path="/admin/artists" exact component={ManageArtists}/>
                            <AdminRoute path="/admin/artists/update/:slug" exact component={UpdateArtist}/>
                            <AdminRoute path="/create/artist" exact component={CreateArtist}/>
                            <AdminRoute path="/admin/collaborators" exact component={ManageCollaborators}/>
                            <AdminRoute path="/admin/collaborators/update/:slug" exact component={UpdateCollaborator}/>
                            <AdminRoute path="/create/collaborator" exact component={CreateCollaborator}/>

                            <AdminRoute path="/admin/events" exact component={ManageEvents}/>
                            <AdminRoute path="/admin/events/update/:slug" exact component={UpdateEvent}/>
                            <AdminRoute path="/create/event" exact component={CreateEvent}/>

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


