/**
 * Created by Shawn on 15/11/19.
 */

'use strict';
import { Image,Button } from 'react-bootstrap'
import DefaultImg from '../../image/2.jpg'
import HeaderAction from '../action/cars.headeraction'

class ElementComponent extends React.Component {

    getRates() {
        var rates = [];
        for (var i = 0; i < 5; i++) {
            var className = "cars-icon-tools";
            if (i < this.props.item.rate) {
                className += " rate";
            }
            if(i < 4){
                className += " left";
            }
            rates.push(<li className={className}/>);
        }
        return rates;
    }

    render() {
        var rates = this.getRates();
        return (

            <li className="element left">
                <div className="element-left">
                    <Image className="element-pic" src={DefaultImg} responsive/>

                </div>
                <div className="element-right">
                    <div className="element-description">
                        <p>{this.props.item.operator}</p>
                        <ul className="cross element-rate">
                            {rates}
                        </ul>
                        <div className="description">
                            <label>
                                擅长技能:<p/>
                                <span>
                                    {"   " + this.props.item.domain}
                                </span>
                            </label>
                            <p style={{"margin":"0"}}/>
                            <label>
                                擅长车型:<p/>
                                <span>
                                    test
                                </span>
                            </label>

                        </div>
                    </div>

                    <Button className="element-button" bsStyle="default">预约</Button>

                </div>

            </li>
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
                domain: "cars,test",
                cartype: [
                    {
                        brand:"大众",
                        logo:"DaZhong"
                    },
                    {
                        brand:"奥迪",
                        logo:"aodi"
                    }
                ]
            },
            {
                operator: "Abby",
                rate: 4,
                domain: "cars,tet,test"
            },
            {
                operator: "Abby2",
                rate: 4,
                domain: "cars,tet,test"
            }
        ];
        this.setState({
            feeds: mockup
        });
        HeaderAction.updateUserType("owner");
    }

    getFeeds() {
        return _.map(this.state.feeds, function (item) {
            return <ElementComponent item={item}/>
        })
    }

    render() {
        let feeds = this.getFeeds();
        return (
            <div className="feed-container">
                <div className="element-container">
                    <ul className="cross">
                        {feeds}
                    </ul>
                </div>
            </div>
        )
    }
}

export default OperatorFeedsPage;

