import CarSelectorActions from '../action/cars.carselectoraction'
import alt from '../alt'

class CarSelectorStore {
    constructor() {
        this.step = 1;

        this.bindListeners({
            handleGotoStep: CarSelectorActions.gotoStep,
            handleFinishSeries: CarSelectorActions.finishSeries,
            handleFinishYear: CarSelectorActions.finishYear
        });

    }

    handleGotoStep(s) {
        console.debug("store");
        this.step = s;
        console.debug(this.step);

    }

    handleFinishSeries(){

    }

    handleFinishYear(){

    }

}

export default alt.createStore(CarSelectorStore, 'CarSelectorStore');