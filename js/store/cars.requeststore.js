import RequestActions from '../action/cars.requestaction'
import RequestSource from '../source/cars.requestsource'
import Cars from '../common/cars'
import alt from '../alt'

class RequestSelectorStore {
    constructor() {
        this.step = 1;
        this.car = {};
        this.obj = {};
        this.maintain = {};
        this.memo = {};

        this.bindListeners({
            handleSetCar: RequestActions.setCar,
            handleSetMaintain: RequestActions.setMaintain,
            handleSetMemo: RequestActions.setMemo,
            handleSucceedPublish: RequestActions.successPublished,
            handleFaildPublish: RequestActions.failedPublished,
            handleResetRequest: RequestActions.resetRequest
        });

        this.exportAsync(RequestSource);
    }

    handleSetCar(c) {
        this.car = c;
        this.step  = 2;
    }

    handleSetMaintain(m) {
        this.maintaince = m;
        this.step = 3;
    }

    handleSetMemo(mm) {
        this.memo = mm;
        this.step = 4;
    }

    handleSucceedPublish(obj){
        console.debug("success store");

        console.debug(obj);
        this.step = 5;
    }

    handleFaildPublish(obj) {
        console.debug("fail store");
        this.step = 6;
    }

    handleResetRequest(){
        this.step = 1;
        this.brand= "";
    }

}

export default alt.createStore(RequestSelectorStore, 'RequestSelectorStore');