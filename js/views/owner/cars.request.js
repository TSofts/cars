/**
 * Created by shawn on 16/1/1.
 */
'use strict';

import { Modal,Button } from 'react-bootstrap'
import { Link}  from 'react-router'
import AltContainer from 'alt/AltContainer'

import RequestStore from '../../store/cars.requeststore.js'

import FirstRequest from './cars.carselectorrequest.js'
import SecondRequest from './cars.maintenancerequest.js'
import ThirdRequest from './cars.otherrequest.js'


class SucceedRequest extends React.Component {
    render() {
        return <div>成功</div>
    }
}

class FailedReqeust extends React.Component {
    render() {
        return <div>失败</div>
    }
}

class ProceedRequest extends React.Component {

    componentDidMount() {
        console.debug("prceed request");
        let m = {
            name: 'test'
        };
        RequestStore.publish(m);
    }

    render() {

             return  <div>Loading</div>
    }
}


class RequestSelector extends React.Component {

    getCurrentContent(step){
        switch(step){
            case 1: return <FirstRequest/>;
            case 2: return <SecondRequest/>;
            case 3: return <ThirdRequest/>;
            case 4: return <ProceedRequest/>;
            case 5: return <SucceedRequest/>;
            case 6: return <FailedRequest/>;
        }
    }

    render() {
        let content = this.getCurrentContent(this.props.step);
        return (
            <div>
                {content}
            </div>
        )

    }
}

class Request extends React.Component {


    render() {
        return (
            <div className="request-container">
                <Link to="/">首页</Link> > 发布保养
                <AltContainer store = {RequestStore}>
                    <RequestSelector/>
                </AltContainer>
            </div>
        )
    }
}

export default Request;