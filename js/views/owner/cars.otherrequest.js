/**
 * Created by shawn on 16-1-4.
 */
import { Modal,Button,Input } from 'react-bootstrap'
import RequestHeader from './cars.requestheader'
import RequestActions from '../../action/cars.requestaction'
import RequestStore from '../../store/cars.requeststore'


class OtherSetting extends React.Component {
    publish(){
        let mm = {
            car:"Audi"
        };
        RequestActions.setMemo(mm);
    }
    render() {
        return (
            <div className="request-content">
                <RequestHeader/>
                第三部
                <Button onClick={this.publish.bind(this)}>发布</Button>
            </div>
        )
    }
}

export default OtherSetting;