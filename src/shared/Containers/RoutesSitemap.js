import Album        from 'features/album/Album'
import Albums       from 'features/album/Albums'
import Artist       from 'features/artist/Artist'
import Artists      from 'features/artist/Artists'
import Post         from 'features/post/Post'
import Posts        from 'features/post/Posts'
import FilteredShop from 'features/shop/FilteredShop'
import Product      from 'features/shop/Product'
import Shop         from 'features/shop/Shop'
import SignIn       from 'features/user/SignIn'
import SignUp       from 'features/user/SignUp'
import React        from 'react'
import {
    Route,
    Switch
}                   from 'react-router-dom'

const RoutesSitemap = () => {

    return (
        <Switch>
            <Route path="/" exact component={Posts} sitemapIndex={true}/>
            <Route path="/signup" exact component={SignUp} sitemapIndex={true}/>
            <Route path="/signin" exact component={SignIn} sitemapIndex={true}/>
            <Route path="/artists" exact component={Artists} sitemapIndex={true}/>
            <Route path="/artists/:slug" exact component={Artist} sitemapIndex={true}/>
            <Route path="/music" exact component={Albums} sitemapIndex={true}/>
            <Route path="/music/:slug" exact component={Album} sitemapIndex={true}/>
            <Route path="/posts" exact component={Posts} sitemapIndex={true}/>
            <Route path="/posts/:slug" exact component={Post} sitemapIndex={true}/>
            <Route path="/shop" exact component={Shop} sitemapIndex={true}/>
            <Route path="/shop/:slug" exact component={Product} sitemapIndex={true}/>
            <Route path="/shop/category/:slug" exact component={FilteredShop} sitemapIndex={true}/>
        </Switch>
    )
}


export default RoutesSitemap