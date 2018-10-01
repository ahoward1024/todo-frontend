import React from 'react';
import AddTodoRedux from './AddTodoRedux';
import CheckAllRedux from './CheckAllRedux';
import TodoListRedux from './TodoListRedux';
import {requestGetState} from './ActionsRedux';
import {store} from './indexRedux';

class AppRedux extends React.Component {

  componentDidMount() {
    store.dispatch(requestGetState());
  }

  render() {
    return (
      <div>
        <h1 className="H1-Animation">Todo Redux</h1>
        <AddTodoRedux />
        <CheckAllRedux />
        <TodoListRedux />
      </div>
    );
  }
}

export default AppRedux;
