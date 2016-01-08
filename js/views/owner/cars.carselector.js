/**
 * Created by shawn on 16-1-7.
 */
import {Image} from 'react-bootstrap'
import AltContainer from 'alt/AltContainer'
import BrandStore from '../../store/cars.brandstore'
import Cars from '../../common/cars'
import CarSelectorActions from '../../action/cars.carselectoraction'

class CarBrand extends React.Component {
    constructor() {
        super();
        this.state = {
            brands:Cars
        }
    }


    select() {
        CarSelectorActions.gotoStep(2);
    }
    getNodes(){
        let component = this;
        return _.map(_.filter(Cars.brands,function(item){
            return item.alpha == component.props.selected;
        }),function(item){
            return <li onClick = {component.select.bind(this)} ><Image className="select-car-brand"
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
    render () {
        return (
            <div>Series</div>
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
            case 1: return (

                    <BrandSelector/>
            );

            case 2: return <SeriesSelector/>;
            case 3: return <VolumeSelector/>;
            case 4: return <YearSelector/>;
        }
    }
    render() {
        console.debug("Car selector");
        console.debug(this.props.step);
        let content = this.getCurrentContent(this.props.step);
        return (
            <div className="car-selector-container">
                {content}
            </div>
        )
    }
}

export default CarSelector;
