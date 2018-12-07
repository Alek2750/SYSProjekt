import React, { Component } from 'react';
import './main.css';

class Contact extends Component {
    render() {
        return (
            <div>
                <section id="login" class="align-middle">
                    <div class="container">
                        <div class="loginmodal-container">
                            <h1>Kontakt mægler</h1>
                            <br />
                            <form type="POST" onChange={this.onChange} >
                                <input type="text" placeholder="For- og efternavn" name="name" id="username" />
                                <input type="text" placeholder="Telefon" name="telefon" id="telefon" />
                                <input type="text" placeholder="E-mail" name="email" id="email" />
                                <input type="text" placeholder="Bolig Titel" name="title" id="title" />
                                <input type="text" placeholder="Skriv besked" name="message" id="message" />
                                <input type="submit" name="send" class="btn btn-warning" value="Indsend Besked" onClick={this.register} />
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

export default Contact;