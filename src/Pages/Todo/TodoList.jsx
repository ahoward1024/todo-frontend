import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {'todos': state.todos};
}

export function TodoList({todos}) {
  return (
  <div className="Todo">
    {todos.map(todo =>
      <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          time={todo.time}
          completed={todo.completed}
        />
      )}
    </div>
  );
}

TodoList.propTypes = {
  'todos': PropTypes.arrayOf(PropTypes.shape({
    'id': PropTypes.string.isRequired,
    'text': PropTypes.string.isRequired,
    'time': PropTypes.string.isRequired,
    'completed': PropTypes.bool.isRequired
  }).isRequired).isRequired
};

export default connect(mapStateToProps)(TodoList);
