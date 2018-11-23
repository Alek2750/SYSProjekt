import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppClient from './AppClientPagination'
import Jwt from './Jwt';
import NB from './NaviBar';
import ResidenceList from './ResidenceList';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";



ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
