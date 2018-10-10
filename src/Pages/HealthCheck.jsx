import React from 'react';
import config from '../config';

const URL = config.TODO_URL_HEALTHCHECK;
export const successMessage = '✔️ The server is up! 👌';
export const errorMessage = '❌ Error 👎';

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
    this.state = {
      'message': 'Checking...',
      'status': ''
    };
  }

  static async getResponse() {
    const response = await fetch(URL, {'method': 'GET'});

    return response;
  }

  componentDidMount() {
    return HealthCheck.getResponse()
    .then(response => {
      let message = '';
      if (response.status === 200) {
        message = successMessage;
      } else {
        message = errorMessage;
      }
      if (!this.isCancelled) {
        this.setState({
          message,
          'status': response.status_text
        });
      }
    })
    .catch(exception => {
      console.log(exception);
      if (!this.isCancelled) {
        const error = exception.toString();
        this.setState({
          'message': errorMessage,
          'status': error
        });
      }
    });
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
        >
          {this.state.message}
        </p>
        <p style={{'color': 'red'}}>
          {this.state.status}
        </p>
      </div>
    );
  }
}

export default HealthCheck;
