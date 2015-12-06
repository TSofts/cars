import alt from '../alt'

class LoginActions {
    updateLoggingStatus(flag){
        this.dispatch(flag);
    }

    loginSucceed(usr) {
        this.dispatch(usr);
    }

    loginProceed(usr) {
        console.debug("3333");
        this.dispatch(usr);
    }

    loginFailed(error){
        console.debug("action");
        console.debug(error);
        this.dispatch(error);
    }
}

export default alt.createActions(LoginActions);