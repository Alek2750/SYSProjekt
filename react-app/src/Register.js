import React, { Component } from 'react';
//import './App.css';
import './main.css';

class Register extends Component {
	render() {
		return (
			<div>
				<section id="login" class="align-middle">
					<div class="container">
						<div class="loginmodal-container">
							<h1>Opret Bruger</h1>
							<br />
							<form type="POST" action="register.html">
								<input type="text" name="fullname" placeholder="Fulde Navn" />
								<input type="text" name="email" placeholder="Email" />
								<input type="password" name="pass" placeholder="Password" />
								<input type="password" name="confirm_pass" placeholder="Gentag Password" />
								<input type="submit" name="login" class="btn btn-warning" value="Opret Bruger" />
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

export default Register;