import BrandActions from '../action/cars.brandaction'
import BrandSource from '../source/cars.brandsource'
import alt from '../alt'

class BrandStore {
    constructor() {
        this.brand = [];

        this.bindListeners({
            handleLoadBrand: BrandActions.loadBrand,
            handleFilterBrand: BrandActions.filterBrand
        });

        this.exportAsync(BrandSource);
    }

    handleLoadBrand() {
    }

    handleFilterBrand(v){

    }

}

export default alt.createStore(BrandStore, 'BrandStore');