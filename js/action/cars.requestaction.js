import alt from '../alt'

class RequestActions {

    setCar(b) {
        this.dispatch(b);
    }

    setMaintain(m) {
        this.dispatch(m);
    }
    setMemo(mm){
        this.dispatch(mm);
    }

    successPublished(obj){
        this.dispatch(obj);
    }

    failedPublished(error){
        this.dispatch(error);
    }

    resetRequest() {
        this.dispatch();
    }

}

export default alt.createActions(RequestActions);