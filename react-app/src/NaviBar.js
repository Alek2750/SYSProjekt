import React, { Component } from "react"
import './CustomNavbar.css'
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { user } from './Jwt.js';

//Note: 'npm install react-bootstrap --save' kan forekomme nødvendigt
//Note: 'npm install react-router-dom --save' kan forekomme nødvendigt 
//Indsæt kode

class NaviBar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">BoligRunner</Link>
                        <div>Logged in as: {user}</div>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav className='nav'>
                    <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                        <b>Home</b>
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} href="/Login" to="/Login">
                        <b>Login</b>
                    </NavItem>                    
                    <NavItem eventKey={4} componentClass={Link} href="/DataTable" to="/DataTable">
                        <b>Table</b>
                    </NavItem>
                    <NavItem eventKey={5} componentClass={Link} href="/ResidenceList" to="/ResidenceList">
                        <b>Residences</b>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
//CSS'en forbundet til App.css

export default NaviBar;