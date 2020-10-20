import {
    configureStore,
    getDefaultMiddleware
}                             from '@reduxjs/toolkit'
import {
    connectRouter,
    routerMiddleware
}                             from 'connected-react-router'
import {createBrowserHistory} from 'history'
import {createLogger}         from 'redux-logger'
import createSagaMiddleware   from 'redux-saga'
import adminReducer           from '../features/admin/adminSlice'
import businessReducer        from '../features/business/businessSlice'
import shopReducer            from '../features/shop/shopSlice'
import siteReducer            from '../features/site/siteSlice'
import userReducer            from '../features/user/userSlice'
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
                ignoredActions: ['admin/createBusiness', 'admin/createProduct'],
            }
        }),
        loggerMiddleware
    ]
}


export default configureStore({
    reducer: {
        user: userReducer,
        site: siteReducer,
        admin: adminReducer,
        business: businessReducer,
        shop: shopReducer,
        router: connectRouter(history)
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
})

//move
sagaMiddleware.run(rootSaga)

