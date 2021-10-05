import {ConnectedRouter} from 'connected-react-router'
import React             from 'react'
import ReactDOM          from 'react-dom'
import {Provider}        from 'react-redux'
import './index.css'

import * as serviceWorker from './serviceWorker'
import Root               from './shared/Containers/Root'
import store, {history}   from './store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Root/>
            </ConnectedRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your redux to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
