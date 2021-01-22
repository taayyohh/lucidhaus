import {
    configureStore,
    getDefaultMiddleware
}                             from '@reduxjs/toolkit'
import {
    connectRouter,
    routerMiddleware
}                             from 'connected-react-router'
import adminReducer           from 'features/admin/slice'
import artistReducer          from 'features/artist/slice'
import postReducer            from 'features/post/slice'
import shopReducer            from 'features/shop/slice'
import siteReducer            from 'features/site/slice'
import userReducer            from 'features/user/slice'
import albumReducer            from 'features/album/slice'
import {createBrowserHistory} from 'history'
import {createLogger}         from 'redux-logger'
import createSagaMiddleware   from 'redux-saga'
import rootSaga               from './sagas'

export const history = createBrowserHistory()
export const sagaMiddleware = createSagaMiddleware()

let middleware = [
    routerMiddleware(history),
    sagaMiddleware
]

if (!['production'].includes(process.env.NODE_ENV)) {
    const loggerMiddleware = createLogger()
    middleware = [
        ...middleware,
        ...getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: [
                    'admin/createPost',
                    'admin/createProduct',
                    'admin/createArtist',
                    'admin/createAlbum',
                    'admin/updatePost',
                    'admin/updateProduct',
                    'admin/updateArtist',
                    'admin/updateAlbum',
                    'shop/getPaymentNonce'
                ],
            },
            immutableCheck: false
        }),
        loggerMiddleware
    ]
}

export default configureStore({
    reducer: {
        user: userReducer,
        site: siteReducer,
        admin: adminReducer,
        post: postReducer,
        shop: shopReducer,
        artist: artistReducer,
        album: albumReducer,
        router: connectRouter(history)
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
})

sagaMiddleware.run(rootSaga)

