/**
 * Created by shawn on 16-1-7.
 */
import {Image} from 'react-bootstrap'
import AltContainer from 'alt/AltContainer'
import BrandStore from '../../store/cars.brandstore'
import Cars from '../../common/cars'
import CarSelectorActions from '../../action/cars.carselectoraction'
import RequestActions from '../../action/cars.requestaction'

class CarBrand extends React.Component {
    constructor() {
        super();
        this.state = {
            brands:Cars
        }
    }


    select(b) {
        CarSelectorActions.setBrand(b);
    }

    getNodes(){
        let component = this;
        return _.map(_.filter(Cars.brands,function(item){
            return item.alpha == component.props.selected;
        }),function(item){
            return <li onClick = {component.select.bind(this,item.name)} ><Image className="select-car-brand"
                              src={require("../../../image/cars/"+item.brand+".png")}/><span className="select-car-name">{item.name}</span></li>

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

class BrandSelector extends React.Component {
    constructor(){
        super();
        this.state = {
            alpha:"A"
        }
    }

    filter(v) {

        this.setState({
            alpha: v
        })
    }

    getAlphaList() {
        let size = 26;
        let start = 65;
        let nodes = [];
        for(let i=0;i<size;i++){
            let a = String.fromCharCode(start+i);
            nodes.push(<li><a onClick={this.filter.bind(this,a)}>{a}</a></li>);
        }
        return nodes;

    }

    render() {
        let nodes = this.getAlphaList();
        return (
            <div>
                <div className="alpha-list">
                    <ul>
                        {nodes}
                    </ul>
                </div>
                <CarBrand selected = {this.state.alpha}/>
            </div>
        )
    }
}

class SeriesSelector extends React.Component {

    select(s) {
        CarSelectorActions.setSeries(s);
    }

    render () {
        let component = this;
        let node = _.map(this.props.series,function(item){
            return <li onClick = {component.select.bind(this,item.name)} ><span className="select-car-name">{item.name}</span></li>;

        });
        return (
            <div>{node}</div>
        )
    }
}

class VolumeSelector extends React.Component {
    select(v) {
        CarSelectorActions.setVolume(v);
    }

    render () {
        let component = this;
        let node = _.map(this.props.volumes,function(item){
            return <li onClick = {component.select.bind(this,item.name)} ><span className="select-car-name">{item.name}</span></li>;

        });
        return (
            <div>{node}</div>
        )
    }
}

class YearSelector extends React.Component {
    select(y) {
        CarSelectorActions.setYear(y);
        CarSelectorActions.showModel(false);
        RequestActions.resetRequest();
    }

    render () {
        let component = this;
        let node = _.map(this.props.years,function(item){
            return <li onClick = {component.select.bind(this,item)} ><span className="select-car-name">{item}</span></li>;

        });
        return (
            <div>{node}</div>
        )
    }
}

class CarSelector extends React.Component {
    constructor(){
        super();
    }

    getCurrentContent(step) {
        switch(step){
            case 1: return (

                    <BrandSelector/>
            );

            case 2: return <SeriesSelector brand={this.props.brand} series={this.props.serieslist}/>;
            case 3: return <VolumeSelector series={this.props.series} volumes={this.props.volumelist}/>;
            case 4: return <YearSelector volume={this.props.volume} years={this.props.yearlist}/>;
        }
    }
    render() {
        let content = this.getCurrentContent(this.props.step);
        return (
            <div className="car-selector-container">
                {content}
            </div>
        )
    }
}

export default CarSelector;
