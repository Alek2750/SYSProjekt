import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import testcity from './images/testcity.jpg'
//import { Jumbotron, Grid, Image, Button } from 'react-bootstrap';
import './main.css';
//import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <section id="pagebanner" class="align-middle">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1 class="Frontpage__top-header">Find din næste lejlighed</h1>
                            </div>
                            <div class="col-lg-2"></div>
                            <div class="col-lg-8 center">

                                <form action="Find">
                                    <label for="find" class="sr-only"></label> <input id="find"
                                        class="custom-form-control input-group-lg" type="text" name="find"
                                        title="Hvor vil du gerne bo?" placeholder="Hvor vil du gerne bo?" />

                                    <button class="btn find">Søg blandt 10.805 lejeboliger</button>
                                </form>
                            </div>
                            <div class="col-lg-2"></div>
                        </div>
                    </div>
                </section>

                <section class="info-box">
                    <div class="container center">
                        <div class="row">
                            <div class="col-lg-4 col-sm-6 portfolio-item">
                                <h4 class="card-title">
                                    <a href="#">9.008 nye lejligheder</a>
                                </h4>
                                <p class="card-text">oprettet de sidste 30 dage</p>
                            </div>
                            <div class="col-lg-4 col-sm-6 portfolio-item">
                                <h4 class="card-title">
                                    <a href="#">17.133 brugere</a>
                                </h4>
                                <p class="card-text">har fundet bolig de sidste 2 måneder</p>
                            </div>
                            <div class="col-lg-4 col-sm-6 portfolio-item">
                                <h4 class="card-title">
                                    <a href="CustomerService">Kundeservice</a>
                                </h4>
                                <p class="card-text">8-22 hver dag – Hele året</p>
                            </div>
                        </div>
                    </div>
                </section>


                <div class="container info-box-2">

                    <div class="row">

                        <div class="col-lg-custom portfolio-item">
                            <div class="card h-100">
                                <span class="Frontpage__cities-item__name">København</span> <a
                                    href="#"><img class="card-img-top" src={testcity}
                                        alt="" /> </a>
                            </div>
                        </div>
                        <div class="col-lg-custom portfolio-item">
                            <span class="Frontpage__cities-item__name">Odense</span>
                            <div class="card h-100">
                                <a href="#"><img class="card-img-top" src={testcity}
                                    alt="" /> </a>
                            </div>
                        </div>
                        <div class="col-lg-custom portfolio-item">
                            <span class="Frontpage__cities-item__name">Fyn</span>
                            <div class="card h-100">
                                <a href="#"><img class="card-img-top" src={testcity}
                                    alt="" /> </a>
                            </div>
                        </div>
                        <div class="col-lg-custom portfolio-item">
                            <span class="Frontpage__cities-item__name">En anden by</span>
                            <div class="card h-100">
                                <a href="#"><img class="card-img-top" src={testcity}
                                    alt="" /> </a>
                            </div>
                        </div>
                        <div class="col-lg-custom portfolio-item">
                            <span class="Frontpage__cities-item__name">En tredje by</span>
                            <div class="card h-100">
                                <a href="#"><img class="card-img-top" src={testcity}
                                    alt="" /> </a>
                            </div>
                        </div>

                    </div>


                </div>



                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
            </div>
        )
    }
}