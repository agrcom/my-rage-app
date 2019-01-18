import React, { Component } from 'react';
import HealthCardGreen from './Cards/HealthCardGreen';
import HealthCardRed from './Cards/HealthCardRed';



const HealthGrid = () => (

    <div class="container">
        <div class="row">
            <div class="col">
            <HealthCardGreen />
            </div>
            <div class="col">
                <HealthCardGreen />
            </div>
            <div class="col">
                <HealthCardGreen />
            </div>
        </div>

        <div class="row">
            <div class="col">
                <HealthCardRed />
            </div>
            <div class="col">
                <HealthCardGreen />
            </div>
            <div class="col">
                <HealthCardRed />
            </div>
        </div>

        <div class="row">
            <div class="col">
                <HealthCardRed />
            </div>
            <div class="col">
            </div>
            <div class="col">
            </div>
        </div>

    </div>

)


class HealthCheckPage extends Component {
    render() {
        return (
            <div className="App-header">
                <p>
                    <code>src/HealthCheckPage.js</code> Health check page!!!.
          </p>
                <HealthGrid />

            </div>
        );
    }
}

export default HealthCheckPage;