import MaintainSelectorActions from '../action/cars.maintainselectoraction'
import MaintainSelectorSource from '../source/cars.maintainsource'
import alt from '../alt'

class MaintainSelectorStore {
    constructor() {

        this.maintainList = [];
        this.error = "";
        this.response = "";

        this.bindListeners({
            handleLoadList: MaintainSelectorActions.loadList,
            handleSuccessLoaded: MaintainSelectorActions.successLoad,
            handleFailedLoaded: MaintainSelectorActions.failedLoad
        });

        this.exportAsync(MaintainSelectorSource);

    }

    handleLoadList() {
    }

    handleSuccessLoaded(list){
        this.response = "Success";
        this.maintainList = list;
    }

    handleFailedLoaded(error){
        this.response = "Error";
        this.error = error;
    }

}

export default alt.createStore(MaintainSelectorStore, 'MaintainSelectorStore');