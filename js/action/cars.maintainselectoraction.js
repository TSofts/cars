import alt from '../alt'

class MaintainSelectorActions {

    loadList(obj) {
        this.dispatch(obj);
    }

    successLoad(list){
        this.dispatch(list);
    }

    failedLoad(error){
        this.dispatch(error);
    }

}

export default alt.createActions(MaintainSelectorActions);