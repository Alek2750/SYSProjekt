import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AppMock extends Component {
    state = {names: [], msg:""}
    async componentDidMount(){
      console.time("fetching");
      this.setState({msg:"Loading..."});
      const names = await
      fetch("http://localhost:1234/api").then(res=>res.json());
      console.timeEnd("fetching");
      console.time("rendering");
      this.setState({names,msg:""});
    }
    
    componentDidUpdate(){
      console.timeEnd("rendering");
    }
    
    render() {
      return <div>
          <h4>The list of names from App1</h4>
          <ul>
          {this.state.names.map(function(names, index) {
              return <p key={names.id}>{names.firstName}</p>
          })}
          </ul>
      </div>
  }
  }

export default AppMock;
