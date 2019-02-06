import React, { Component } from 'react';
import HealthCardGreen from './Cards/HealthCard';

class HealthCheckGrid extends Component {

    render() {

        return (
            <div class="container">
                <div class="row">
                    {
                        this.props.data.map((element, index) => {
                            // if (element.status === "green") { return (<div class="col-4" key={index}><HealthCardGreen cardData={element} /></div>) }
                            // if (element.status === "red") { return (<div class="col-4" key={index}><HealthCardRed cardData={element} /></div>) }
                            
                            return (<div class="col-4" key={index}><HealthCardGreen cardData={element} /></div>)
                        })
                    }
                </div>
            </div>


        )
    }
}

export default HealthCheckGrid;