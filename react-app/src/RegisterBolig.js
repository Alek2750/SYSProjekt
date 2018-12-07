import React, { Component } from 'react';
import './main.css';

class RegisterBolig extends Component {
    render() {
        return (
            <div>
                <section id="login" class="align-middle">
                    <div class="container">
                        <div class="loginmodal-container">
                            <h1>Opret Bolig</h1>
                            <br />
                            <form type="POST" onChange={this.onChange} >
                                <input type="text" placeholder="Adresse" name="name" id="username" />
                                <input type="text" placeholder="Postnummer" name="city" id="city" />
                                <input type="text" placeholder="Boligtype" name="proptype" id="proptype" />
                                <input type="text" placeholder="Værelser" name="rooms" id="rooms" />
                                <input type="text" placeholder="Størrelse" name="size" id="size" />
                                <input type="text" placeholder="Etage" name="floor" id="floor" />
                                <input type="text" placeholder="Leje" name="rent" id="rent" />
                                <input type="text" placeholder="Depositum" name="deposit" id="deposit" />
                                <input type="text" placeholder="Møbleret" name="funiture" id="funiture" />
                                <input type="text" placeholder="Husdyr tilladt" name="animals" id="animals" />
                                <input type="text" placeholder="Energimærke" name="energy" id="energy" />
                                <input type="text" placeholder="Lejeperiode" name="period" id="period" />
                                <input type="submit" name="send" class="btn btn-success" value="Opret Bolig" onClick={this.register} />
                            </form>
                        </div>
                    </div>
                </section>
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
            </div>
        );
    }
}

export default RegisterBolig;