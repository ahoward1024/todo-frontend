import React from 'react';

function About() {
  return (
    <div>
      <h1 className="H1-Animation">About</h1>
      <p className="Paragraph-Animation">
        This is a project I put together to learn about full stack development. The <a href="https://github.com/ahoward1024/todo-frontend">frontend</a> and <a href="https://github.com/ahoward1024/todo-backend">backend</a> are deployed to two seperate <a href="https://heroku.com">Heroku</a> instances.
        </p>
        <div style={{'display': 'inline-block'}}>
          <div style={{
            'float': 'left',
            'textAlign': 'left',
          'width': '50%'
          }}>
            <p>Frontend</p>
            <ul>
              <li><a href="https://npmjs.com">npm</a></li>
              <li><a href="https://webpack.js.org">webpack</a></li>
              <li><a href="https://github.com/facebook/create-react-app">create-react-app</a></li>
              <li><a href="https://reactjs.org/">React</a></li>
              <li><a href="https://redux.js.org/">Redux</a></li>
              <li><a href="https://github.com/reduxjs/redux-thunk">Redux-Thunk</a></li>
              <li><a href="https://jestjs.io/">Jest</a></li>
              <li><a href="https://airbnb.io/enzyme/">Enzyme</a></li>
              <li><a href="https://sinonjs.org/">Sinon</a></li>
              <li><a href="https://github.com/jefflau/jest-fetch-mock">Jest-Fetch-Mock</a></li>
              <li><a href="https://github.com/dmitry-zaets/redux-mock-store">Redux-Mock-Store</a></li>
            </ul>
          </div>
          <div style={{
            'float': 'right',
            'text-align': 'left',
            'width': '50%'
          }}>
            <p>Backend</p>
            <ul>
              <li><a href="https://www.python.org/">Python</a></li>
              <li><a href="https://pipenv.readthedocs.io/en/latest/">Pipenv</a></li>
              <li><a href="http://flask.pocoo.org/">Flask</a></li>
              <li><a href="https://docs.pytest.org/en/latest/">pytest</a></li>
              <li><a href="https://pypi.org/project/pytest-cov/">pytest-cov</a></li>
              <li><a href="https://pypi.org/project/pytest-mongodb/">pytest-mongodb</a></li>
              <li><a href="https://www.mongodb.com/">MongoDB</a></li>
              <li><a href="https://mlab.com/">mLab</a></li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default About;
