import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HashRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import history from '../history'
import { Home } from './routes/home'
import { Training } from './routes/training'
import { Search } from './routes/search'
import { Blog } from './routes/blog'
import { AboutProject } from './routes/aboutProject'
import { Webinar } from './routes/webinar'
import { Whoops404 } from './routes/whoops404'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Training" component={Training} />
                        <Redirect from="/history" to="/Training/history" />
                        <Redirect from="/services" to="/Training/services" />
                        <Redirect from="/location" to="/Training/location" />
                        <Route path="/AboutProject" component={AboutProject} />
                        <Route path="/Blog" component={Blog} />
                        <Route path="/Webinar" component={Webinar} />
                        <Route path="/Search" component={Search} />
                        <Route component={Whoops404} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}

export default App