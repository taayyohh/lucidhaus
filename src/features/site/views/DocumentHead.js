import {CDN, siteDisplayName} from 'config/variables'
import React                  from 'react'
import {Helmet}               from 'react-helmet-async'
import {useSelector}          from 'react-redux'
import {excerpt, stripHtml}   from 'utils/helpers'

const DocumentHead = () => {
    const {documentHead} = useSelector(state => state.site)
    const {title, description, image, imageAlt, audio} = documentHead

    //TODO: default values
    return (
        <>
            <Helmet>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description && excerpt(stripHtml(description), 40)}/>
                <meta property="og:image" content={CDN + image}/>
                <meta property="og:url" content={window.location.href}/>
                <meta property="og:site_name" content={siteDisplayName}/>
                <meta property="twitter:image" content={CDN + image}/>
                <meta name="twitter:image:alt" content={imageAlt}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Helmet>
            {audio && (
                <Helmet>
                    <meta property="og:audio" content={audio}/>
                </Helmet>
            )}
        </>
    )
}

export default DocumentHead
