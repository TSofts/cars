import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, Redirect, IndexRoute } from 'react-router'
import Header from './views/cars.headerpage'
import Footer from './views/cars.footerpage'
import Task from './views/cars.userpage'
import Welcome from './views/cars.welcomepage'

require("bootstrap-webpack");
require("../css/override.css");
require("../css/app.css");
require("../css/static.css");

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container-body">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}

render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Welcome}/>
        </Route>

    </Router>
), document.getElementById('content'));
