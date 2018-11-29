import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { Type } from 'react-bootstrap-table2-editor';

const columns = [{
    /*dataField: 'id',
    text: 'ID:',
    sort: true,
    filter: textFilter()
  }, {*/
    dataField: 'firstName',
    text: 'fornavn',
    sort: true,
    filter: textFilter(),
    editor: {
      type: Type.TEXTAREA
    }
  }, {
    dataField: 'lastName',
    text: 'efternavn',
    sort: true,
    filter: textFilter(),
  }, {
    dataField: 'gender',
    text: 'køn',
    sort: true,
    filter: textFilter(),
    editor: {
      type: Type.SELECT,
      options: [{
        value: 'mand',
        label: 'mand'
      }, {
        value: 'kvinde',
        label: 'kvinde'
      }, {
        value: 'andet',
        label: 'andet'
      }]
    }
  }, {
    dataField: 'email',
    text: 'email:',
    sort: true,
    filter: textFilter()
  },];



class AppClient extends Component {
    state = { names: [], msg: "" }
    async componentDidMount() {       
        this.setState({ msg: "Loading..." });
        const names = await
            fetch("http://localhost:1234/api").then(res => res.json());       
        this.setState({ names, msg: "" });
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
                cellEdit={cellEditFactory({mode: 'dbclick'})}
                filter={ filterFactory() }
                pagination={ paginationFactory() }
            />
        </div>
    }
}

export default AppClient;