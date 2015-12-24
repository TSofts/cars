/**
 * Created by Shawn on 15/11/19.
 */

'use strict';
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
                        <li>test</li>
                        <li>test11</li>
                    </ul>
                </div>
                <div className="user-container">
                    test11
                </div>
            </div>
        )
    }
}

export default UserPanelPage;

