import React, { Component } from 'react';
import './Card.css';

class HealthCardGreen extends Component {

    render() {
        let status = this.props.cardData.status === 'green' ? 'card bg-success' : 'card bg-danger'
        const cardStatus = status + ' text-white mb-3'

        return (
            <div className={cardStatus} styles='max-width: 18rem;'>
                <div class="card-header">{this.props.cardData.name}</div>
                <div class="card-body">
                    <h5 class="card-title">{this.props.cardData.status}</h5>
                    <p class="card-text">{this.props.cardData.summary}</p>
                    <p><button type="button" class="btn btn-info">Details</button></p>
                </div>
            </div>
        )
    }
}

export default HealthCardGreen;


// className={`...klasy ${this.props.green ? 'bg-success' : 'bg-failure'}`}
 
//this.props.cardData.status.green  ${this.props.cardData.status.green ? 'bg-success' : 'bg-failure'}