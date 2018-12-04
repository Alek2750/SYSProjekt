import React, { Component } from 'react';
//import './App.css';
import './main.css';
import facade from "./apiFacade";

export let user = 'Not logged in';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" }
    }
    login = (evt) => {
        user=this.state.username;
        evt.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }
    register = (evt) => {        
        evt.preventDefault();
        facade.register(this.state.username, this.state.password);
    }
    onChange = (evt) => {
        this.setState({ [evt.target.id]: evt.target.value })
    }
    render() {
        return (
            <div>
                <section id="login" class="align-middle">
                    <div class="container">
                        <div class="loginmodal-container">
                            <h1>Log ind</h1>
                            <br />
                            <form type="POST" onChange={this.onChange} >
                                <input type="text" name="user" placeholder="Username" id="username" />
                                <input name="pass" type="password" placeholder="Password" id="password" />
                                <input name="login" class="btn btn-success" onClick={this.login} value="Log Ind" />
                            </form>
                            <div class="login-help">
                                <a href="#">Intet Login? </a> - <a href="register">Opret en gratis bruger</a>
                            </div>
                        </div>
                    </div>
                </section>





                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>


            </div>
        )
    }
}

export default Login;