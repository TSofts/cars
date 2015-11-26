/**
 * Created by Shawn on 15/11/19.
 */

'use strict';
import { Image,Button } from 'react-bootstrap'
import DefaultImg from '../../image/test.png'
import Cars from '../common/cars'

class FeedComponent extends React.Component {

    getRates() {
        var rates = [];
        for (var i = 0; i < 5; i++) {
            var className = "cars-icon-tools left";
            if (i < this.props.item.level) {
                className += " rate";
            }
            rates.push(<li className={className}/>);
        }
        return rates;
    }

    getCarDescription() {
        var des = " " + Cars.get(this.props.item.car.brand) + " " + this.props.item.car.series + " " + this.props.item.car.displacement + " " + this.props.item.car.year;
        return (
            <span className="feed-title">
                <Image className="feed-car-brand"
                       src={require("../../image/cars/"+this.props.item.car.brand+".png")}/><a>{des}</a>
            </span>
        )
    }

    render() {
        var rates = this.getRates();
        var car = this.getCarDescription();
        return (
            <div className="feed">
                <div className="feed-top">
                    <Image className="feed-element userpic" src="" responsive/>
                    <div className="feed-element info">
                        <p>{car}</p>
                        <div className="description">
                            <label>
                                服务类型:
                                <span>
                                    {"   " + this.props.item.requestType}
                                </span>
                            </label>
                            <p style={{"margin":"0"}}/>
                            <label>
                                备注:

                            </label>

                        </div>
                    </div>
                    <Button className="element-button" bsStyle="default">接单</Button>
                </div>
                <div className="feed-bottom">
                    <ul className="cross feed-rate">
                        {rates}
                    </ul>

                </div>

            </div>
        )
    }
}

class UserRequestFeedsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            feeds: []
        };
    }

    componentDidMount() {
        let mockup = [
            {
                user: "Shawn",
                level: 5,
                requestType: "保养",
                car: {
                    brand: "audi",
                    series: "100",
                    year: "2001",
                    displacement: "1.8L"

                },
                summary: "I wan to asdfasdf..."
            },
            {
                user: "Abby",
                level: 5,
                requestType: "保养",
                car: {
                    brand: "AnChi",
                    series: "100",
                    year: "2001",
                    displacement: "1.8L"
                },
                summary: "I wan to asdfasdf..."
            }
        ];
        this.setState({
            feeds: mockup
        })
    }

    getFeeds() {
        return _.map(this.state.feeds, function (item) {
            return <FeedComponent item={item}/>
        })
    }

    render() {
        let feeds = this.getFeeds();
        return (
            <div className="feed-container">

                {feeds}
            </div>
        )
    }
}

export default UserRequestFeedsPage;

