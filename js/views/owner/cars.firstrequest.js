/**
 * Created by shawn on 16-1-4.
 */
import { Modal,Button,Input,Grid,Row,Col } from 'react-bootstrap'
import AltContainer from 'alt/AltContainer'

import CarSelectorStore from '../../store/cars.carselectorstore'

import CarSelectorActions from '../../action/cars.carselectoraction'
import RequestSelectorActions from '../../action/cars.requestaction.js'
import RequestHeader from './cars.requestheader'
import CarSelector from './cars.carselector'


class FirstStepBody extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        CarSelectorActions.resetStep();
        this.setState({ showModal: true });
    }

    next() {
        let b = {
            car:"Audi"
        };
        RequestSelectorActions.setCar(b);
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={6}>
                        <Button onClick={this.open.bind(this)}>选择车型</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Input type="text" label="当前行驶里程：" placeholder="当前行驶里程" labelClassName="col-md-2" wrapperClassName="col-md-4"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Input type="text" label="新车上路时间：" placeholder="Enter text" labelClassName="col-md-2" wrapperClassName="col-md-4"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Button onClick={this.next.bind(this)}>下一步</Button>
                    </Col>
                </Row>
                <Modal show={this.state.showModal} onHide={this.close.bind(this)} enforceFocus={true} autoFocus={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>选择车型</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AltContainer store={CarSelectorStore}>
                            <CarSelector/>
                        </AltContainer>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.hideModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Grid>
        )
    }
}

class FirstStep extends React.Component {
    render() {
        return (
            <div className="request-content">
                <RequestHeader/>
                <FirstStepBody/>

            </div>
        )
    }
}

export default FirstStep;