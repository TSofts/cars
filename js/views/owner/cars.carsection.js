/**
 * Created by shawn on 16-1-19.
 */
import { Modal,Button,Input } from 'react-bootstrap'
import AltContainer from 'alt/AltContainer'
import CarSelectorStore from '../../store/cars.carselectorstore'
import CarSelectorActions from '../../action/cars.carselectoraction'
import CarSelector from './cars.carselector'

class CarSection extends React.Component {
    constructor() {
        super();
    }
    close() {
        CarSelectorActions.showModel(false);
    }

    open() {
        CarSelectorActions.showModel(true);
    }

    getCarInfo() {
        return (
            <div>
                <div>{this.props.car.brand}</div>
                <div>{this.props.car.volume}</div>
                <div>{this.props.car.year}</div>
            </div>
        )
    }

    render() {
        let carinfo = this.getCarInfo();
        let carselector =(!_.isEmpty(this.props.car))?(<span>{carinfo}<Button onClick={this.open.bind(this)}>重选</Button></span>):(<Button onClick={this.open.bind(this)}>选择车型</Button>);

        return (
            <div>{carselector}
                <Modal show={this.props.showModal} onHide={this.close.bind(this)} enforceFocus={true} autoFocus={true}>
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
            </div>
        )
    }
}

export default CarSection;