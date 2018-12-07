import React, { Component } from 'react';
//import './App.css';
import './main.css';
import facade from "./apiFacade";

export let user = 'Not logged in';

class Register extends Component {
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
							<h1>Opret Bruger</h1>
							<br />
							<form type="POST" onChange={this.onChange} >
								<input type="text" placeholder="Email" name="email" id="username" />
								<input type="password" name="pass" placeholder="Password" id="password" />
								<input type="submit" name="login" class="btn btn-warning" value="Opret Bruger" onClick={this.register} />
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
//class Jwt extends Component {
   
  //  constructor(props) {
    //    super(props);
      //  this.state = { loggedIn: false }
    //}
    
//    register = (user, pass) => {
//        facade.register(user, pass)
//            .then(res => this.setState({ loggedIn: true }));
//	}
//}
export default Register;