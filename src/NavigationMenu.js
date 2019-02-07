import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavigationMenu extends Component {
render() {
    return(
        <nav>
        <ul>
          <li><Link to='/'><button type="button" 
          class="btn btn-outline-secondary btn-block pull-left">Home</button></Link></li>
          <li><Link to='/health'><button type="button" class="btn btn-outline-secondary btn-block">Health Check</button></Link></li>
          <li><Link to='/indexRate'><button type="button" class="btn btn-outline-secondary btn-block">IndexRate</button></Link></li>
          <li><Link to='/about'><button type="button" class="btn btn-outline-secondary btn-block">About</button></Link></li>
        </ul>
      </nav>
    );
}
}


export default NavigationMenu;