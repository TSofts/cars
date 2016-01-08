import BrandActions from '../action/cars.brandaction'
import alt from '../alt'

import Car from '../common/cars.js'

var BrandSource = {
    loadBrand() {
        return {
            remote(store){
                return new Promise(function(resolve,reject){
                        resolve(Car.brands);
                })
            },
            success:BrandActions.loadSucceed,
            error:BrandActions.loadFailed
        }
    },

    filter() {
        return {
            remote(store,brands,v){
                return new Promise(function(resolve,reject){

                })
            }
        }
    }

};

export default BrandSource;