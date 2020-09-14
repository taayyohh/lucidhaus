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
import counterReducer         from '../features/counter/counterSlice'
import userReducer         from '../features/user/userSlice'
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
        ...getDefaultMiddleware(),
        loggerMiddleware
    ]
}



export default configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        router: connectRouter(history)
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
})

//move
sagaMiddleware.run(rootSaga)

