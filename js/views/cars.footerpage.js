/**
 * Created by Shawn on 15/11/19.
 */

'use strict';

import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer" style={{"background-color":"#ddd"}} fluid>
                <ul>
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
                <p>
                    CopyRight @ 2015 苏州长锦电子商务有限公司 ,All Rights Reserved.
                </p>
            </div>
        )
    }
}

export default Footer;

