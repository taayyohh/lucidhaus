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
const Map = lazy(() => import('features/site/views/Map'))
const Help = lazy(() => import('features/site/views/Help'))
const Privacy = lazy(() => import('features/site/views/Privacy'))
const Terms = lazy(() => import('features/site/views/Terms'))
const Recover = lazy(() => import('features/site/views/Recover'))
const Reset = lazy(() => import('features/site/views/Reset'))



const AdminDashboard = lazy(() => import('shared/Layout/Dashboard/admin/AdminDashboard'))
const UserDashboard = lazy(() => import('features/user/views/dashboard'))
const CreatePlace = lazy(() => import('features/place/admin/views/Create'))
const CreateProduct = lazy(() => import('features/shop/admin/product/views/Create'))
const CreateProductCategory = lazy(() => import('features/shop/admin/product/taxonomy/category/Create'))
const CreateUser = lazy(() => import('features/user/admin/views/Create'))
const ManagePlaces = lazy(() => import('features/place/admin/views/Manage'))
const ManagePlaceTaxonomy = lazy(() => import('features/place/admin/taxonomy/Manage'))
const ManageProductTaxonomy = lazy(() => import('features/shop/admin/product/taxonomy/Manage'))
const ManageUserTaxonomy = lazy(() => import('features/user/admin/taxonomy/Manage'))

const ManagePlaceCategory = lazy(() => import('features/place/admin/taxonomy/placeCategory/Manage'))
const ManageBathrooms = lazy(() => import('features/place/admin/taxonomy/bathroom/Manage'))
const ManageBusinessOwner = lazy(() => import('features/place/admin/taxonomy/businessOwner/Manage'))
const ManageCommunitiesServed  = lazy(() => import('features/place/admin/taxonomy/communitiesServed/Manage'))
const ManageFoodOptions  = lazy(() => import('features/place/admin/taxonomy/foodOptions/Manage'))
const ManageLanguagesSpoken = lazy(() => import('features/place/admin/taxonomy/languageSpoken/Manage'))

const UpdatePlaceCategory = lazy(() => import('features/place/admin/taxonomy/placeCategory/Update'))
const UpdateBathrooms = lazy(() => import('features/place/admin/taxonomy/bathroom/Update'))
const UpdateBusinessOwner = lazy(() => import('features/place/admin/taxonomy/businessOwner/Update'))
const UpdateCommunitiesServed  = lazy(() => import('features/place/admin/taxonomy/communitiesServed/Update'))
const UpdateFoodOptions  = lazy(() => import('features/place/admin/taxonomy/foodOptions/Update'))
const UpdateLanguagesSpoken = lazy(() => import('features/place/admin/taxonomy/languageSpoken/Update'))


const ManageAdaptiveEquipment = lazy(() => import('features/user/admin/taxonomy/adaptiveEquipment/Manage'))
const ManageBodyModification = lazy(() => import('features/user/admin/taxonomy/bodyModification/Manage'))
const ManageGender = lazy(() => import('features/user/admin/taxonomy/gender/Manage'))
const ManageUserLanguage = lazy(() => import('features/user/admin/taxonomy/language/Manage'))
const ManageMethodsOfCommunication = lazy(() => import('features/user/admin/taxonomy/methodOfCommunication/Manage'))
const ManagePhysicalAppearance = lazy(() => import('features/user/admin/taxonomy/physicalAppearance/Manage'))
const ManagePronouns = lazy(() => import('features/user/admin/taxonomy/pronoun/Manage'))
const ManageRace = lazy(() => import('features/user/admin/taxonomy/race/Manage'))
const ManageServiceAnimals = lazy(() => import('features/user/admin/taxonomy/serviceAnimal/Manage'))
const ManageSexualOrientation = lazy(() => import('features/user/admin/taxonomy/sexualOrientation/Manage'))

