import {AnimatePresence, AnimateSharedLayout} from 'framer-motion'
import React, {lazy, Suspense, useContext}    from 'react'
import {Route, Switch}                        from 'react-router-dom'
import AdminRoute                             from 'shared/Basic/AdminRoute'
import MotionDiv                              from 'shared/Basic/MotionDiv'
import PrivateRoute                           from 'shared/Basic/PrivateRoute'
import Fallback                               from 'shared/Layout/Fallback'
import {TransitionAnimations}                 from './TransitionController'

const SignIn = lazy(() => import('features/site/views/SignIn'))
const SignUp = lazy(() => import('features/site/views/SignUp'))
const AccountDetails = lazy(() => import('features/user/admin/views/Account'))
const VerifyEmail = lazy(() => import('features/site/views/VerifyEmail'))
const Recover = lazy(() => import('features/site/views/Recover'))
const Reset = lazy(() => import('features/site/views/Reset'))
const NotFound = lazy(() => import('features/site/views/NotFound'))
const Privacy = lazy(() => import('features/site/views/Privacy'))
const Terms = lazy(() => import('features/site/views/Terms'))


const AdminDashboard = lazy(() => import('shared/Layout/Dashboard/admin/AdminDashboard'))
const UserDashboard = lazy(() => import('features/user/views/dashboard'))
const ManageUsers = lazy(() => import('features/user/admin/views/Manage'))
const UpdateUser = lazy(() => import('features/user/admin/views/Update'))


const ManageEvents = lazy(() => import('features/event/admin/views/Manage'))
const CreateEvent = lazy(() => import('features/event/admin/views/Create'))
const UpdateEvent = lazy(() => import('features/event/admin/views/Update'))
const Event = lazy(() => import('features/event/views/Event'))
const Events = lazy(() => import('features/event/views/Events'))

const ManageAlbums = lazy(() => import('features/album/admin/views/Manage'))
const CreateAlbum = lazy(() => import('features/album/admin/views/Create'))
const UpdateAlbum = lazy(() => import('features/album/admin/views/Update'))
const Album = lazy(() => import('features/album/views/Album'))
const Albums = lazy(() => import('features/album/views/Albums'))

const ManageCollaborators = lazy(() => import('features/collaborator/admin/views/Manage'))
const CreateCollaborator = lazy(() => import('features/collaborator/admin/views/Create'))
const UpdateCollaborator = lazy(() => import('features/collaborator/admin/views/Update'))
const Collaborator = lazy(() => import('features/collaborator/views/Collaborator'))
const Collaborators = lazy(() => import('features/collaborator/views/Collaborators'))

const ManageArtists = lazy(() => import('features/artist/admin/views/Manage'))
const CreateArtist = lazy(() => import('features/artist/admin/views/Create'))
const UpdateArtist = lazy(() => import('features/artist/admin/views/Update'))
const Artist = lazy(() => import('features/artist/views/Artist'))
const Artists = lazy(() => import('features/artist/views/Artists'))

const CreateProduct = lazy(() => import('features/shop/admin/product/views/Create'))
const CreateProductCategory = lazy(() => import('features/shop/admin/product/taxonomy/category/Create'))
const CreateUser = lazy(() => import('features/user/admin/views/Create'))
const ManageProductCategory = lazy(() => import('features/shop/admin/product/taxonomy/category/Manage'))
const ManageShopTaxonomy = lazy(() => import('features/shop/admin/product/taxonomy/Manage'))

const Shop = lazy(() => import('features/shop/views/Shop'))
const ManageShop = lazy(() => import('features/shop/admin/product/views/Manage'))
const ManageOrders = lazy(() => import('features/shop/admin/order/views/Manage'))
const UserOrders = lazy(() => import('features/user/views/dashboard/Orders'))
const Product = lazy(() => import('features/shop/views/Product'))
const UpdateProduct = lazy(() => import('features/shop/admin/product/views/Update'))
const UpdateProductCategory = lazy(() => import('features/shop/admin/product/taxonomy/category/Update'))
const FilteredProduct = lazy(() => import('features/shop/views/FilteredShop'))


