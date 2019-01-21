import React, { Component } from 'react';
import HealthCheckGrid from './HealthCheckGrid';

const demoData = [
    {
        'name': 'MySql',
        'status': 'green',
        'number_of_nodes' : 1,
        'summary': ''
    },
    {
        'name': 'ElasticSearch',
        'status': 'red',
        'number_of_nodes' : 1,
        'summary': ''
    },
    {
        'name': 'AirFlow',
        'status': 'green',
        'number_of_nodes' : 1,
        'summary': ''
    },
    {
        'name': 'hdp',
        'status': 'green',
        'number_of_nodes' : 1,
        'summary': ''
    },
    {
        'name': 'StackDriver',
        'status': 'red',
        'number_of_nodes' : 1,
        'summary': ''
    }
  ];


class HealthCheckPage extends Component {
    render() {
        const {data} = this.props;

        return (
            <div className="App-header">
                <p>
                    <code>src/HealthCheckPage.js</code> Health check page!!!.
          </p>
                <HealthCheckGrid data = {demoData}/>

            </div>
        );
    }
}

export default HealthCheckPage;