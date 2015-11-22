/**
 * Created by Shawn on 15/11/19.
 */

'use strict';
import { Image,Button } from 'react-bootstrap'
import DefaultImg from '../../image/test.png'

class FeedComponent extends React.Component {

    getRates() {
        var rates = [];
        for(var i=0;i<5;i++){
            var className = "cars-icon-tools";
            if(i<this.props.item.rate){
                className += " rate";
            }
            rates.push(<li className={className}/>);
        }
        return rates;
    }

    render() {
        var rates = this.getRates();
        return (
            <div className="element">
                <div className="element-left">
                    <Image className="element-pic" src="" responsive/>

                </div>
                <div className="element-right">
                    <div className="element-description">
                        <p>{this.props.item.operator}</p>
                        <p>擅长技能</p>
                        <p>{this.props.item.domain}</p>
                    </div>
                    <Button className="element-button" bsStyle="default">预约</Button>
                    <ul className="cross element-rate">
                        {rates}
                    </ul>

                </div>

            </div>
        )
    }
}

class OperatorFeedsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            feeds: []
        };
    }

    componentDidMount() {
        let mockup = [
            {
                operator: "Shawn",
                rate: 5,
                domain: "cars,test"
            },
            {
                operator: "Abby",
                rate: 4,
                domain: "cars,tet,test"
            }
        ];
        this.setState({
            feeds: mockup
        })
    }

    getFeeds() {
        return _.map(this.state.feeds, function (item) {
            return <li><FeedComponent item={item}/></li>
        })
    }

    render() {
        let feeds = this.getFeeds();
        return (
            <div className="feed-container">
                <ul className="cross">
                    {feeds}
                </ul>
            </div>
        )
    }
}

export default OperatorFeedsPage;

