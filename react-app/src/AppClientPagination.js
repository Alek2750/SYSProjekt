import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

const columns = [{
    /*dataField: 'id',
    text: 'ID:',
    sort: true,
    filter: textFilter()
  }, {*/
    dataField: 'firstName',
    text: 'firstname:',
    sort: true,
    filter: textFilter()
  }, {
    dataField: 'lastName',
    text: 'lastname:',
    sort: true,
    filter: textFilter()
  }, {
    dataField: 'gender',
    text: 'gender:',
    sort: true,
    filter: textFilter()
  }, {
    dataField: 'email',
    text: 'email:',
    sort: true,
    filter: textFilter()
  },];

class AppClient extends Component {
    state = { names: [], msg: "" }
    async componentDidMount() {
        console.time("fetching");
        this.setState({ msg: "Loading..." });
        const names = await
            fetch("http://localhost:1234/api").then(res => res.json());
        console.timeEnd("fetching");
        console.time("rendering");
        this.setState({ names, msg: "" });
    }

    componentDidUpdate() {
        console.timeEnd("rendering");
    }

    render() {
        return <div>
            <h4>The list of names from AppClient</h4>
            <BootstrapTable
                striped
                hover
                bootstrap4
                keyField='id'
                data={this.state.names}
                columns={columns}
                filter={ filterFactory() }
                pagination={ paginationFactory() }
            />
        </div>
    }
}

export default AppClient;