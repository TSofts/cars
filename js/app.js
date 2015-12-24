import { render } from 'react-dom'
import { Router, Route, Link, Redirect, IndexRoute } from 'react-router'
import Header from './views/cars.headerpage'
import Footer from './views/cars.footerpage'
import Welcome from './views/cars.welcomepage'
import UserPanel from './views/cars.userpanelpage.js'

require('jquery.cookie');
require("bootstrap-webpack");
require("../css/override.css");
require("../css/static.css");
require("../css/app.css");

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <div id="header">
                    <Header/>
                </div>
                <div id="body">
                    {this.props.children}
                </div>
                <div id="footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}

render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Welcome}/>
            <Route path="/userinfo" component={UserPanel}/>
        </Route>

    </Router>
), document.body);
