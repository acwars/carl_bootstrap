import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import Layout from 'component/layout/index.js';

// pages
import Home from 'page/home/index.js';

class App extends React.Component{
    render(){
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </Layout>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
