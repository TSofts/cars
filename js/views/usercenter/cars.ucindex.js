/**
 * Created by Shawn on 15/11/19.
 */

'use strict';
import { Router, Route, Link, Redirect, IndexRoute } from 'react-router'
import { Image,Button,Grid,Table } from 'react-bootstrap'


class UserPanelPage extends React.Component {
    constructor() {
        super();
        this.state = {
            feeds: []
        };
    }

    getRecentOrders(){
        return (
            <tbody>

            </tbody>
        )
    }

    getOrderTable(){
        let orders = this.getRecentOrders();
        return (
            <Table responsive className="recent-orders">
                <thead>
                    <tr>
                        <th>
                            订单号
                        </th>
                        <th>
                            接单日期
                        </th>
                        <th>
                            接单人
                        </th>
                        <th>
                            订单状态
                        </th>
                    </tr>
                </thead>
                {orders}
            </Table>
        )
    }
    render() {
        let orders = this.getOrderTable();
        return (
            <div className="account-panel">
                <div className="account-nav">
                    <Link to="/">首页</Link> > 会员中心
                </div>
                <div className="account account-title">
                    <span className="x-large">用户1101</span> 欢迎来到人来车往

                </div>
                <div className="account account-recent-order">
                    <span className="x-large">近期订单</span>
                    {orders}
                </div>
            </div>
        )
    }
}

export default UserPanelPage;

