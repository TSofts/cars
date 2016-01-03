/**
 * Created by Shawn on 15/11/19.
 */

'use strict';

import { Router, Route, Link, Redirect }  from 'react-router'
import { Navbar, Nav, NavItem, Label,Input,Button,Glyphicon,Image,NavDropdown,MenuItem } from 'react-bootstrap'
import AltContainer from 'alt/AltContainer'

import HeaderStore from '../store/cars.headerstore'
import LoginStore from '../store/cars.loginstore'

import LoginAction from '../action/cars.loginaction'
import MainAction from '../action/cars.mainaction'
import HeaderAction from '../action/cars.headeraction'


class UserType extends React.Component {
    getTypeText() {
        let type = this.props.userType;
        switch (type) {
            case "owner":
                return "我是车主";
            case "operator":
                return "我是技工";
            default:
                return "other";

        }
    }

    handleResetType() {
        MainAction.updateCurrentTag('reset');
        HeaderAction.updateUserType('');
    }

    getResetButton() {
        return <Button bsSize="small" className="cars-button" onClick={this.handleResetType.bind(this)}><Glyphicon
            glyph="repeat"/></Button>
    }

    render() {
        let typeText = this.getTypeText();
        if (typeText == 'other') {
            return (<div/>)
        }

        //let button = this.getResetButton();
        return (
            <Navbar.Text>
                {typeText} <Navbar.Link onClick={this.handleResetType.bind(this)}>重选</Navbar.Link>
            </Navbar.Text>
        )

    }
}

class LoginPanel extends React.Component {
    constructor() {
        super();

    }

    handleLoginProceed() {
        var user = {
            username: this.refs.username.getValue(),
            password: this.refs.password.getValue()
        };
        LoginStore.loginProceed(user);
    }

    render() {
        return (
            <form className="header-loginform">
                <Input className="cars-input" ref="username" type="text" placeholder="注册邮箱/用户名"/>
                <Input className="cars-input" ref="password" type="password" placeholder="登陆密码"/>
                <MenuItem divider/>
                <Link to="/forget" style={{"float":"left"}}>忘记密码</Link><Link to="/register" style={{"float":"right"}}>免费注册</Link>
                <Button className="cars-button"
                        onClick={this.handleLoginProceed.bind(this)}>{(LoginStore.isLoading() == true) ? "登录中..." : "登陆"}</Button>
            </form>
        )
    }
}

class UserInfo extends React.Component {

    handleLogout() {
        localStorage.removeItem("*cars-sessioninfo");
    }

    render() {
        if (this.props.isLogged) {
            return (
                <NavDropdown eventKey={3} title={this.props.user.username} id="basic-nav-dropdown">
                    <ul className="header-menu">
                        <li className="menu-ele"><Link to="/usercenter">会员中心</Link></li>
                        <li className="menu-ele"><Link to="/security">账户安全</Link></li>
                        <MenuItem divider/>
                        <li className="menu-ele"><Link to="/" onClick={this.handleLogout.bind(this)}>注销登录</Link></li>
                    </ul>
                </NavDropdown>
            )
        }
        else {
            return (
                <NavDropdown eventKey={3} title="登录" id="basic-nav-dropdown">
                    <LoginPanel/>
                </NavDropdown>
            )
        }
    }
}

class RequestBtn extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
    }

    showModal() {

        this.setState({show: true});
    }

    hideModal() {
        this.setState({show: false});
    }

    render() {
        let userType = this.props.userType;
        let smClose = () => this.setState({smShow: false});
        if (userType == 'owner') {
            return (
                <NavItem onClick={this.showModal.bind(this)}>
                    <Link to="/request">我要保养</Link>

                </NavItem>

            )
        }
        else {
            return (
                <NavItem/>
            )
        }

    }
}

class TopNav extends React.Component {

    getUserType() {
        return (
            <AltContainer store={HeaderStore}>
                <UserType/>
            </AltContainer>)
    }

    getUserInfo() {
        return (
            <AltContainer store={LoginStore}>
                <UserInfo/>
            </AltContainer>
        )
    }


    getRequestButton() {
        return (
            <AltContainer store={HeaderStore}>
                <RequestBtn/>
            </AltContainer>
        )
    }

    render() {
        let userType = this.getUserType();
        let userInfo = this.getUserInfo();
        let requestBth = this.getRequestButton();
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">人来车往</Link>
                    </Navbar.Brand>

                </Navbar.Header>
                <Navbar.Collapse>

                    <Nav pullRight>
                        {userType}
                        {requestBth}
                        {userInfo}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

class TopNavPage extends React.Component {
    render() {
        return (
            <TopNav/>
        )
    }
}

export default TopNavPage;

