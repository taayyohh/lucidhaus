import Place          from 'features/place/Place'
import Places         from 'features/place/Places'
import FilteredShop    from 'features/shop/FilteredShop'
import Product         from 'features/shop/Product'
import Shop            from 'features/shop/Shop'
import SignIn          from 'features/user/SignIn'
import SignUp          from 'features/user/SignUp'
import React           from 'react'
import {Route, Switch} from 'react-router-dom'

const RoutesSitemap = () => {


    return (
        <Switch>
            <Route path="/" exact component={Places} sitemapIndex={true}/>
            <Route path="/signup" exact component={SignUp} sitemapIndex={true}/>
            <Route path="/signin" exact component={SignIn} sitemapIndex={true}/>
            <Route path="/places" exact component={Places} sitemapIndex={true}/>
            <Route path="/places/:slug" exact component={Place} sitemapIndex={true}/>
            <Route path="/shop" exact component={Shop} sitemapIndex={true}/>
            <Route path="/shop/:slug" exact component={Product} sitemapIndex={true}/>
            <Route path="/shop/category/:slug" exact component={FilteredShop} sitemapIndex={true}/>
        </Switch>
    )
}


export default RoutesSitemap