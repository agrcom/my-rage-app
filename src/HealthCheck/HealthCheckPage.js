import React, { Component } from 'react';
import HealthCheckGrid from './HealthCheckGrid';

const demoData = [
    {
        'name': 'MySql',
        'status': 'green',
        'number_of_nodes' : 1,
        'summary': "server-subgroup-name-1; \n server-subgroup-name-2; server-subgroup-name-3;"
    },
    {
        'name': 'ElasticSearch',
        'status': 'red',
        'number_of_nodes' : 1,
        'summary': 'server-subgroup-name-1; \n server-subgroup-name-2; server-subgroup-name-3;'
    },
    {
        'name': 'AirFlow',
        'status': 'green',
        'number_of_nodes' : 5,
        'summary': 'server-subgroup-name-1; \n server-subgroup-name-2; server-subgroup-name-3;'
    },
    {
        'name': 'hdp',
        'status': 'green',
        'number_of_nodes' : 4,
        'summary': 'server-subgroup-name-1; \n server-subgroup-name-2; server-subgroup-name-3;'
    },
    {
        'name': 'StackDriver',
        'status': 'red',
        'number_of_nodes' : 1,
        'summary': 'server-subgroup-name-1; \n server-subgroup-name-2; server-subgroup-name-3;'
    }
  ];


class HealthCheckPage extends Component {
    render() {
        return (
            <div className="App-header">
                <p>
                    <code>src/HealthCheckPage.js</code> Health check page!!!.
          </p>
                <HealthCheckGrid data = {demoData}/>

                {/* <Route path="/health/details" component={HealthDetailsPage} />
                <BrowserRouter>
            < />
          </BrowserRouter> */}

            </div>
        );
    }
}

export default HealthCheckPage;