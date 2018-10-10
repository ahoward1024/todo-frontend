import React from 'react';
import AddTodo from './AddTodo';
import CheckAll from './CheckAll';
import TodoList from './TodoList';
import {requestGetState} from './ReduxActions';
import {store} from './ReduxIndex';

class ReduxApp extends React.Component {

  componentDidMount() {
    store.dispatch(requestGetState());
  }

  render() {
    return (
      <div>
        <h1 className="H1-Animation">Todo</h1>
        <AddTodo />
        <CheckAll />
        <TodoList />
      </div>
    );
  }
}

export default ReduxApp;
