/**
 * Created by Shawn on 15/11/19.
 */

'use strict';
import { Image } from 'react-bootstrap'
import DefaultImg from '../../image/test.png'

class FeedComponent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Image src={DefaultImg} responsive />
                </div>
                <p>{this.props.item.operator}</p>

                <p>{this.props.item.rate}</p>
                <p>{this.props.item.domain}</p>
            </div>
        )
    }
}

class FeedsPage extends React.Component {
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
                rate:4,
                domain: "cars,tet,test"
            }
        ];
        this.setState({
            feeds:mockup
        })
    }

    getFeeds() {
        return _.map(this.state.feeds,function(item){
            return <FeedComponent item={item}/>
        })
    }

    render() {
        let feeds = this.getFeeds();
        return (
            <div>
                {feeds}
            </div>
        )
    }
}

export default FeedsPage;

