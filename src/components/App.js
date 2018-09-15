import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HashRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import history from '../history'
import {
    Home,
    Training,
    AboutProject,
    Products,
    Contact,
    Whoops404
} from './pages'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Training" component={Training} />
                        <Redirect from="/history" to="/Training/history" />
                        <Redirect from="/services" to="/Training/services" />
                        <Redirect from="/location" to="/Training/location" />
                        <Route path="/AboutProject" component={AboutProject} />
                        <Route path="/products" component={Products} />
                        <Route path="/contact" component={Contact} />
                        <Route component={Whoops404} />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default App