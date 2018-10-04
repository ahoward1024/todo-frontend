import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TodoList from './TodoList';
import indexRedux from './Redux/indexRedux';
import HealthCheck from './HealthCheck';

function Home() {
  return (
    <div>
      <h1 className="H1-Animation">Home</h1>
      <p className="Paragraph-Animation">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque quis dui quis pretium. In hac habitasse platea dictumst. Praesent fringilla augue vel quam semper auctor. Integer quis ligula ac metus eleifend consequat. Ut nec tempus velit. Donec quis lectus augue. Ut ut blandit arcu. Aenean pharetra, nisl pulvinar varius ultrices, ante neque accumsan ipsum, et interdum dolor sem at magna. Fusce eleifend, lectus ut accumsan viverra, dolor sapien feugiat ex, ut auctor leo quam nec lectus. Fusce viverra, lectus sit amet faucibus tincidunt, ex nulla vehicula metus, vel tristique orci libero sit amet dolor.
        </p>
        <p className="Paragraph-Animation">
        Aenean ac sollicitudin est, ac luctus ante. Fusce sed sem hendrerit ante accumsan imperdiet ut eu nunc. In hac habitasse platea dictumst. Integer quis efficitur enim. Suspendisse non iaculis erat, dapibus faucibus nibh. Donec dolor lacus, molestie id imperdiet quis, pulvinar sed mauris. Pellentesque congue nulla sed enim semper, sed ultricies dui lobortis. Proin a maximus quam. Sed ut mi erat.
        </p>
        <p className="Paragraph-Animation">
        Nam vestibulum lobortis diam. Cras at dolor id tortor suscipit luctus eu eget purus. Quisque euismod eros a suscipit eleifend. Donec ac metus metus. Etiam mauris sem, sagittis vitae nibh sagittis, volutpat efficitur dui. Aliquam finibus lobortis viverra. Donec bibendum et leo at gravida. Mauris a viverra mauris. Phasellus id eros lorem.
      </p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1 className="H1-Animation">About</h1>
      <p className="Paragraph-Animation">
         Sed quam nunc, luctus interdum vehicula vitae, scelerisque quis leo. Pellentesque in ornare arcu, viverra fermentum quam. Suspendisse potenti. Ut venenatis congue dolor, ac feugiat dui euismod in. Vestibulum eu libero sit amet lacus blandit tincidunt ac eu eros. Nulla ut laoreet tortor. Phasellus varius mauris dolor, a lobortis enim finibus ac. Quisque in tortor semper, lobortis justo nec, fermentum velit. Etiam nec ornare nibh.
         </p>
        <p className="Paragraph-Animation">
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras eget viverra est. Duis et finibus lorem. Aenean ut metus urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum condimentum, risus vel malesuada suscipit, mauris massa accumsan nisl, sit amet porttitor elit dui eu dolor. Cras vitae molestie tortor. Vestibulum dictum massa eu urna suscipit, in ultrices ex egestas.
      </p>
    </div>
  );
}

function RouteApp() {
  return (
    <Router>
      <div>
        <div className="Header">
          <Link className="HeaderItem" to="/">Home</Link>
          <Link className="HeaderItem" to="/about">About</Link>
          <Link className="HeaderItem" to="/todo">Todo</Link>
          <Link className="HeaderItem" to="/todoredux">Todo Redux</Link>
          <Link className="HeaderItem" to="/healthcheck">Health Check</Link>
        </div>

        <hr/>

        <div align="center">
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/todo" component={TodoList}/>
          <Route exact path="/todoredux" component={indexRedux}/>
          <Route exact path="/healthcheck" component={HealthCheck}/>
        </div>

      </div>
    </Router>
  );
}

export default RouteApp;
