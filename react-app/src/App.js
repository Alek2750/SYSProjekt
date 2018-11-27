import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppClient from './AppClientPagination'
import Jwt from './Jwt';
import ResidenceList from './ResidenceList';
import Home from './Home';
import facade from "./apiFacade";

const Logout = () => <div>{facade.logout()}You have now been logged out</div>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>         
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Jwt} />
          <Route path="/DataTable" component={AppClient} />
          <Route path="/ResidenceList" component={ResidenceList} />
        </div>
      </Router>
    );
  }
}

export default App;