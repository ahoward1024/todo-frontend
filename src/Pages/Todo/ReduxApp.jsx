import React from 'react';
import AddTodo from './AddTodo';
import CheckAll from './CheckAll';
import TodoList from './TodoList';
import {requestGetState} from './ReduxActions';
import {store} from './ReduxIndex';
import '../../styles/loadcube.css';

export const networkError = 'TypeError: NetworkError when attempting to fetch resource.';

class ReduxApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      'isLoaded': false,
      'isErrored': false,
      'errorMessage': ''
    };
  }

  static async getState() {
    const response = await store.dispatch(requestGetState());

    return response;
  }

  componentDidMount() {
    return ReduxApp.getState()
      .then(response => {
        if (response.type === 'FAILURE_ACTION') {
          this.setState({
            'isLoaded': true,
            'isErrored': true
          });
          if (response.message === networkError) {
            this.setState({'errorMessage': 'Error: Could not reach server'});
          } else {
            this.setState({'errorMessage': response.message});
          }
        } else {
          this.setState({'isLoaded': true});
        }
      });
  }

  render() {
    const element = [];
    if (this.state.isLoaded === false) {
      element.push(
        <div key="1">
          <div className="cssload-thecube">
            <div className="cssload-cube cssload-c1"></div>
            <div className="cssload-cube cssload-c2"></div>
            <div className="cssload-cube cssload-c4"></div>
            <div className="cssload-cube cssload-c3"></div>
          </div>
          <p>Loading</p>
        </div>
      );
    } else {
      if (this.state.isErrored) {
        element.push(
          <div key="1">
            <p
              key="2"
              className="errorMessage"
            >
              {this.state.errorMessage}
            </p>
          </div>
        );
      } else {
        element.push(
          <div key="0">
            <AddTodo key="1"/>
            <CheckAll key="2"/>
            <TodoList key="3"/>
          </div>
        );
      }
    }

    return (
      <div>
        <h1 className="H1-Animation">Todo</h1>
        {element}
      </div>
    );
  }
}

export default ReduxApp;
