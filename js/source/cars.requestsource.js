import RequestActions from '../action/cars.requestaction.js'
import alt from '../alt'

var RequestSource = {
    publish() {
        return {
            remote(store,obj){
                return new Promise(function(resolve,reject){
                    // Completed of async action, set loading state back

                    resolve(obj);

                })
            },
            success:RequestActions.successPublished,
            error:RequestActions.failedPublished
        }
    }

};

export default RequestSource;