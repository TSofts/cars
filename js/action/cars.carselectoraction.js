import alt from '../alt'

class CarSelectorActions {

    setBrand(b) {
        this.dispatch(b);
    }

    setSeries(s) {
        this.dispatch(s);
    }
    setVolume(v){
        this.dispatch(v);
    }

    setYear(y) {
        this.dispatch(y);
    }
    resetStep() {
        this.dispatch();
    }

    showModel(f) {
        this.dispatch(f);
    }

}

export default alt.createActions(CarSelectorActions);