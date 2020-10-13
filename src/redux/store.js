import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history'
import {createLogger} from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import userReducer from '../features/user/userSlice'
import siteReducer     from '../features/site/siteSlice'
import adminReducer from '../features/admin/adminSlice'
import rootSaga        from './sagas'


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
                ignoredActions: ['admin/createBusiness'],
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
        router: connectRouter(history)
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
})

//move
sagaMiddleware.run(rootSaga)

