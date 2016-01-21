import MaintainSelectorActions from '../action/cars.maintainselectoraction'
import alt from '../alt'

var RequestSource = {
    loadList() {
        return {
            remote(store,obj){
                return new Promise(function(resolve,reject){
                    // Completed of async action, set loading state back
                    let small = [
                        {
                            name:'机油'
                        },
                        {
                            name:'机油滤清器'
                        }
                    ];
                    let big = [
                        {
                            name:'机油'
                        },
                        {
                            name:'机油滤清器'
                        },
                        {
                            name:'空气滤清器'
                        },
                        {
                            name:'然后滤清器'
                        }
                    ];
                    if(obj == 'small'){

                        resolve(small);
                    }
                    else {
                        resolve(big);
                    }

                })
            },
            success:MaintainSelectorActions.successLoad,
            error:MaintainSelectorActions.failedLoad
        }
    }

};

export default RequestSource;