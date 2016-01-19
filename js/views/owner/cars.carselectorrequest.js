/**
 * Created by shawn on 16-1-4.
 */
import { Modal,Button,Input,Grid,Row,Col } from 'react-bootstrap'
import AltContainer from 'alt/AltContainer'

import CarSelectorStore from '../../store/cars.carselectorstore'

import CarSelectorActions from '../../action/cars.carselectoraction'
import RequestSelectorActions from '../../action/cars.requestaction'
import RequestHeader from './cars.requestheader'
import CarSection from './cars.carsection'
import Cache from '../../common/cache'

class CarSelectorBody extends React.Component {


    constructor() {
        super();
        this.state = {
            distance:"",
            errorDistance:"",
            time:"",
            errorTime:""
        }
    }

    validateDistance(d) {
        if(_.isEmpty(d)){
            this.setState({
                distance: "error",
                errorDistance:"距离不能为空"
            });
            return false;
        }
        else {
            this.setState({
                distance: "",
                errorDistance:""
            });
            return true;
        }
    }

    validateTime(t){
        if(_.isEmpty(t)){
            this.setState({
                time: "error",
                errorTime:"时间不能为空"
            });
            return false;
        }
        else {
            this.setState({
                time: "",
                errorTime:""
            });
            return true;
        }
    }

    validate(){
        let d = this.validateDistance(this.refs.distance.getValue());
        let t = this.validateTime(this.refs.time.getValue());
        if(!d||!t){
            return false;
        }
        return true;
    }

    next() {
        if(!this.validate()){
            return;
        }
        let car = JSON.parse(Cache.get("carinfo"));
        car.distance = this.refs.distance.getValue();
        car.time = this.refs.time.getValue();
        RequestSelectorActions.setCar(car);
    }


    render() {
        return (
            <Grid>
                <Row>
                    <Col md={6}>
                        <AltContainer store={CarSelectorStore}>
                            <CarSection/>
                        </AltContainer>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Input bsStyle={this.state.distance} ref="distance" help={this.state.errorDistance} type="text" label="当前行驶里程：" placeholder="当前行驶里程" labelClassName="col-md-2" wrapperClassName="col-md-4"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Input bsStyle={this.state.time} ref="time" help={this.state.errorTime} type="text" label="新车上路时间：" placeholder="Enter text" labelClassName="col-md-2" wrapperClassName="col-md-4"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Button onClick={this.next.bind(this)}>下一步</Button>
                    </Col>
                </Row>

            </Grid>
        )
    }
}

class CarSelectorRequest extends React.Component {
    render() {
        return (
            <div className="request-content">
                <RequestHeader/>
                <CarSelectorBody/>

            </div>
        )
    }
}

export default CarSelectorRequest;