const UpdateAdaptiveEquipment = lazy(() => import('features/user/admin/taxonomy/adaptiveEquipment/Update'))
const UpdateBodyModification = lazy(() => import('features/user/admin/taxonomy/bodyModification/Update'))
const UpdateGender = lazy(() => import('features/user/admin/taxonomy/gender/Update'))
const UpdateUserLanguage = lazy(() => import('features/user/admin/taxonomy/language/Update'))
const UpdateMethodsOfCommunication = lazy(() => import('features/user/admin/taxonomy/methodOfCommunication/Update'))
const UpdatePhysicalAppearance = lazy(() => import('features/user/admin/taxonomy/physicalAppearance/Update'))
const UpdatePronouns = lazy(() => import('features/user/admin/taxonomy/pronoun/Update'))
const UpdateRace = lazy(() => import('features/user/admin/taxonomy/race/Update'))
const UpdateServiceAnimals = lazy(() => import('features/user/admin/taxonomy/serviceAnimal/Update'))
const UpdateSexualOrientation = lazy(() => import('features/user/admin/taxonomy/sexualOrientation/Update'))


const ManageUsers = lazy(() => import('features/user/admin/views/Manage'))
const ManageOrders = lazy(() => import('features/shop/admin/order/views/Manage'))
const ManageShop = lazy(() => import('features/shop/admin/product/views/Manage'))
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
const UserSettings = lazy(() => import('features/user/admin/views/Profile'))
const UserReviews = lazy(() => import('features/user/admin/views/Reviews'))
const UserPlaces = lazy(() => import('features/user/admin/views/Places'))
const VerifyEmail = lazy(() => import('features/site/views/VerifyEmail'))


