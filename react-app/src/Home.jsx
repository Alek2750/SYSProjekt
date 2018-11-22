import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import  logo from './logo.svg'
import  foto1 from './onepunch.png'
import  foto2 from './estate.png'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <center><h2>Welcome to BoligRunner</h2></center>
                    <Image src={foto2} className="header-image" />
                    <p>Here you can search for avaible apartments and residence</p>
                    <Link to="/Navigation/DataTable">
                        <Button bsStyle="primary">Learn More</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src={foto1} circle className="profile-pic" />
                        <h3>Let's get started</h3>
                        <p>Use what you see, don't plan it. We need a shadow side and a highlight side.
                            Of course he's a happy little stone, cause we don't have any other kind.
                            If you don't like it - change it. It's your world.</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}