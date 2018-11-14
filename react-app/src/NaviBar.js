import React, { Component } from "react"
import facade from "./apiFacade";
import {Navbar, Nav, NavItem} from "react-bootstrap";
//Note: 'npm install react-bootstrap --save' kan forekomme nødvendigt 

class NaviBar extends Component{
render() {
return (
    <Navbar>
    <Navbar.Header>
        <Navbar.Brand>
        <a href="#home">Lorem Ipsum</a>
        </Navbar.Brand>
    </Navbar.Header>
    <Nav>
        <NavItem eventKey={1} href="#">
        Login
        </NavItem>
        <NavItem eventKey={2} href="#">
        Logout
        </NavItem>
    </Nav>
    </Navbar>
);
}
}

export default NaviBar;