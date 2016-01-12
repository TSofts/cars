/**
 * Created by shawn on 16-1-4.
 */
import { Modal,Button,Input,Grid,Row,Col } from 'react-bootstrap'
import RequestHeader from './cars.requestheader'

import RequestSelectorActions from '../../action/cars.requestaction.js'

class FirstStep extends React.Component {
    next() {
        let m = {
            car:"Audi"
        };
        RequestSelectorActions.setMaintain(m);
    }
    render() {
        return (
            <div className="request-content">
                <RequestHeader/>
                第二部
                <Button onClick={this.next.bind(this)}>下一步</Button>
            </div>
        )
    }
}

export default FirstStep;