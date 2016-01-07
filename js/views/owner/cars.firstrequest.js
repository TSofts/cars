/**
 * Created by shawn on 16-1-4.
 */
import { Modal,Button } from 'react-bootstrap'

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
        this.setState({ showModal: true });
    }

    render() {
        return (
            <div>
                <Button onClick={this.open.bind(this)}>选择车型</Button>
                <Modal show={this.state.showModal} onHide={this.close.bind(this)} enforceFocus={true} autoFocus={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>选择车型</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CarSelector/>
                    </Modal.Body>
                </Modal>
            </div>
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