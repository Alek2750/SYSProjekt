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
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      <Router>
      <div>
        <div onClick={this.select} >
          <a href="/" id="a1"> Render All -</a>
          <a href="/Client" id="a2"/>
          <a href="/Table" id="a3"/>
          <a href="/Jwt" id="a4"/>
          <a href="/Navigation" id="a5"> NaviBar</a>
          <a href="/ResidenceList" id="a6"/>    
          
          <Route exact path="/" component={App} />
          <Route path="/Jwt" component={Jwt} />
          <Route path="/Navigation" component={NB} />
          <Route path="/Navigation/Login" component={Jwt}/>
          <Route path="/Navigation/Data" component={AppMock}/>
          <Route path="/Navigation/DataTable" component={AppClient}/>
          <Route path="/Navigation/ResidenceList" component={ResidenceList}/>

         
        </div>
        {this.state.app}
      </div>
      </Router>
      
      )}
   }

ReactDOM.render(<Selector />, document.getElementById('root'));


serviceWorker.unregister();
