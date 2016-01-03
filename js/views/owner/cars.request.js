/**
 * Created by shawn on 16/1/1.
 */
'use strict'

import { Modal,Button } from 'react-bootstrap'
import { Link}  from 'react-router'

class Request extends React.Component {


    render() {
        return (
            <div className="request-container">
                <Link to="/">首页</Link> > 发布保养
                <ul className="request-nav">
                    <li className="request">
                        第一步
                    </li>
                    <li className="request">
                        第二步
                    </li>
                    <li className="request">
                        第三步
                    </li>
                </ul>
                <div className="request-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Request;