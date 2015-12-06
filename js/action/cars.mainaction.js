import alt from '../alt'

class MainActions {
    updateCurrentTag(tag) {
        this.dispatch(tag);
    }
}

export default alt.createActions(MainActions);