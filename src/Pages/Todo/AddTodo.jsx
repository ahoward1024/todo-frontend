import React from 'react';
import {connect} from 'react-redux';
import {requestAddTodo} from './ReduxActions';
import {store} from './ReduxIndex';


export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'text': ''};
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(event) {
    const text = event.target.value;
    this.setState({text});
  }

  onClick(event) {
    if (this.state.text !== '') {
      store.dispatch(requestAddTodo(this.state.text));
    }
  }

  render() {
    return (
      <div className="AddTodo">
        <input
          className="AddTodoInput"
          placeholder="What needs to be done?"
          onChange={this.onChange}
        />
        &nbsp;
        <button
          className="AddTodoButton"
          onClick={this.onClick}
        >
          Add Todo
        </button>
      </div>
    );
  }
};


export default connect()(AddTodo);
