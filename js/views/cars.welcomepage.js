/**
 * Created by Shawn on 15/11/19.
 */
'use strict';

import { Grid, Row, Col, Image,Button } from 'react-bootstrap'
import AltContainer from 'alt/AltContainer'

import MainStore from '../store/cars.mainstore'

import HeaderAction from '../action/cars.headeraction'
import MainAction from '../action/cars.mainaction'

import OperatorFeeds from './cars.ownerpage'
import UserRequestFeeds from './cars.operatorpage'

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
                            <Button className="btn-operator" onClick={this.handleUpdateState.bind(this,"operator")}/>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="container-box owner">
                            <Button className="btn-owner" onClick={this.handleUpdateState.bind(this,"owner")}/>
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