const Routes = () => {
    const {contentAnimation, currentPath} = useContext(TransitionAnimations)

    return (
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                <MotionDiv animate={contentAnimation} theme={{width: '100%'}}>
                    <Suspense fallback={<Fallback/>}>
                        <Switch location={{pathname: currentPath}}>
                            <Route path="/" exact component={Albums}/>
                            <Route path="/privacy" exact component={Privacy}/>
                            <Route path="/terms" exact component={Terms}/>


                            <Route path="/signup" exact component={SignUp}/>
                            <Route path="/signin" exact component={SignIn}/>
                            <Route path="/shop" exact component={Shop}/>
                            <Route path="/shop/:slug" exact component={Product}/>
                            <Route path="/shop/category/:slug" exact component={FilteredProduct}/>

                            <Route path="/verify/:slug" exact component={VerifyEmail}/>
                            <Route path="/recover" exact component={Recover}/>
                            <Route path="/reset/:slug" exact component={Reset}/>

                            <PrivateRoute path="/dashboard" exact component={UserDashboard}/>
                            <PrivateRoute path="/dashboard/orders" exact component={UserOrders}/>
                            <PrivateRoute path="/dashboard/account" exact component={AccountDetails}/>


                            <AdminRoute path="/admin" exact component={AdminDashboard}/>
                            <AdminRoute path="/admin/shop" exact component={ManageShop}/>
                            <AdminRoute path="/admin/shop/update/:slug" exact component={UpdateProduct}/>


                            <AdminRoute path="/admin/shop/taxonomy" exact component={ManageShopTaxonomy}/>
                            <AdminRoute path="/admin/shop/taxonomy/product-category" exact
                                        component={ManageProductCategory}/>

                            <AdminRoute path="/admin/shop/taxonomy/product-category/update/:slug" exact
                                        component={UpdateProductCategory}/>
                            <AdminRoute path="/admin/create/product-category" exact component={CreateProductCategory}/>


                            <AdminRoute path="/admin/artists" exact component={ManageArtists}/>
                            <AdminRoute path="/admin/artists/update/:slug" exact component={UpdateArtist}/>
                            <AdminRoute path="/admin/create/artist" exact component={CreateArtist}/>
                            <Route path="/artists" exact component={Artists}/>
                            <Route path="/artists/:slug" exact component={Artist}/>


                            <AdminRoute path="/admin/collaborators" exact component={ManageCollaborators}/>
                            <AdminRoute path="/admin/collaborators/update/:slug" exact component={UpdateCollaborator}/>
                            <AdminRoute path="/admin/create/collaborator" exact component={CreateCollaborator}/>
                            <Route path="/collaborators" exact component={Collaborators}/>
                            <Route path="/collaborators/:slug" exact component={Collaborator}/>


                            <AdminRoute path="/admin/events" exact component={ManageEvents}/>
                            <AdminRoute path="/admin/events/update/:slug" exact component={UpdateEvent}/>
                            <AdminRoute path="/admin/create/event" exact component={CreateEvent}/>
                            <Route path="/events" exact component={Events}/>
                            <Route path="/events/:slug" exact component={Event}/>


                            <AdminRoute path="/admin/music" exact component={ManageAlbums}/>
                            <AdminRoute path="/admin/music/update/:slug" exact component={UpdateAlbum}/>
                            <AdminRoute path="/create/album" exact component={CreateAlbum}/>


                            <Route path="/music" exact component={Albums}/>
                            <Route path="/music/:slug" exact component={Album}/>
                            <Route path="/shop" exact component={Shop}/>
                            <Route path="/shop/:slug" exact component={Product}/>
                            <Route path="/shop/category/:slug" exact component={FilteredProduct} sitemapIndex={true}/>
                            <PrivateRoute path="/dashboard/orders" exact component={UserOrders}/>



                            <AdminRoute path="/admin/users" exact component={ManageUsers}/>
                            <AdminRoute path="/admin/users/update/:slug" exact component={UpdateUser}/>

                            <AdminRoute path="/admin/create/user" exact component={CreateUser}/>

                            <AdminRoute path="/admin/orders" exact component={ManageOrders}/>
                            <AdminRoute path="/admin/product/update/:slug" exact component={UpdateProduct}/>
                            <AdminRoute path="/admin/create/product" exact component={CreateProduct}/>

                            <Route component={NotFound}/>
                        </Switch>
                    </Suspense>
                </MotionDiv>
            </AnimatePresence>
        </AnimateSharedLayout>
    )
}

export default Routes


