import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HashRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import history from '../history'
import {
    Home,
    About,
    Events,
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
                        <Route path="/about" component={About} />
                        <Redirect from="/history" to="/about/history" />
                        <Redirect from="/services" to="/about/services" />
                        <Redirect from="/location" to="/about/location" />
                        <Route path="/events" component={Events} />
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