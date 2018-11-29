import React, { Component } from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

const URL = "http://localhost:8084/jwtbackend/api/info/Housing"; //Indsæt URL for API

const labels = [{
    dataField: 'address',
    text: 'Adresse',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'city',
    text: 'Postnummer',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'proptype',
    text: 'Boligtype',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'rooms',
    text: 'Værelser',
    sort: true,
    filter: textFilter()
},/* {
    dataField: 'funiture',
    text: 'Møbleret',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'animals',
    text: 'Husdyr tilladt',
    sort: true,
    filter: textFilter()
},*/ {
    dataField: 'size',
    text: 'Størrelse',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'floor',
    text: 'Etage',
    sort: true,
    filter: textFilter()
},/* {
    dataField: 'shareable',
    text: 'Delevenlig',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'energy',
    text: 'Energimærke',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'period',
    text: 'Lejeperiode',
    sort: true,
    filter: textFilter()
},*/ {
    dataField: 'rent',
    text: 'Månedlig leje',
    sort: true,
    filter: textFilter()
},
 /*{
    dataField: 'deposit',
    text: 'Depositum',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'aconto',
    text: 'Aconto',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'startperiod',
    text: 'Overtagelsesdato',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'created',
    text: 'Oprettelsesdato',
    sort: true,
    filter: textFilter()
},*/];

class ResidenceList extends Component {
    state = { residence: [], msg: "" }
    async componentDidMount() {

        this.setState({ msg: "Loading..." });
        const residence = await
            fetch(URL).then(res => res.json());

        this.setState({ residence, msg: "" });
    }
    render() {
        const cellEdit = cellEditFactory({
            mode: 'click',
        });
        return <div>
            <h4>Boliger</h4>
            <BootstrapTable
                striped
                hover
                bootstrap4
                keyField='id'
                data={this.state.residence}
                columns={labels}
                filter={filterFactory()}
                pagination={paginationFactory()}
            />
        </div>
    }
}

export default ResidenceList