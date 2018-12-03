import React, { Component } from 'react';
//import './App.css';
import './main.css';

class Login extends Component {
    render() {
        return (
            <div>
                <section id="login" class="align-middle">
                    <div class="container">
                        <div class="loginmodal-container">
                            <h1>Log ind</h1>
                            <br />
                            <form type="POST" action="login.html">
                                <input type="text" name="user" placeholder="Username" />
                                <input type="password" name="pass" placeholder="Password" />
                                <input type="submit" name="login" class="btn btn-success" value="Login" />
                            </form>

                            <div class="login-help">
                                <a href="#">Intent Login? </a> - <a href="register.html">Opret en gratis bruger</a>
                            </div>
                        </div>
                    </div>
                </section>





                <footer class="py-5 bg-dark">
                    <div class="container">
                        <p class="m-0 text-center text-white">Copyright &copy;
				Boligrunner 2018</p>
                    </div>

                </footer>


                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>


            </div>
        )
    }
}

export default Login;