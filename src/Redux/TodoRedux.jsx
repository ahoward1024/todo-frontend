import React from 'react';
import PropTypes from 'prop-types';

function TodoRedux({onClick, completed, text, id}) {
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
  'completed': PropTypes.bool.isRequired,
  'text': PropTypes.string.isRequired,
  'id': PropTypes.number.isRequired
};

export default TodoRedux;
