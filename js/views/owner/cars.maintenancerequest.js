/**
 * Created by shawn on 16-1-4.
 */
import { Modal,Button,Input,Alert } from 'react-bootstrap'
import RequestHeader from './cars.requestheader'
import AltContainer from 'alt/AltContainer'
import CarSelectorStore from '../../store/cars.carselectorstore'
import RequestSelectorActions from '../../action/cars.requestaction'
import MaintainSelectorStore from '../../store/cars.maintainelectorstore'

import CarSection from './cars.carsection'


class MaintainSelector extends React.Component {

    constructor() {
        super();
        this.state={
            alertVisible:false
        }
    }
    next() {
        let m = this.props.maintainList;
        if(_.isEmpty(m)){
            this.setState({
                alertVisible:true
            })
        }
        else {
            this.setState({
                alertVisible:false
            });
            RequestSelectorActions.setMaintain(m);
        }
    }

    getNdoes() {
        return _.map(this.props.maintainList,function(item){
            return <li>{item.name}</li>
        })
    }

    handleAlertDismiss() {
        this.setState({
            alertVisible:false
        });
    }

    getAlert() {
        if(this.state.alertVisible){
            return (
                <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss.bind(this)} dismissAfter={4000}>
                    <h4>Oh snap! You got an error!</h4>
                </Alert>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
    render() {
        let nodes = this.getNdoes();
        let alert = this.getAlert();
        return (
            <div>
            <ul>
                {nodes}
            </ul>

                <Button onClick={this.next.bind(this)}>下一步</Button>
                {alert}
            </div>
        )
    }
}

class MaintanianceBody extends React.Component {

    select(type) {
        MaintainSelectorStore.loadList(type);
    }
    render() {
        return (
            <div>
                <AltContainer store={CarSelectorStore}>
                    <CarSection/>
                </AltContainer>
                <div>
                    <ul>
                        <li style={{"float":"left"}} onClick={this.select.bind(this,"big")}>大保养</li>
                        <li onClick={this.select.bind(this,"small")}>小保养</li>
                    </ul>
                </div>
                <AltContainer store={MaintainSelectorStore}>
                    <MaintainSelector/>
                </AltContainer>
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