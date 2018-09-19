import React, { PureComponent } from 'react'
import { Route } from 'react-router-dom'
import { PageTemplate } from './pageTemplate'
import { AboutMenu } from '../menus'
import { Begin } from './training/begin'
import { Rewards } from './training/rewards'

export const Training = ({ match }) =>
    <PageTemplate>
        <section>
            <Route component={AboutMenu} />
            <Route exact path="/Training/begin" component={Begin} />
            <Route path="/Training/rewards" component={Rewards} />
        </section>
    </PageTemplate>