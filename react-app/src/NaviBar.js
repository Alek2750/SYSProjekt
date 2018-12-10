import React, { Component } from "react";
//import './CustomNavbar.css'
import './main.css';
import logo2 from './images/logo2.png'
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { user } from './Jwt.js';

//Note: 'npm install react-bootstrap --save' kan forekomme nødvendigt
//Note: 'npm install react-router-dom --save' kan forekomme nødvendigt 

class NaviBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-white fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img src={logo2} />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active"><a class="nav-link" href="/">Home
							<span class="sr-only">(current)</span> </a></li>
                            <li class="nav-item"><a class="nav-link" href="Find">Søg
							bolig</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Udlej
							bolig</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Lejekontrakter</a>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="Register">Opret
							bruger</a></li>
                            <li class="nav-item"><a class="nav-link" href="Login">Log ind</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
//CSS'en forbundet til App.css

export default NaviBar;