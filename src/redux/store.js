import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {connectRouter, routerMiddleware}      from 'connected-react-router'
import adminReducer                           from 'features/admin/slice'
import placeReducer                          from 'features/place/slice'
import shopReducer                            from 'features/shop/slice'
import siteReducer                            from 'features/site/slice'
import userReducer                            from 'features/user/slice'
import {createBrowserHistory}                 from 'history'
import {createLogger}                         from 'redux-logger'
import createSagaMiddleware                   from 'redux-saga'
import rootSaga                               from './sagas'

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
                    'admin/createProduct',
                    'admin/createPlace',
                    'admin/updateProduct',
                    'admin/updatePlace',
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
        shop: shopReducer,
        place: placeReducer,
        router: connectRouter(history)
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
})

sagaMiddleware.run(rootSaga)

