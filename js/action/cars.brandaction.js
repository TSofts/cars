import alt from '../alt'

class BrandActions {
    loadBrand(selector) {
        this.dispatch(selector);
    }

    filterBrand(selector) {
        this.dispatch(selector);
    }

    loadSucceed(brands){
        this.dispatch(brands);
    }

    loadFailed(error){
        this.dispatch(error);
    }
}

export default alt.createActions(BrandActions);