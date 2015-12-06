import LoginActions from '../action/cars.loginaction'
import LoginSource from '../source/cars.loginsource'
import alt from '../alt'

class LoginStore {
    constructor() {
        this.session = localStorage.getItem("*cars-sessioninfo");
        this.isLogged = (this.session != null && this.session != undefined);
        console.debug("loginStore"+this.isLogged);
        this.user={};
        if(this.isLogged ){
            this.user = JSON.parse(this.session);
        }
        this.errorMessage = "";
        this.bindListeners({
            handleLoginProceed: LoginActions.loginProceed,
            handleUpdateLoggingStatus: LoginActions.updateLoggingStatus,
            handleLoginFailed: LoginActions.loginFailed,
            handleLoginSucceed: LoginActions.loginSucceed
        });

        this.exportAsync(LoginSource);
    }

    handleLoginProceed(usr) {
        console.debug("222");
        this.isLogged = true;
    }

    handleUpdateLoggingStatus(flag) {
        this.isLogged = flag;
    }

    handleLoginFailed(errorMessage) {
        console.debug("store");
        this.errorMessage = errorMessage;
        this.isLogged = false;
    }

    handleLoginSucceed(user) {
        this.isLogged = true;
        this.user = user;
        localStorage.setItem("*cars-sessioninfo",JSON.stringify(user));
    }

}

export default alt.createStore(LoginStore, 'LoginStore');