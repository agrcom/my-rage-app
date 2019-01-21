import React, { Component } from 'react';
import HealthCardGreen from './Cards/HealthCardGreen';
import HealthCardRed from './Cards/HealthCardRed';


const body = props => {
    const element = props.data.map((element, index) => {
        if (element.status === "green") { return (<div class="col"><HealthCardGreen cardData={element} /></div>) }
        if (element.status === "red") { return (<div class="col"><HealthCardRed /></div>) }
    }
    )
}


class HealthCheckGrid extends Component {

    render() {

        return (
            <div class="container">

                data : {this.props.data.map((value, i) =>{
                       return <p>{value.name}</p>
                })
                }





                {/* <div class="row">
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
     */}
            </div>


        )
    }
}

export default HealthCheckGrid;