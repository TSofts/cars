import LoginActions from '../action/cars.loginaction'
import alt from '../alt'

var LoginSource = {
    loginProceed() {
        return {
            remote(store,usr){
                return new Promise(function(resolve,reject){
                    console.debug(usr);
                    // Completed of async action, set loading state back
                    if((usr.username=="test")&&(usr.password='123')){
                        console.debug("123")
                        resolve(usr);

                    }
                    else {
                        console.debug("321")
                        reject("登录失败");
                    }

                })
            },
            success:LoginActions.loginSucceed,
            error:LoginActions.loginFailed
        }
    }

};

export default LoginSource;