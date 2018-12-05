import React, { Component } from "react";
import { FaPhone, FaEnvelope } from 'react-icons/fa';
class CustomerService extends Component{
    render(){
        return(
            <div>
                <br/>
                <h3><FaPhone/> Ring til os på:</h3>
                11 22 33 44
                <br/>
                <br/>
                <br/>
                <h3><FaEnvelope/> Mail:</h3>
                Boligrunner@mail.com

            </div>
        )
    }
}

export default CustomerService;