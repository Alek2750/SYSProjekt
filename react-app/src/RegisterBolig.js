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
                                <input type="text" placeholder="Postnummer" name="telefon" id="telefon" />
                                <input type="text" placeholder="Boligtype" name="email" id="email" />
                                <input type="text" placeholder="Værelser" name="title" id="title" />
                                <input type="text" placeholder="Størrelse" name="message" id="message" />
                                <input type="text" placeholder="Etage" name="name" id="username" />
                                <input type="text" placeholder="Leje" name="telefon" id="telefon" />
                                <input type="text" placeholder="Depositum" name="email" id="email" />
                                <input type="submit" name="send" class="btn btn-warning" value="Opret Bolig" onClick={this.register} />
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