import React from 'react';
import PropTypes from 'prop-types';
import TodoRedux from './TodoRedux';
import {connect} from 'react-redux';
import {requestToggleTodo} from './ActionsRedux';

function mapStateToProps(state) {
  return {'todos': state.todos};
}

function mapDispatchToProps(dispatch) {
  return {'toggle': (id, completed) => dispatch(requestToggleTodo(id, completed))};
}

function TodoListRedux({todos, toggle}) {
  return (
  <div className="Todo">
    {todos.map(todo =>
      <TodoRedux
          key={todo.id}
          id={todo.id}
          text={todo.text}
          time={todo.time}
          completed={todo.completed}
          onClick={() => toggle(todo.id, !todo.completed)}
        />
      )}
    </div>
  );
}

TodoListRedux.propTypes = {
  'todos': PropTypes.arrayOf(PropTypes.shape({
    'id': PropTypes.string.isRequired,
    'text': PropTypes.string.isRequired,
    'time': PropTypes.string.isRequired,
    'completed': PropTypes.bool.isRequired
  }).isRequired).isRequired,
  'toggle': PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListRedux);
