import React, { Component } from 'react';
import './Card.css';

class HealthCardGreen extends Component {

    render() {
        return (
            <div class="card text-white bg-success mb-3" styles="max-width: 18rem;">
                <div class="card-header">MySql</div>
                <div class="card-body">
                    <h5 class="card-title">Success card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p><button type="button" class="btn btn-info">Details</button></p>
                </div>
            </div>
        )
    }
}

export default HealthCardGreen;