import React, { Component } from "react"
import facade from "./apiFacade";
import './CustomNavbar.css'
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Jwt.js';
import { user } from './Jwt.js';
import AppClient from "./AppClientPagination";
//Note: 'npm install react-bootstrap --save' kan forekomme nødvendigt
//Note: 'npm install react-router-dom --save' kan forekomme nødvendigt 


const Home = () => <div><h1>Welcome to the page! Please Login to continue</h1></div>
//Indsæt kode
//const Login = () => <div className="Login"><h1>Link jwt siden her</h1></div>;
//Indsæt kode
const Logout = () => <div>{facade.logout()}You have now been logged out</div>;
//Indsæt kode
const Data = () => <div className="Data"><h1>Data: Link til swapi eller noget her</h1></div>
class NaviBar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">BoligRunner</Link>
                    </Navbar.Brand>
                    
                </Navbar.Header>
                
                <Nav className='nav'>
                    <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                        <b>Home</b>
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} href="/Navigation/Login" to="/Navigation/Login">
                        <b>Login</b>
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} href="/Navigation/Data" to="/Navigation/Data">
                        <b>Data</b>
                    </NavItem>
                    <NavItem eventKey={4} componentClass={Link} href="/Navigation/DataTable" to="/Navigation/DataTable">
                        <b>Table</b>
                    </NavItem>
                    <NavItem eventKey={5} componentClass={Link} href="/Navigation/ResidenceList" to="/Navigation/ResidenceList">
                        <b>Residences</b>
                    </NavItem>
                </Nav>
                
            </Navbar>
        );
    }
}
//CSS'en forbundet til App.css

export default NaviBar;