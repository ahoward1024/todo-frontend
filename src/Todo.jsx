import React from 'react';
import PropTypes from 'prop-types';

// This is a 'todo' element. All of the state of the application is stored in
// the application's state list object: the text of the todo item, an id for
// rendering, and uses the done parameter to determine whether to render a
// checked or unchecked checkbox.

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="TodoItem-Animate">
        <input
          type="checkbox"
          className="styled-checkbox"
          id={this.props.id}
          checked={this.props.done}
          onChange={this.handleChange}
        />
        <label
          style={{'textDecoration': this.props.done ? 'line-through' : 'none'}}
        >{this.props.text}</label>
      </div>
    );
  }

  handleChange(event) {
    const id = event.target.id;
    this.props.toggleCheckbox(id);
  }
}

Todo.propTypes = {
  'done': PropTypes.bool,
  'id': PropTypes.number,
  'text': PropTypes.string,
  'toggleCheckbox': PropTypes.func
};

export default Todo;
