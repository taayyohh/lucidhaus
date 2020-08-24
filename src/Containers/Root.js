import React                from 'react'
import PageFrame            from '../Layout/PageFrame'
import TransitionController from './TransitionController'

const Root = () =>
    <TransitionController>
        <PageFrame/>
    </TransitionController>

export default Root