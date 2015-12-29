/**
 * Created by Shawn on 15/11/19.
 */

'use strict';

class Footer extends React.Component {

    render() {
        return (
            <div className="container-foot" fluid>
                <ul className="footer-menu">
                    <li>
                        关于养车网
                    </li>
                    <li>
                        联系我们
                    </li>
                    <li>
                        商务合作
                    </li>
                    <li className="lastli">
                        隐私声明
                    </li>
                </ul>
                <br/>
                <span>
                    CopyRight @ 2015 苏州长锦电子商务有限公司 ,All Rights Reserved.
                </span>
            </div>
        )
    }
}

export default Footer;

