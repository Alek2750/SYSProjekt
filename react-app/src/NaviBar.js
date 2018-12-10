import React, { Component } from "react";
import './main.css';
import logo2 from './images/logo2.png'


class NaviBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={logo2} alt="logo"/></a>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a className="nav-link" href="/">Home
                            <li className="dropdown"/>
                            <ul className="dropdown-menu"/>
							<span className="sr-only">(current)</span> </a></li>
                            <li className="nav-item"><a className="nav-link" href="/Find">Søg
							bolig</a></li>
                            <li className="nav-item"><a className="nav-link" href="/OpretBolig">Opret bolig
							</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Register">Opret
							bruger</a></li>
                            <li className="nav-item"><a className="nav-link" href="/Login">Log ind</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NaviBar;