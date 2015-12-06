/**
 * Created by abby on 15/11/28.
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

    static getCache(name,value) {
        if(Mobile.ios() || Mobile.ipad()){
            localStorage.setItem(name, value);
        }
        else{
            $.cookie(name,value,{ path: '/',expires:7 })
        }
    }
}

export default CacheUtil;