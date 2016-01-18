import CarSelectorActions from '../action/cars.carselectoraction'
import Cars from '../common/cars'
import Cache from '../common/cache'
import alt from '../alt'

class CarSelectorStore {
    constructor() {

        this.showModal = false;
        this.step = 1;
        this.brand = "";
        this.volumelist = [];
        this.series = "";
        this.serieslist = [];
        this.year = "";
        this.yearlist = [];
        this.car = _.isEmpty(Cache.get("carinfo"))?{}:JSON.parse(Cache.get("carinfo"));


        this.bindListeners({
            handleSetBrand: CarSelectorActions.setBrand,
            handleSetVolume: CarSelectorActions.setVolume,
            handleSetSeries: CarSelectorActions.setSeries,
            handleSetYears: CarSelectorActions.setYear,
            handleResetStep: CarSelectorActions.resetStep,
            handleShowModel: CarSelectorActions.showModel
        });

    }

    handleShowModel(flag) {
        this.showModal = flag;
        if(flag){
            this.handleResetStep();
        }
    }

    handleSetBrand(b) {
        this.brand = b;
        this.serieslist = _.filter(Cars.brands,function(item){
            return item.name == b;
        })[0].series;
        this.step  = 2;
    }

    handleSetSeries(s) {
        this.series = s;
        this.volumelist = _.filter(this.serieslist,function(item){
            return item.name == s;
        })[0].volumes;
        this.step = 3;
    }

    handleSetVolume(v) {
        this.volume = v;
        this.yearlist = _.filter(this.volumelist,function(item){
            return item.name == v;
        })[0].years;
        this.step = 4;
    }

    handleSetYears(y) {
        this.year = y;
        this.step = 5;
        this.handleSetCar();
    }

    handleSetCar() {

        this.car.year = this.year;
        this.car.volume = this.volume;
        this.car.series = this.series;
        this.car.brand = this.brand;
        Cache.add("carinfo",JSON.stringify(this.car));
    }

    handleResetStep(){
        this.step = 1;
        this.brand= "";
    }

}

export default alt.createStore(CarSelectorStore, 'CarSelectorStore');