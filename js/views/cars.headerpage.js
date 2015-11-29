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
import DefaultImg from '../../image/test.png'

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
        return <Button className="cars-button" onClick={this.handleResetType.bind(this)}><Glyphicon glyph="repeat"/></Button>
    }

    render() {
        let typeText = this.getTypeText();
        if (typeText == 'other') {
            return (<div/>)
        }

        let button = this.getResetButton();
        return (
            <Input className="cars-input" type="text" bsSize="small" placeholder={typeText} readOnly buttonAfter={button}/>);

    }
}

class LoginPanel extends React.Component {
    constructor(){
        super();

    }
    handleLoginProceed() {
        var user = {
            username: this.refs.username.getValue(),
            password:this.refs.password.getValue()
        };
        LoginStore.loginProceed(user);
    }

    render() {
        return (
            <form className="header-loginform">
                <Input className="cars-input" ref="username" type="text" placeholder="注册邮箱/用户名"/>
                <Input className="cars-input" ref="password" type="password" placeholder="登陆密码"/>
                <MenuItem divider />
                <a style={{"float":"left"}}>忘记密码</a><a style={{"float":"right"}}>免费注册</a>
                <Button className="cars-button" onClick={this.handleLoginProceed.bind(this)}>{(LoginStore.isLoading()==true)?"登录中...":"登陆"}</Button>
            </form>
        )
    }
}

class UserInfo extends React.Component {
    getDropDownPanel() {
        if (this.props.isLogged) {
            return (
                <div>{this.props.user.username}</div>
            )
        }
        else {
            return (
                <LoginPanel/>
            )
        }
    }

    render() {
        let dropDown = this.getDropDownPanel();
        return (
            <NavDropdown eventKey={3} title="" id="basic-nav-dropdown">
                {dropDown}
            </NavDropdown>
        )
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


    render() {
        let userType = this.getUserType();
        let userInfo = this.getUserInfo();
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        Cars
                    </Navbar.Brand>

                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>

                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            <div className="header-type">{userType}</div>
                        </NavItem>
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

