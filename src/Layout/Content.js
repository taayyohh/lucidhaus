import React, {
    useContext,
    useEffect
}                       from 'react'
import {useDispatch}    from 'react-redux'
import {Route, Switch} from 'react-router'
import AddBusiness     from '../features/admin/AddBusiness'
import AddCategory     from '../Admin/AddCategory'
import AddProduct       from '../Admin/AddProduct'
import ManageBusinesses from '../features/admin/ManageBusinesses'
import ManageProducts   from '../Admin/ManageProducts'
import Orders           from '../Admin/Orders'
import UpdateBusiness   from '../Admin/UpdateBusiness'
import UpdateCategory   from '../Admin/UpdateCategory'
import UpdateProduct    from '../Admin/UpdateProduct'
import AdminRoute from '../auth/AdminRoute'
import PrivateRoute from '../auth/PrivateRoute'
import Business from '../Business/Business'
import Businesses from '../Business/Businessess'
import Cart from '../Shop/Cart'
import Product from '../Shop/Product'
import Shop from '../Shop/Shop'
import AdminDashboard from '../features/user/AdminDashboard'
import Profile from '../features/user/Profile'
import SignIn from '../features/user/SignIn'
import SignUp from '../features/user/SignUp'
import UserDashboard from '../features/user/UserDashboard'
import {TransitionAnimations} from "../Containers/TransitionController";
import {AnimatePresence} from "framer-motion";
import MotionDiv from "../Basic/MotionDiv";

const Content = () => {
    const {contentAnimation, currentPath} = useContext(TransitionAnimations)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'site/setPath', payload: currentPath})

    }, [currentPath])

    return (
        <AnimatePresence>
            <MotionDiv animate={contentAnimation} theme={{width: '100%'}}>
                <Switch location={{pathname: currentPath}}>
                    <Route path="/signup" exact component={SignUp}/>
                    <Route path="/signin" exact component={SignIn}/>
                    <Route path="/businesses" exact component={Businesses}/>
                    <Route path="/businesses/:slug" exact component={Business}/>
                    <Route path="/cart" exact component={Cart}/>
                    <Route path="/shop" exact component={Shop}/>
                    <Route path="/shop/:slug" exact component={Product}/>
                    <PrivateRoute path="/settings/profile" exact component={Profile}/>
                    <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
                    <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
                    <AdminRoute path="/admin/products" exact component={ManageProducts}/>
                    <AdminRoute path="/admin/businesses" exact component={ManageBusinesses}/>
                    <AdminRoute path="/admin/product/update/:slug" exact component={UpdateProduct}/>
                    <AdminRoute path="/admin/business/update/:slug" exact component={UpdateBusiness}/>
                    <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory}/>
                    <AdminRoute path="/admin/orders" exact component={Orders}/>
                    <AdminRoute path="/create/category" exact component={AddCategory}/>
                    <AdminRoute path="/create/product" exact component={AddProduct}/>
                    <AdminRoute path="/create/business" exact component={AddBusiness}/>
                </Switch>
            </MotionDiv>
        </AnimatePresence>
    )
}

export default Content