const Routes = () => {
    const {contentAnimation, currentPath} = useContext(TransitionAnimations)

    return (
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                <MotionDiv animate={contentAnimation} theme={{width: '100%'}}>
                    <Suspense fallback={<Fallback/>}>
                        <Switch location={{pathname: currentPath}}>
                            <Route path="/" exact component={Home}/>
                            <Route path="/map" exact component={Map}/>
                            <Route path="/help" exact component={Help}/>
                            <Route path="/privacy-policy" exact component={Privacy}/>
                            <Route path="/terms-of-service" exact component={Terms}/>
                            <Route path="/verify/:slug" exact component={VerifyEmail}/>
                            <Route path="/recover" exact component={Recover}/>
                            <Route path="/reset/:slug" exact component={Reset}/>



                            <Route path="/signup" exact component={SignUp}/>
                            <Route path="/signin" exact component={SignIn}/>
                            <Route path="/places" exact component={Places}/>
                            <Route path="/places/:slug" exact component={Place}/>
                            <Route path="/shop" exact component={Shop}/>
                            <Route path="/shop/:slug" exact component={Product}/>
                            <Route path="/shop/category/:slug" exact component={FilteredProduct}/>

                            <PrivateRoute path="/dashboard" exact component={UserDashboard}/>
                            <PrivateRoute path="/dashboard/orders" exact component={UserOrders}/>
                            <PrivateRoute path="/dashboard/profile" exact component={UserSettings}/>
                            <PrivateRoute path="/dashboard/reviews" exact component={UserReviews}/>
                            <PrivateRoute path="/dashboard/places" exact component={UserPlaces}/>


                            <AdminRoute path="/admin" exact component={AdminDashboard}/>
                            <AdminRoute path="/admin/shop" exact component={ManageShop}/>
                            <AdminRoute path="/admin/product-category" exact component={ManageProductTaxonomy}/>
                            <AdminRoute path="/admin/product-category/update/:slug" exact component={UpdateProductCategory}/>
                            <AdminRoute path="/admin/create/product-category" exact component={CreateProductCategory}/>

                            <AdminRoute path="/admin/places" exact component={ManagePlaces}/>
                            <AdminRoute path="/admin/places/update/:slug" exact component={UpdatePlace}/>
                            <AdminRoute path="/admin/place/taxonomy" exact component={ManagePlaceTaxonomy}/>

                            <AdminRoute path="/admin/place/taxonomy/bathroom" exact component={ManageBathrooms}/>
                            <AdminRoute path="/admin/place/taxonomy/business-owner" exact component={ManageBusinessOwner}/>
                            <AdminRoute path="/admin/place/taxonomy/communities-served" exact component={ManageCommunitiesServed}/>
                            <AdminRoute path="/admin/place/taxonomy/food-options" exact component={ManageFoodOptions}/>
                            <AdminRoute path="/admin/place/taxonomy/language-spoken" exact component={ManageLanguagesSpoken}/>
                            <AdminRoute path="/admin/place/taxonomy/place-category" exact component={ManagePlaceCategory}/>

                            <AdminRoute path="/admin/place/taxonomy/bathroom/update/:slug" exact component={UpdateBathrooms}/>
                            <AdminRoute path="/admin/place/taxonomy/business-owner/update/:slug" exact component={UpdateBusinessOwner}/>
                            <AdminRoute path="/admin/place/taxonomy/communities-served/update/:slug" exact component={UpdateCommunitiesServed}/>
                            <AdminRoute path="/admin/place/taxonomy/food-options/update/:slug" exact component={UpdateFoodOptions}/>
                            <AdminRoute path="/admin/place/taxonomy/language-spoken/update/:slug" exact component={UpdateLanguagesSpoken}/>
                            <AdminRoute path="/admin/place/taxonomy/place-category/update/:slug" exact component={UpdatePlaceCategory}/>


                            <AdminRoute path="/admin/create/place" exact component={CreatePlace}/>

                            <AdminRoute path="/admin/users" exact component={ManageUsers}/>
                            <AdminRoute path="/admin/users/update/:slug" exact component={UpdateUser}/>
                            <AdminRoute path="/admin/users/taxonomy" exact component={ManageUserTaxonomy}/>

                            <AdminRoute path="/admin/users/taxonomy/adaptive-equipment" exact component={ManageAdaptiveEquipment}/>
                            <AdminRoute path="/admin/users/taxonomy/body-modification" exact component={ManageBodyModification}/>
                            <AdminRoute path="/admin/users/taxonomy/gender" exact component={ManageGender}/>
                            <AdminRoute path="/admin/users/taxonomy/language" exact component={ManageUserLanguage}/>
                            <AdminRoute path="/admin/users/taxonomy/method-of-communication" exact component={ManageMethodsOfCommunication}/>
                            <AdminRoute path="/admin/users/taxonomy/physical-appearance" exact component={ManagePhysicalAppearance}/>
                            <AdminRoute path="/admin/users/taxonomy/pronoun" exact component={ManagePronouns}/>
                            <AdminRoute path="/admin/users/taxonomy/race" exact component={ManageRace}/>
                            <AdminRoute path="/admin/users/taxonomy/service-animal" exact component={ManageServiceAnimals}/>
                            <AdminRoute path="/admin/users/taxonomy/sexual-orientation" exact component={ManageSexualOrientation}/>

                            <AdminRoute path="/admin/users/taxonomy/adaptive-equipment/update/:slug" exact component={UpdateAdaptiveEquipment}/>
                            <AdminRoute path="/admin/users/taxonomy/body-modification/update/:slug" exact component={UpdateBodyModification}/>
                            <AdminRoute path="/admin/users/taxonomy/gender/update/:slug" exact component={UpdateGender}/>
                            <AdminRoute path="/admin/users/taxonomy/language/update/:slug" exact component={UpdateUserLanguage}/>
                            <AdminRoute path="/admin/users/taxonomy/method-of-communication/update/:slug" exact component={UpdateMethodsOfCommunication}/>
                            <AdminRoute path="/admin/users/taxonomy/physical-appearance/update/:slug" exact component={UpdatePhysicalAppearance}/>
                            <AdminRoute path="/admin/users/taxonomy/pronoun/update/:slug" exact component={UpdatePronouns}/>
                            <AdminRoute path="/admin/users/taxonomy/race/update/:slug" exact component={UpdateRace}/>
                            <AdminRoute path="/admin/users/taxonomy/service-animal/update/:slug" exact component={UpdateServiceAnimals}/>
                            <AdminRoute path="/admin/users/taxonomy/sexual-orientation/update/:slug" exact component={UpdateSexualOrientation}/>


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


