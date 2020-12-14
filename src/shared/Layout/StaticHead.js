import React, {memo}   from 'react'
import {Helmet}        from 'react-helmet-async'
import appleTouchIcon  from 'assets/apple-touch-icon.png'
import favicon16       from 'assets/favicon-16x16.png'
import favicon32       from 'assets/favicon-32x32.png'
import safariPinnedTab from 'assets/safari-pinned-tab.svg'

const StaticHead = memo(() =>
    <Helmet>
        <meta httpEquiv="x-ua-compatible" content="IE=Edge"/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="theme-color" content="#ffffff"/>
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={appleTouchIcon}
        />
        <link
            rel="icon"
            type="image/png"
            href={favicon32}
            sizes="32x32"
        />
        <link
            rel="icon"
            type="image/png"
            href={favicon16}
            sizes="16x16"
        />
        <link
            rel="mask-icon"
            href={safariPinnedTab}
            color="#858585"
        />
    </Helmet>
)

StaticHead.displayName = 'StaticHead'

export default StaticHead