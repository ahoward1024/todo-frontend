import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {requestAddTodo} from './ReduxActions';

export function AddTodo({dispatch}) {
  let input = '';

  return (
    <div className="AddTodo">
      <form onSubmit={event => {
        event.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(requestAddTodo(input.value));
        input.value = '';
      }}>
        <input
          className="AddTodoInput"
          placeholder="What needs to be done?"
          ref={node => input = node}
        />
        &nbsp;
        <button
          className="AddTodoButton"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {'dispatch': PropTypes.func.isRequired};

export default connect()(AddTodo);
