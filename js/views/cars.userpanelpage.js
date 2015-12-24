/**
 * Created by Shawn on 15/11/19.
 */

'use strict';
import { Router, Route, Link, Redirect, IndexRoute } from 'react-router'
import { Image,Button,Grid } from 'react-bootstrap'


class UserPanelPage extends React.Component {
    constructor() {
        super();
        this.state = {
            feeds: []
        };
    }


    render() {
        return (
            <div className="user-panel">
                <div className="user-menu">
                    用户中心
                    <ul>
                        <li><Link to="/test">test</Link></li>
                        <li>test11</li>
                    </ul>
                </div>
                <div className="user-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default UserPanelPage;

