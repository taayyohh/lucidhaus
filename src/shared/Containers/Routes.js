import {AnimatePresence, AnimateSharedLayout} from 'framer-motion'
import React, {lazy, Suspense, useContext}    from 'react'
import {Route, Switch}                        from 'react-router-dom'
import AdminRoute                             from 'shared/Basic/AdminRoute'
import MotionDiv                              from 'shared/Basic/MotionDiv'
import PrivateRoute                           from 'shared/Basic/PrivateRoute'
import Fallback                               from 'shared/Layout/Fallback'
import {TransitionAnimations}                 from './TransitionController'

const Sitemap = lazy(() => import('./Sitemap'))
<<<<<<< HEAD
const Home = lazy(() => import('features/site/views/Home'))
const SignIn = lazy(() => import('features/site/views/SignIn'))
const SignUp = lazy(() => import('features/site/views/SignUp'))
const AccountDetails = lazy(() => import('features/user/admin/views/Account'))
const VerifyEmail = lazy(() => import('features/site/views/VerifyEmail'))
const Recover = lazy(() => import('features/site/views/Recover'))
const Reset = lazy(() => import('features/site/views/Reset'))
const NotFound = lazy(() => import('features/site/views/NotFound'))


const AdminDashboard = lazy(() => import('shared/Layout/Dashboard/admin/AdminDashboard'))
const UserDashboard = lazy(() => import('features/user/views/dashboard'))
const ManageUsers = lazy(() => import('features/user/admin/views/Manage'))
const UpdateUser = lazy(() => import('features/user/admin/views/Update'))
const UserReviews = lazy(() => import('features/user/admin/views/Reviews'))
const UpdateUserReviews = lazy(() => import('features/user/admin/views/UpdateReview'))


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

const ManagePlaces = lazy(() => import('features/place/admin/views/Manage'))
const CreatePlace = lazy(() => import('features/place/admin/views/Create'))
const UpdatePlace = lazy(() => import('features/place/admin/views/Update'))
const Place = lazy(() => import('features/place/views/Place'))
const Places = lazy(() => import('features/place/views/Places'))
const ManagePendingPlaces = lazy(() => import('features/place/admin/views/ManagePendingPlaces'))
const ManageFlaggedReviews = lazy(() => import('features/place/admin/views/ManageFlaggedReviews'))

const CreateProduct = lazy(() => import('features/shop/admin/product/views/Create'))
const CreateProductCategory = lazy(() => import('features/shop/admin/product/taxonomy/category/Create'))
const CreateUser = lazy(() => import('features/user/admin/views/Create'))
const ManageProductCategory = lazy(() => import('features/shop/admin/product/taxonomy/category/Manage'))
const ManageShopTaxonomy = lazy(() => import('features/shop/admin/product/taxonomy/Manage'))
const AdminUpdateReview = lazy(() => import('features/user/admin/views/UpdateReview'))




const ManagePlaceCategory = lazy(() => import('features/place/admin/taxonomy/placeCategory/Manage'))
const UpdatePlaceCategory = lazy(() => import('features/place/admin/taxonomy/placeCategory/Update'))

const ManageBathrooms = lazy(() => import('features/place/admin/taxonomy/bathroom/Manage'))
const UpdateBathrooms = lazy(() => import('features/place/admin/taxonomy/bathroom/Update'))

const ManageBusinessOwner = lazy(() => import('features/place/admin/taxonomy/businessOwner/Manage'))
const UpdateBusinessOwner = lazy(() => import('features/place/admin/taxonomy/businessOwner/Update'))

const ManageCommunitiesServed = lazy(() => import('features/place/admin/taxonomy/communitiesServed/Manage'))
const UpdateCommunitiesServed = lazy(() => import('features/place/admin/taxonomy/communitiesServed/Update'))

const ManageFoodOptions = lazy(() => import('features/place/admin/taxonomy/foodOptions/Manage'))
const UpdateFoodOptions = lazy(() => import('features/place/admin/taxonomy/foodOptions/Update'))

const ManageLanguagesSpoken = lazy(() => import('features/place/admin/taxonomy/languageSpoken/Manage'))
const UpdateLanguagesSpoken = lazy(() => import('features/place/admin/taxonomy/languageSpoken/Update'))


