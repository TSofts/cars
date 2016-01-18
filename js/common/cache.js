/**
 * Created by shawn on 15/11/28.
 */
class Mobile {
    static ios() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }

    static ipad() {
        var ios = this.ios();
        return !!(ios && ios[0] === 'iPad');
    }
}

class CacheUtil {

    static get(name) {

        if (Mobile.ios() || Mobile.ipad()) {
            return localStorage.getItem(name);
        }
        else {
            return $.cookie(name);
        }
    }

    static add(name, value) {
        if (Mobile.ios() || Mobile.ipad()) {
            localStorage.setItem(name, value);
        }
        else {
            $.cookie(name, value);
        }
    }
}

export default CacheUtil;