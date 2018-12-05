import React, { Component } from "react";
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
class CustomerService extends Component{
    render(){
        return(
            <center>
            <div class="col-lg-4 portfolio-item contact-landlord">
                <div class="card">
                    <div class="card-header"><h4>Kontakt Udlejer</h4></div>
                    <div class="card-body">
                        <h5 class="card-title">Telefon</h5> 
                        <FaPhone/> 11 22 33 44
                        <br/>
                        <br/>
                        <h5 class="card-title">Email</h5>
                        <FaEnvelope/> Boligrunner@mail.com
                        <br/>
                        <br/>
                        <h5 class="card-title"><FaClock/> 2+ år lejeperiode</h5>

                    </div>
                    <div class="card-footer">
                        <button id="search" class="btn btn-primary" name="search"
                        onclick="location.href='register.html' "type="button">
                            <FaEnvelope/> Skriv til udlejer
                        </button>
                    </div>

                </div>

            </div>
            </center>
        )
    }
}

export default CustomerService;