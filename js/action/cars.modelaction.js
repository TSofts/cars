import alt from '../alt'

class ModelActions {

    open(b) {
        this.dispatch(b);
    }

    close(s) {
        this.dispatch(s);
    }
}

export default alt.createActions(ModelActions);