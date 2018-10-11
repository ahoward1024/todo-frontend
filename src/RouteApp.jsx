import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './Pages/About';
import ReduxIndex from './Pages/Todo/ReduxIndex';
import HealthCheck from './Pages/HealthCheck';

function RouteApp() {
  return (
    <Router>
      <div>
        <div className="Header">
          <Link className="HeaderItem" to="/">Home</Link>
          <Link className="HeaderItem" to="/about">About</Link>
          <Link className="HeaderItem" to="/healthcheck">Health Check</Link>
        </div>

        <hr/>

        <div align="center">
          <Route exact path="/" component={ReduxIndex}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/healthcheck" component={HealthCheck}/>
        </div>

      </div>
    </Router>
  );
}

export default RouteApp;
