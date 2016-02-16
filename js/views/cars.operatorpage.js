/**
 * Created by Shawn on 15/11/19.
 */

'use strict';
import { Image,Button } from 'react-bootstrap'
import DefaultImg from '../../image/test.png'
import Cars from '../common/cars'
import HeaderAction from '../action/cars.headeraction'

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
        var des = " " + this.props.item.car.brand.name + " " + this.props.item.car.series + " " + this.props.item.car.displacement + " " + this.props.item.car.year;
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
                    <Button className="feed-button" bsStyle="default">接单</Button>
                </div>
                <div className="feed-bottom">

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
                id:1,
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
                id:2,
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
        });

        HeaderAction.updateUserType("operator");
    }

    getFeeds() {
        return _.map(this.state.feeds, function (item) {
            return <FeedComponent key={item.id} item={item}/>
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

