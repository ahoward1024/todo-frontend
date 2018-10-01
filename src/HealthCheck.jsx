import React from 'react';

const URL = 'http://localhost:5000/healthcheck';
const successMessage = '✔️ The server is up! 👌';

class HealthCheck extends React.Component {
  // We need to cancel the asyncronous task if the component is being
  // unmounted otherwise this is a memory leak.
  // Warning: Can't call setState (or forceUpdate) on an unmounted component.
  // This is a no-op, but it indicates a memory leak in your application.
  // To fix, cancel all subscriptions and asynchronous tasks in the
  // componentWillUnmount method.
  // https://stackoverflow.com/questions/50428842/cant-call-setstate-or-forceupdate-on-an-unmounted-component
  isCancelled = false;

  constructor(props) {
    super(props);
    this.state = {'message': 'Checking...'};
    this.getResponse = this.getResponse.bind(this);
  }

  async getResponse() {
    let message = 'Checking...';
    try {
      const response = await fetch(URL, {'method': 'GET'});
      const status = await response.status;
      if (!this.isCancelled && status === 200) {
        message = successMessage;
      }
    } catch (exception) {
      console.log(`Health Check Fail: ${exception}`);
      message = 'Error: '.concat(exception.toString());
    }
    if (!this.isCancelled) {
      this.setState({message});
    }
  }

  componentDidMount() {
    this.getResponse();
  }

  componentWillUnmount() {
    this.isCancelled = true;
  }

  render() {
    const style = {'color': 'white'};
    if (this.state.message === successMessage) {
      style.color = 'green';
    } else if (this.state.message.includes('Error')) {
      style.color = 'red';
    }

    return (
      <div align="center">
        <h1 className="H1-Animation">Health Check</h1>
        <p
          className="Server-Message-Animation"
          style={style}
        >{this.state.message}</p>
      </div>
    );
  }
}

export default HealthCheck;
