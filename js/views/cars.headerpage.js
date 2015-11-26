/**
 * Created by Shawn on 15/11/19.
 */

'use strict';

import React from 'react';
import { Router, Route, Link, Redirect }  from 'react-router'
import { Navbar, Nav, NavItem, Label } from 'react-bootstrap'

class TopNav extends React.Component {

    getUserType() {
        let type = $.cookie('usertype');
        switch(type) {
            case "owner": return "我是车主";
            case "operator": return "我是技师";
        }
    }

    render() {
        let userType = this.getUserType();
        return (
            <Navbar inverse fix>
                <Navbar.Header>
                    <Navbar.Brand>
                        Cars
                    </Navbar.Brand>

                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>

                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#"><Label>{userType}</Label></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default TopNav;

