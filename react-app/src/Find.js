import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';
import facade from "./apiFacade";
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'

const URL = "http://localhost:8084/jwtbackend/api/info/Housing/"; //Indsæt URL for API
const URL2 = "http://localhost:8084/jwtbackend/api/info/"; //Indsæt URL for API








class Find extends Component {

  state = { residence: [], msg: "" }
  async componentDidMount() {

    this.setState({ msg: "Loading..." });
    const residence = await
      fetch(URL).then(res => res.json());

    this.setState({ residence, msg: "" });
  }

  addButtonLancamento = () => {
    return (
      <form action="/Contact">
        <Button type="submit" className="btn btn-info">Detaljer</Button>
      </form>
    )
  }

  handleClick = (id) => {
    this.setState({ referrer: `/Details/${id}` });
  }

  render() {
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
      text: 'Leje',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'deposit',
      text: 'Depositum',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'openhouse',
      text: 'Åbent hus',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'sold',
      text: 'Solgt',
      sort: true,
      filter: textFilter()
    },
    {
      formatter: this.addButtonLancamento,
      editable: false,
      events: {
        onClick: (e, column, columnIndex, row) => {
          e.preventDefault();
          console.log("hello form button, THis is the ID : " + row.id)
          this.handleClick(row.id);
        }
      }
    }/*, {
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

    const { referrer } = this.state;
    if (referrer) return <Redirect to={referrer} />;
    return (<div>
      <BootstrapTable
        striped
        hover
        bootstrap4
        keyField='id'
        data={this.state.residence}
        columns={labels}
        filter={filterFactory()}
        pagination={paginationFactory()}
        cellEdit={cellEditFactory({
          mode: 'dbclick', afterSaveCell: (o, n, r) => {
            const options = facade.makeOptions("PUT", true, r);
            fetch(URL2 + r.id, options, console.log(r));
          }
        })}
      />
    </div>
    );
  }
}

export default Find;