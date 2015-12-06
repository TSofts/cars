import HeaderActions from '../action/cars.headeraction'
import alt from '../alt'

class HeaderStore {
    constructor() {
        this.headerState = "";

        this.bindListeners({
            handleUpdateUserType: HeaderActions.updateUserType
        })
    }

    handleUpdateUserType(type) {
        this.userType = type;
    }

}

export default alt.createStore(HeaderStore, 'HeaderStore');