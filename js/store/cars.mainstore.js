import MainActions from '../action/cars.mainaction'
import alt from '../alt'

class MainStore {
    constructor() {
        this.currentTag = $.cookie('type');

        this.bindListeners({
            handleUpdateCurrentTag: MainActions.updateCurrentTag
        })
    }

    handleUpdateCurrentTag(tag) {
        $.cookie('type', tag);
        this.currentTag = tag;
    }

}

export default alt.createStore(MainStore, 'MainStore');