const Shop = lazy(() => import('features/shop/views/Shop'))
const ManageShop = lazy(() => import('features/shop/admin/product/views/Manage'))
const ManageOrders = lazy(() => import('features/shop/admin/order/views/Manage'))
const UserOrders = lazy(() => import('features/user/views/dashboard/Orders'))
const Product = lazy(() => import('features/shop/views/Product'))
const UpdateProduct = lazy(() => import('features/shop/admin/product/views/Update'))
const UpdateProductCategory = lazy(() => import('features/shop/admin/product/taxonomy/category/Update'))
const FilteredProduct = lazy(() => import('features/shop/views/FilteredShop'))

=======
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
const Latest = lazy(() => import('features/site/Latest'))
const SignIn = lazy(() => import('features/user/SignIn'))
const SignUp = lazy(() => import('features/user/SignUp'))
const UserOrders = lazy(() => import('features/user/dashboard/Orders'))
const UserSettings = lazy(() => import('features/user/dashboard/Settings'))
>>>>>>> 7ea9664d193ee56359fc5d96c9ea5770b2f1dceb

const Routes = () => {
    const {contentAnimation, currentPath} = useContext(TransitionAnimations)

    return (
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                <MotionDiv animate={contentAnimation} theme={{width: '100%'}}>
                    <Suspense fallback={<Fallback/>}>
                        <Switch location={{pathname: currentPath}}>
<<<<<<< HEAD
                            <Route path="/" exact component={Albums}/>


                            <Route path="/signup" exact component={SignUp}/>
                            <Route path="/signin" exact component={SignIn}/>
                            <Route path="/places" exact component={Places}/>
                            <Route path="/places/:slug" exact component={Place}/>
                            <Route path="/places/search/:slug" exact component={Places}/>
                            <Route path="/shop" exact component={Shop}/>
                            <Route path="/shop/:slug" exact component={Product}/>
                            <Route path="/shop/category/:slug" exact component={FilteredProduct}/>

                            <Route path="/verify/:slug" exact component={VerifyEmail}/>
                            <Route path="/recover" exact component={Recover}/>
                            <Route path="/reset/:slug" exact component={Reset}/>

=======
                            <Route path="/" exact component={Posts} sitemapIndex={true}/>
                            <Route path="/latest" exact component={Latest} sitemapIndex={true}/>
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
>>>>>>> 7ea9664d193ee56359fc5d96c9ea5770b2f1dceb
                            <PrivateRoute path="/dashboard" exact component={UserDashboard}/>
                            <PrivateRoute path="/dashboard/orders" exact component={UserOrders}/>
                            <PrivateRoute path="/dashboard/account" exact component={AccountDetails}/>
                            <PrivateRoute path="/dashboard/reviews" exact component={UserReviews}/>
                            <PrivateRoute path="/dashboard/reviews/update/:slug" exact component={UpdateUserReviews}/>


                            <AdminRoute path="/admin" exact component={AdminDashboard}/>
                            <AdminRoute path="/admin/shop" exact component={ManageShop}/>
                            <AdminRoute path="/admin/shop/update/:slug" exact component={UpdateProduct}/>


                            <AdminRoute path="/admin/shop/taxonomy" exact component={ManageShopTaxonomy}/>
                            <AdminRoute path="/admin/shop/taxonomy/product-category" exact
                                        component={ManageProductCategory}/>

                            <AdminRoute path="/admin/shop/taxonomy/product-category/update/:slug" exact
                                        component={UpdateProductCategory}/>
                            <AdminRoute path="/admin/create/product-category" exact component={CreateProductCategory}/>

                            <AdminRoute path="/admin/places" exact component={ManagePlaces}/>
                            <AdminRoute path="/admin/places/update/:slug" exact component={UpdatePlace}/>
                            <AdminRoute path="/admin/places/pending" exact component={ManagePendingPlaces}/>
                            <AdminRoute path="/admin/flagged/reviews" exact component={ManageFlaggedReviews}/>
                            <AdminRoute path="/admin/flagged/reviews/update/:slug" exact component={AdminUpdateReview}/>


                            <AdminRoute path="/admin/artists" exact component={ManageArtists}/>
                            <AdminRoute path="/admin/artists/update/:slug" exact component={UpdateArtist}/>
                            <AdminRoute path="/admin/create/artist" exact component={CreateArtist}/>
                            <Route path="/artists" exact component={Artists}/>
                            <Route path="/artists/:slug" exact component={Artist}/>


                            <AdminRoute path="/admin/collaborators" exact component={ManageCollaborators}/>
                            <AdminRoute path="/admin/collaborators/update/:slug" exact component={UpdateCollaborator}/>
<<<<<<< HEAD
                            <AdminRoute path="/admin/create/collaborator" exact component={CreateCollaborator}/>
                            <Route path="/collaborators" exact component={Collaborators}/>
                            <Route path="/collaborators/:slug" exact component={Collaborator}/>


                            <AdminRoute path="/admin/events" exact component={ManageEvents}/>
                            <AdminRoute path="/admin/events/update/:slug" exact component={UpdateEvent}/>
                            <AdminRoute path="/admin/create/event" exact component={CreateEvent}/>
                            <Route path="/events" exact component={Events}/>
                            <Route path="/events/:slug" exact component={Event}/>

=======
                            <AdminRoute path="/create/collaborator" exact component={CreateCollaborator}/>

                            <AdminRoute path="/admin/events" exact component={ManageEvents}/>
                            <AdminRoute path="/admin/events/update/:slug" exact component={UpdateEvent}/>
                            <AdminRoute path="/create/event" exact component={CreateEvent}/>
>>>>>>> 7ea9664d193ee56359fc5d96c9ea5770b2f1dceb

                            <AdminRoute path="/admin/music" exact component={ManageAlbums}/>
                            <AdminRoute path="/admin/music/update/:slug" exact component={UpdateAlbum}/>
                            <AdminRoute path="/create/album" exact component={CreateAlbum}/>


                            <Route path="/music" exact component={Albums} sitemapIndex={true}/>
                            <Route path="/music/:slug" exact component={Album} sitemapIndex={true}/>
                            <Route path="/shop" exact component={Shop} sitemapIndex={true}/>
                            <Route path="/shop/:slug" exact component={Product} sitemapIndex={true}/>
                            <Route path="/shop/category/:slug" exact component={FilteredProduct} sitemapIndex={true}/>
                            <PrivateRoute path="/dashboard/orders" exact component={UserOrders}/>


                            <AdminRoute path="/admin/place/taxonomy/bathroom" exact component={ManageBathrooms}/>
                            <AdminRoute path="/admin/place/taxonomy/business-owner" exact
                                        component={ManageBusinessOwner}/>
                            <AdminRoute path="/admin/place/taxonomy/communities-served" exact
                                        component={ManageCommunitiesServed}/>
                            <AdminRoute path="/admin/place/taxonomy/food-options" exact component={ManageFoodOptions}/>
                            <AdminRoute path="/admin/place/taxonomy/language-spoken" exact
                                        component={ManageLanguagesSpoken}/>
                            <AdminRoute path="/admin/place/taxonomy/place-category" exact
                                        component={ManagePlaceCategory}/>

                            <AdminRoute path="/admin/place/taxonomy/bathroom/update/:slug" exact
                                        component={UpdateBathrooms}/>
                            <AdminRoute path="/admin/place/taxonomy/business-owner/update/:slug" exact
                                        component={UpdateBusinessOwner}/>
                            <AdminRoute path="/admin/place/taxonomy/communities-served/update/:slug" exact
                                        component={UpdateCommunitiesServed}/>
                            <AdminRoute path="/admin/place/taxonomy/food-options/update/:slug" exact
                                        component={UpdateFoodOptions}/>
                            <AdminRoute path="/admin/place/taxonomy/language-spoken/update/:slug" exact
                                        component={UpdateLanguagesSpoken}/>
                            <AdminRoute path="/admin/place/taxonomy/place-category/update/:slug" exact
                                        component={UpdatePlaceCategory}/>


                            <AdminRoute path="/admin/create/place" exact component={CreatePlace}/>

                            <AdminRoute path="/admin/users" exact component={ManageUsers}/>
                            <AdminRoute path="/admin/users/update/:slug" exact component={UpdateUser}/>

                            <AdminRoute path="/admin/create/user" exact component={CreateUser}/>

                            <AdminRoute path="/admin/orders" exact component={ManageOrders}/>
                            <AdminRoute path="/admin/product/update/:slug" exact component={UpdateProduct}/>
                            <AdminRoute path="/admin/create/product" exact component={CreateProduct}/>

                            <AdminRoute path="/sitemap" exact component={Sitemap}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Suspense>
                </MotionDiv>
            </AnimatePresence>
        </AnimateSharedLayout>
    )
}

export default Routes


