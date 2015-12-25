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
            <div className="account-panel">
                <div className="account-title">
                    <span>用户1101</span> 欢迎来到人来车往

                </div>
            </div>
        )
    }
}

export default UserPanelPage;

