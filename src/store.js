import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {connectRouter, routerMiddleware}      from 'connected-react-router'
import placeReducer                           from 'features/place/slice'
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
                    'shop/createProduct',
                    'shop/updateProduct',
                    'shop/getPaymentNonce',
                    'place/createPlace',
                    'place/updatePlace',
                    'place/updateBusinessOwner',
                    'place/createBusinessOwner',
                    'place/addReview',
                    'user/updateUser',
                    'user/updateUserProfile',
                    'user/signUp',
                ],
            },
            immutableCheck: false
        }),
        loggerMiddleware
    ]
}

export default configureStore({
    reducer: {
        place: placeReducer,
        shop: shopReducer,
        site: siteReducer,
        user: userReducer,
        router: connectRouter(history)
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
})

sagaMiddleware.run(rootSaga)

