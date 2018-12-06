import React, { Component } from 'react';
import './main.css';
import Navbar from './NaviBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppClient from './AppClientPagination'
import ResidenceList from './ResidenceList';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Find from './Find';
import Details from './Details';
import Footer from './Footer';
import CustomerService from './CustomerService';
import Contact from './Contact';
import RegisterBolig from './RegisterBolig';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/DataTable" component={AppClient} />
          <Route path="/ResidenceList" component={ResidenceList} />
          <Route path="/Register" component={Register} />
          <Route path="/Find" component={Find} />
          <Route path="/Details/:id" component={Details} />
          <Route path="/CustomerService" component={CustomerService} />
          <Route path="/Contact" component={Contact} />
          <Route path="/OpretBolig" component={RegisterBolig} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;