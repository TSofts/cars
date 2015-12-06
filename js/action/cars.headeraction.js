import alt from '../alt'

class HeaderActions {
    updateUserType(type) {
        this.dispatch(type);
    }
}

export default alt.createActions(HeaderActions);