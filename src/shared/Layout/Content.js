import {AnimatePresence}      from 'framer-motion'
import React, {
    useContext,
    useEffect
}                             from 'react'
import {useDispatch}          from 'react-redux'
import {
    Route,
    Switch
}                     from 'react-router'
import CreateCategory from '../../features/admin/CreateCategory'
import ManageOrders   from '../../features/admin/ManageOrders'
import UpdateCategory from '../../features/admin/UpdateCategory'
import AdminRoute     from '../auth/AdminRoute'
import PrivateRoute           from '../auth/PrivateRoute'
import {TransitionAnimations} from '../Containers/TransitionController'
import AdminDashboard         from '../../features/admin/AdminDashboard'
import CreateBusiness         from '../../features/admin/CreateBusiness'
import CreateProduct          from '../../features/admin/CreateProduct'
import ManageMarketplace      from '../../features/admin/ManageMarketplace'
import ManageShop             from '../../features/admin/ManageShop'
import UpdateBusiness         from '../../features/admin/UpdateBusiness'
import UpdateProduct          from '../../features/admin/UpdateProduct'
import Business               from '../../features/business/Business'
import Marketplace            from '../../features/business/Marketplace'
import Product                from '../../features/shop/Product'
import Shop                   from '../../features/shop/Shop'
import NotFound               from '../../features/site/NotFound'
import Profile                from '../../features/user/Profile'
import SignIn                 from '../../features/user/SignIn'
import SignUp                 from '../../features/user/SignUp'
import UserDashboard          from '../../features/user/UserDashboard'
import MotionDiv              from '../Basic/MotionDiv'

const Content = () => {
    const {contentAnimation, currentPath} = useContext(TransitionAnimations)
    const dispatch = useDispatch()
    const getSlug = path => path.substring(path.lastIndexOf('/') + 1)


    useEffect(() => {
        dispatch({
            type: 'site/setConfig',
            payload: {
                path: currentPath,
                slug: getSlug(currentPath)
            }
        })
    }, [currentPath, dispatch])

    return (
        <AnimatePresence>
            <MotionDiv animate={contentAnimation} theme={{width: '100%'}}>
                <Switch location={{pathname: currentPath}}>
                    <Route path="/signup" exact component={SignUp}/>
                    <Route path="/signin" exact component={SignIn}/>
                    <Route path="/marketplace" exact component={Marketplace}/>
                    <Route path="/marketplace/:slug" exact component={Business}/>
                    {/*<Route path="/cart" exact component={Cart}/>*/}
                    <Route path="/shop" exact component={Shop}/>
                    <Route path="/shop/:slug" exact component={Product}/>
                    <PrivateRoute path="/settings/profile" exact component={Profile}/>
                    <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
                    <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
                    <AdminRoute path="/admin/shop" exact component={ManageShop}/>
                    <AdminRoute path="/admin/marketplace" exact component={ManageMarketplace}/>
                    <AdminRoute path="/admin/product/update/:slug" exact component={UpdateProduct}/>
                    <AdminRoute path="/admin/marketplace/update/:slug" exact component={UpdateBusiness}/>
                    <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory}/>
                    <AdminRoute path="/admin/orders" exact component={ManageOrders}/>
                    <AdminRoute path="/create/category" exact component={CreateCategory}/>
                    <AdminRoute path="/create/product" exact component={CreateProduct}/>
                    <AdminRoute path="/create/business" exact component={CreateBusiness}/>
                    <Route component={NotFound}/>
                </Switch>
            </MotionDiv>
        </AnimatePresence>
    )
}

export default Content


