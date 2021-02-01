import Album        from 'features/album/Album'
import Albums       from 'features/album/Albums'
import Artist       from 'features/artist/Artist'
import Artists      from 'features/artist/Artists'
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
    const artistsSlugs = [
        {slug: "theo-mode"},
        {slug: "nappy-nina"},
        {slug: "stas-thee-boss"},
        {slug: "babyfang"}
    ]

    const musicSlugs = [
        {slug: "r-i-d-m"},
        {slug: "mad-cat"},
        {slug: "amv"},
        {slug: "30-bag"},
        {slug: "olive-juice"},
        {slug: "soft-blue-violet-tears"},
        {slug: "mvssv"},
        {slug: "on-the-qaurner"},
        {slug: "sang-stasia"},
        {slug: "dumb-doubt"},
        {slug: "the-tree-act"},
        {slug: "burnt-orange"},
        {slug: "gotham"},
        {slug: "be-honest"},
        {slug: "mvssv-rmxs"},
        {slug: "s-women"}
    ]

    const shopSlugs = [
        {slug: "30-bag-vinyl"},
        {slug: "babyfang-fang-logo-sticker"},
        {slug: "dumb-doubt-test-pressing-signed"},
        {slug: "dumb-doubt-vinyl"},
        {slug: "mvssv-compact-disc"},
        {slug: "naps-vinyl-combo"}
    ]

    const shopCategorySlug = [
        {slug: "cd"},
        {slug: "vinyl"},
        {slug: "stickers"}
    ]

    return (
        <Switch>
            <Route path="/" exact component={Posts} sitemapIndex={true}/>
            <Route path="/signup" exact component={SignUp} sitemapIndex={true}/>
            <Route path="/signin" exact component={SignIn} sitemapIndex={true}/>
            <Route path="/artists" exact component={Artists} sitemapIndex={true}/>
            <Route path="/artists/:slug" exact component={Artist} sitemapIndex={true} slugs={artistsSlugs}/>
            <Route path="/music" exact component={Albums} sitemapIndex={true}/>
            <Route path="/music/:slug" exact component={Album} sitemapIndex={true} slugs={musicSlugs}/>
            <Route path="/shop" exact component={Shop} sitemapIndex={true}/>
            <Route path="/shop/:slug" exact component={Product} sitemapIndex={true} slugs={shopSlugs}/>
            <Route path="/shop/category/:slug" exact component={FilteredShop} sitemapIndex={true} slugs={shopCategorySlug}/>
        </Switch>
    )
}


export default RoutesSitemap