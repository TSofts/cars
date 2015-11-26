/**
 * Created by Shawn on 15/11/19.
 */

'use strict';

import { Grid, Row, Col } from 'react-bootstrap';
import OperatorFeeds from './cars.ownerpage';
import UserRequestFeeds from './cars.operatorpage';

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            status: ""
        };
    }

    handleUpdateState(state) {
        this.setState({
            status:state
        })
    }

    getOwnerPage() {
        $.cookie('type','owner');
        return <div><OperatorFeeds/></div>
    }

    getOperatorPage() {
        $.cookie('type','operator');
        return (
            <div><UserRequestFeeds/></div>
        )
    }

    getWelcomePage() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="container-box operator">
                            <a onClick={this.handleUpdateState.bind(this,"operator")}>我是技师</a>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="container-box owner">
                            <a onClick={this.handleUpdateState.bind(this,"owner")}>我是车主</a>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }

    getCurrentPage() {
        switch (this.state.status) {
            case "operator":
                return this.getOperatorPage();
                break;
            case "owner":
                return this.getOwnerPage();
                break;
            default:
                return this.getWelcomePage();
                break;
        }
    }

    render() {
        let page = this.getCurrentPage();
        return (
            <div>
                {page}
            </div>
        )
    }
}

export default MainPage;

