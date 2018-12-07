import React, { Component } from 'react';
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
                <section id="login" className="align-middle">
                    <div className="container">
                        <div className="loginmodal-container">
                            <h1>Log ind</h1>
                            <br />
                            <form type="POST" onChange={this.onChange} >
                                <input type="text" name="user" placeholder="Email" id="username" />
                                <input name="pass" type="password" placeholder="Password" id="password" />
                                <input type="submit" name="login" className="btn btn-success" onClick={this.login} value="Log Ind" />
                            </form>
                            <div className="login-help">
                                <a href="#">Intet Login? </a> - <a href="/register">Opret en gratis bruger</a>
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
class LoggedIn extends Component {
    constructor(props) {
        super(props);
        this.state = { dataFromServer: "Fetching!!" };
    }
    componentDidMount() { facade.fetchData().then(res => this.setState({ dataFromServer: res })); }
    render() {
        return (
            <div>
                <h2>Data Received from server</h2>
                <h3>{this.state.dataFromServer}</h3>
            </div>
        )
    }
}
class Jwt extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false }
    }
    logout = () => {
        facade.logout();
        user = 'Not logged in'
        this.setState({ loggedIn: false });
    } //TODO
    login = (user, pass) => {
        facade.login(user, pass)
            .then(res => this.setState({ loggedIn: true }));
    } //TODO
    render() {
        return (
            <div>
                {!this.state.loggedIn ? (<Login login={this.login} />) :
                    (<div>
                        <LoggedIn />
                        <button onClick={this.logout}>Logout</button>
                    </div>)}
            </div>
        )
    }
}

export default Jwt;