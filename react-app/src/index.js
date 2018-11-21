import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppMock from './AppMock'
import AppClient from './AppClientPagination'
import Jwt from './Jwt';
import NB from './NaviBar';
import ResidenceList from './ResidenceList';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

class Selector extends React.Component {
    state = { app: <App /> }
    select = (evt) => {
      const app = evt.target.id;
      switch (app) {
        case "a2": this.setState({ app: <AppMock /> }); break;
        case "a3": this.setState({ app: <AppClient /> }); break;
        case "a4": this.setState({ app: <Jwt /> }); break;
        case "a5": this.setState({ app: <NB /> }); break;
        case "a6": this.setState({ app: <ResidenceList /> }); break;
        default: this.setState({ app: <App /> })
      }
    }
    render() {
      return (
      <div>
        <div onClick={this.select} >
          <a href="#" id="a1"> Render All</a>
          <a href="#" id="a2"> Paginate on Client</a>
          <a href="#" id="a3"> AppClient med table </a>
          <a href="#" id="a4"> Jwt side </a>
          <a href="#" id="a5"> NaviBar side </a> 
          <a href="#" id="a6"> Boliger </a> 
        </div>
        {this.state.app}
      </div>
      )}
   }

ReactDOM.render(<Selector />, document.getElementById('root'));


serviceWorker.unregister();
