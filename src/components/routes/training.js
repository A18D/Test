import React, { PureComponent } from 'react'
import { Route } from 'react-router-dom'
import { PageTemplate } from './pageTemplate'
import { AboutMenu } from '../menus'
import { MenuTraining } from './training/begin'
import { Rewards } from './training/rewards'

export const Training = ({ match }) =>
    <PageTemplate>
        <section>
            <Route component={AboutMenu} />
            <Route exact path="/Training/begin" component={MenuTraining} />
            <Route path="/Training/rewards" component={Rewards} />
        </section>
        <p>Hello</p>
    </PageTemplate>