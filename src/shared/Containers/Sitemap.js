import React          from 'react'
import DynamicSitemap from 'react-dynamic-sitemap'
import Route          from 'shared/Containers/RoutesSitemap'

export default function Sitemap(props) {
    return (
        <DynamicSitemap routes={Route} prettify={true} {...props}/>
    )
}