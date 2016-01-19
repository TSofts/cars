/**
 * Created by shawn on 16-1-4.
 */
import { Modal,Button,Input,Grid,Row,Col } from 'react-bootstrap'
import RequestHeader from './cars.requestheader'
import AltContainer from 'alt/AltContainer'
import CarSelectorStore from '../../store/cars.carselectorstore'
import RequestSelectorActions from '../../action/cars.requestaction'

import CarSection from './cars.carsection'

class MaintanianceBody extends React.Component {
    next() {
        let m = {
            car:"Audi"
        };
        RequestSelectorActions.setMaintain(m);
    }

    render() {
        return (
            <div>
                <AltContainer store={CarSelectorStore}>
                    <CarSection/>
                </AltContainer>
                <Button onClick={this.next.bind(this)}>下一步</Button>
            </div>
        )
    }
}

class MaintainanceType extends React.Component {

    render() {
        return (
            <div className="request-content">
                <RequestHeader/>
                第二部
                <MaintanianceBody/>
            </div>
        )
    }
}

export default MaintainanceType;