/**
 * Created by shawn on 16-1-7.
 */
import {Image} from 'react-bootstrap'

class BrandSelector extends React.Component {
    constructor(){
        super();
        this.state = {
            brands:["AoDi","BieKe","BuJiaDi","ChangAn","DaDi","DaoQi","DaFa","JiangNan","JiLi","JieBao"]
        }
    }

    getNodes(){
        return _.map(this.state.brands,function(item){
            return <li><Image className="feed-car-brand"
                              src={require("../../../image/cars/"+item+".png")}/><a>{item}</a></li>

        })
    }
    render() {
        let nodes = this.getNodes();
        return (
            <ul className="car-brand-container">
                {nodes}
            </ul>
        )
    }
}

class SeriesSelector extends React.Component {
    render () {
        return (
            <div></div>
        )
    }
}

class VolumeSelector extends React.Component {
    render () {
        return (
            <div></div>
        )
    }
}

class YearSelector extends React.Component {
    render() {
        return (
            <div></div>
        )
    }
}

class CarSelector extends React.Component {
    constructor(){
        super();
        this.state = {
            step: 1,
            brand: "",
            series: "",
            volume: "",
            year: ""
        }
    }

    getCurrentContent(step) {
        switch(step){
            case 1: return <BrandSelector/>;
            case 2: return <SeriesSelector/>;
            case 3: return <VolumeSelector/>;
            case 4: return <YearSelector/>;
        }
    }
    render() {
        let content = this.getCurrentContent(this.state.step);
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default CarSelector;
