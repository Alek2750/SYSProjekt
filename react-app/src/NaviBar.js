import React, { Component } from "react"
import facade from "./apiFacade";
import './App.css';
import {Navbar, Nav, NavItem} from "react-bootstrap";
//Note: 'npm install react-bootstrap --save' kan forekomme nødvendigt 

class NaviBar extends Component{
render() {
return (
    <Navbar>
    <Nav>
        <NavItem eventKey={1} href="#home">
        Home
        </NavItem>
        <NavItem eventKey={2} href="#">
        Login
        </NavItem>
        <NavItem eventKey={3} href="#">
        Logout
        </NavItem>
    </Nav>
    </Navbar>
);
}
}

export default NaviBar;