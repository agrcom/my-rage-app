import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import NavigationMenu from './NavigationMenu'
import DefaultPage from './DefaultPage'
import HealthCheckPage from './HealthCheck/HealthCheckPage'
import IndexRatePage from './IndexRate/IndexRatePage'

const Header = () => (
  <div className="main-header">
    <div col>
      <header>
        <p>
        <h1>HSBC RAGE</h1>
        </p>
      </header>
    </div>
  </div>
)


const PrimaryLayout = () => (
  <div className="primary-layout">
    <Header />
      <div class="row">

        <div class="col-3"><NavigationMenu /></div>

        {/* <main> */}
          <div class="col-9">
            <Route path="/" exact component={DefaultPage} />
            <Route path="/health" component={HealthCheckPage} />
            <Route path="/indexRate" component={IndexRatePage} />
          </div>
        {/* </main> */}
      </div>
  </div>
)

class App extends Component {


  render() {
    return (
      <div className="App">
        <div class="containter">
          <BrowserRouter>
            <PrimaryLayout />
          </BrowserRouter>

        </div>
      </div>
    );
  }
}

export default App;
