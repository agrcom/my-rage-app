import React, { Component } from 'react';

class HealthCardRed extends Component {
    render() {
        return (
            <div class="card text-white bg-danger mb-3" styles="max-width: 18rem;">
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

export default HealthCardRed;