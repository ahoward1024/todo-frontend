import React from 'react';
import PropTypes from 'prop-types';

function TodoRedux({onClick, id, text, time, completed}) {
  return (
    <div className="TodoItem-Animate">
      <input
        type="checkbox"
        checked={completed}
        onChange={onClick}
      />
      <label style={{'textDecoration': completed ? 'line-through' : 'none'}}>
        {text}
      </label>
    </div>
  );
}

TodoRedux.propTypes = {
  'onClick': PropTypes.func.isRequired,
  'id': PropTypes.string.isRequired,
  'text': PropTypes.string.isRequired,
  'time': PropTypes.string.isRequired,
  'completed': PropTypes.bool.isRequired
};

export default TodoRedux;
