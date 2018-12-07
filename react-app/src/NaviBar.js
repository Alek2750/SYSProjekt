import React, { Component } from "react";
import './main.css';
import logo2 from './images/logo2.png'


class NaviBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-white fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img src={logo2} /></a>
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active"><a class="nav-link" href="/">Home
                            <li class="dropdown"/>
                            <ul class="dropdown-menu"/>
							<span class="sr-only">(current)</span> </a></li>
                            <li class="nav-item"><a class="nav-link" href="Find">Søg
							bolig</a></li>
                            <li class="nav-item"><a class="nav-link" href="OpretBolig">Opret
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

export default NaviBar;