import React, { Component } from 'react'
import aarhus from './images/aarhus.png'
import odense from './images/odense.png'
import copenhagen from './images/copenhagen.png'
import amager from './images/amager.png'
import fyn from './images/fyn.png'
import './main.css';


export default class Home extends Component {
    render() {
        return (
            <div>
                <section id="pagebanner" className="align-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="Frontpage__top-header">Find din næste lejlighed</h1>
                            </div>
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8 center">

                                <form action="Find">
                                    <label htmlFor="find" className="sr-only"></label> <input id="find"
                                        className="custom-form-control input-group-lg" type="text" name="find"
                                        title="Hvor vil du gerne bo?" placeholder="Hvor vil du gerne bo?" />

                                    <button className="btn find">Søg blandt 10.805 lejeboliger</button>
                                </form>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                    </div>
                </section>

                <section className="info-box">
                    <div className="container center">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 portfolio-item">
                                <h4 className="card-title">
                                    <a href="/">9.008 nye lejligheder</a>
                                </h4>
                                <p className="card-text">oprettet de sidste 30 dage</p>
                            </div>
                            <div className="col-lg-4 col-sm-6 portfolio-item">
                                <h4 className="card-title">
                                    <a href="/">17.133 brugere</a>
                                </h4>
                                <p className="card-text">har fundet bolig de sidste 2 måneder</p>
                            </div>
                            <div className="col-lg-4 col-sm-6 portfolio-item">
                                <h4 className="card-title">
                                    <a href="CustomerService">Kundeservice</a>
                                </h4>
                                <p className="card-text">8-22 hver dag – Hele året</p>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="container info-box-2">

                    <div className="row">

                        <div className="col-lg-custom portfolio-item">
                            <div className="card h-100">
                                <span className="Frontpage__cities-item__name">København</span> <a
                                    href="/"><img className="card-img-top" src={copenhagen}
                                        alt="" /> </a>
                            </div>
                        </div>
                        <div className="col-lg-custom portfolio-item">
                            <span className="Frontpage__cities-item__name">Odense</span>
                            <div className="card h-100">
                                <a href="/"><img className="card-img-top" src={odense}
                                    alt="" /> </a>
                            </div>
                        </div>
                        <div className="col-lg-custom portfolio-item">
                            <span className="Frontpage__cities-item__name">Fyn</span>
                            <div className="card h-100">
                                <a href="/"><img className="card-img-top" src={fyn}
                                    alt="" /> </a>
                            </div>
                        </div>
                        <div className="col-lg-custom portfolio-item">
                            <span className="Frontpage__cities-item__name">En anden by</span>
                            <div className="card h-100">
                                <a href="/"><img className="card-img-top" src={amager}
                                    alt="" /> </a>
                            </div>
                        </div>
                        <div className="col-lg-custom portfolio-item">
                            <span className="Frontpage__cities-item__name">En tredje by</span>
                            <div className="card h-100">
                                <a href="/"><img className="card-img-top" src={aarhus}
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