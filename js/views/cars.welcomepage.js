/**
 * Created by Shawn on 15/11/19.
 */

'use strict';

import { Grid, Row, Col } from 'react-bootstrap'
import OperatorFeeds from './cars.ownerpage'
import UserRequestFeeds from './cars.operatorpage'
import HeaderAction from '../action/cars.headeraction'
import MainStore from '../store/cars.mainstore'
import MainAction from '../action/cars.mainaction'
import AltContainer from 'alt/AltContainer'
import Register from '../views/cars.registerpage'

class Main extends React.Component {

    handleUpdateState(state) {
        MainAction.updateCurrentTag(state);
    }

    getOwnerPage() {
        return <div><OperatorFeeds/></div>
    }

    getOperatorPage() {
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
        switch (this.props.currentTag) {
            case "operator":
                return this.getOperatorPage();
                break;
            case "owner":
                return this.getOwnerPage();
                break;
            default:
                return <Register/>;
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

class MainPage extends React.Component {
    render() {
        return (
            <AltContainer store={MainStore}>
                <Main/>
            </AltContainer>
        )
    }
}

export default MainPage;

