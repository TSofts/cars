import { render } from 'react-dom'
import { Router, Route, Link, Redirect, IndexRoute } from 'react-router'
import Header from './views/cars.headerpage'
import Footer from './views/cars.footerpage'
import Welcome from './views/cars.welcomepage'
import UserCenter from './views/usercenter/cars.usercenterpage'
import UserPanelPage from './views/usercenter/cars.ucindex'
import Register from './views/accountmanage/cars.registerpage'

require('jquery.cookie');
require("bootstrap-webpack");
require("../css/override.css");
require("../css/static.css");
require("../css/app.css");
require("../css/accountmanage.css");

class App extends React.Component {

    render() {
        return (
            <div className="cars-container">
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
            <Route path="/usercenter" component={UserCenter}>
                <Route path="/test" component={Footer}/>
                <IndexRoute component={UserPanelPage}/>
            </Route>
            <Route path="/register" component={Register}/>
        </Route>

    </Router>
), document.getElementById('content'));
