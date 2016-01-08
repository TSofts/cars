import alt from '../alt'

class CarSelectorActions {
    gotoStep(s) {
        console.debug("action");
        this.dispatch(s);
    }

    finishSeries(brands) {
        this.dispatch(brands);
    }

    finishYear(brands){
        this.dispatch(brands);
    }

}

export default alt.createActions(CarSelectorActions);