import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import Layout from 'component/layout/index.js';

// pages
import Home from 'page/home/index.js';
import Login from 'page/login/index.js';

class App extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/' render={ props => (
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/product" component={Home} />
                                <Route path="/product-category" component={Home} />
                            </Switch>
                        </Layout>
                    )}/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
