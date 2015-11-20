/**
 * Created by Shawn on 15/11/19.
 */

'use strict';

import React from 'react';
import { Router, Route, Link, Redirect }  from 'react-router'
import { Navbar } from 'react-bootstrap'

class TopNav extends React.Component {

    render() {
        return (
            <Navbar inverse fix>
                <Navbar.Header>
                    <Navbar.Brand>
                        Cars
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        )
    }
}

export default TopNav;

