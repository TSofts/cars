/**
 * Created by Shawn on 15/11/19.
 */

'use strict';
import { Router, Route, Link, Redirect, IndexRoute } from 'react-router'
import { Image,Button,Grid,Row,Col } from 'react-bootstrap'


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
                <Grid>
                    <Row>
                        <Col xs={2} md={2}>
                            <ul>
                                <li><Link to="/test">test</Link></li>
                                <li>test11</li>
                            </ul>
                        </Col>
                        <Col xs={10} md={10}>
                            <div className="user-container">
                                {this.props.children}
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default UserPanelPage;

