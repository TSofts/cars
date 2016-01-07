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

                {this.props.children}
            </div>
        )
    }
}

export default Request;