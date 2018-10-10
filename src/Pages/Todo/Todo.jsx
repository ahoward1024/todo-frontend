import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {requestToggleTodo} from './ReduxActions';
import {store} from './ReduxIndex';

export function Todo({id, text, time, completed}) {

  let textDecoration = 'none';
  if (completed) {
    textDecoration = 'line-through';
  }

  return (
    <div className="TodoItem-Animate">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => store.dispatch(requestToggleTodo(id, completed))}
      />
      <label style={{textDecoration}}>
        {text}
      </label>
    </div>
  );
}

Todo.propTypes = {
  'id': PropTypes.string.isRequired,
  'text': PropTypes.string.isRequired,
  'time': PropTypes.string.isRequired,
  'completed': PropTypes.bool.isRequired
};

export default connect()(Todo);
