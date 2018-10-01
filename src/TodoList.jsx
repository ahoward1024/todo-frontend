import React from 'react';
import Todo from './Todo';
import CheckboxCheckAll from './CheckboxCheckAll';

// This is the main application called from the index.jsx file. The application
// holds the state of the todo list, as well as the new todo input text box
// and the status of the 'check all' box.

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'list': [],
      'text': '',
      'checkall': false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.toggleAllCheckboxes = this.toggleAllCheckboxes.bind(this);
  }

  // Renders the full application. A 'todo' header, an input box form with a
  // submit button, a 'check all' checkbox that checks or unchecks all
  // checkboxes in the state list, and finally the list of todo items.
  render() {
    return (
      <div>
        <h1 className="H1-Animation">Todo</h1>
        <div className="AddTodo">
          <input
            className="AddTodoInput"
            align="center"
            id="new-todo"
            placeholder="What needs to be done?"
            onChange={this.handleChange}
            value={this.state.text}
          />
          &nbsp;
          <button
            onClick={this.handleSubmit}
            className="AddTodoButton"
          >Add #{this.state.list.length + 1}
          </button>
        </div>
        <div className="CheckboxCheckAll">
          <CheckboxCheckAll
            list={this.state.list}
            toggleAllCheckboxes={this.toggleAllCheckboxes}
            checked={this.state.checkall}
          />
        </div>
        <div className="Todo">
        {
          this.state.list.map(item => <Todo
              key={item.id}
              text={item.text}
              id={item.id}
              done={item.done}
              toggleCheckbox={this.toggleCheckbox}
            />
          )
        }
        </div>
      </div>
    );
  }

  // NOTE: Is this going to be too slow? We have to iterate over potentially
  // the entire list just to check and uncheck each box.
  toggleCheckbox(id, value) {
    const list = this.state.list;
    for (let iter = 0; iter < list.length; iter += 1) {
      // We toString() here because the value that we get back from the JSON
      // representation of the id is a string and our saved id is a number.
      // Thanks JavaScript!
      if (list[iter].id.toString() === id) {
        // https://stackoverflow.com/questions/29537299/react-how-do-i-update-state-item1-on-setstate-with-jsfiddle#38378350
        list[iter].done = !list[iter].done;
        // Optimization
        break;
      }
    }

    this.setState({list});
  }

  // NOTE: This may also be pretty slow, but I'm not sure if there is any
  // way to do this.
  // Probably not...
  toggleAllCheckboxes(value) {
    // https://stackoverflow.com/questions/29537299/react-how-do-i-update-state-item1-on-setstate-with-jsfiddle#38378350
    const list = this.state.list;
    if (list === undefined) {
      return;
    }
    for (let iter = 0; iter < list.length; iter += 1) {
      list[iter].done = value;
    }
    // (???): Can this be last? Do I only need to call it once or every time
    // change the state of a component in the state object (so far only calling
    // it once seems to work)?
    this.setState({
      'checkall': !this.state.checkall,
      list
    });
  }

  // Updates the state object's text member to the string in the text field
  handleChange(event) {
    this.setState({'text': event.target.value});
  }

  // Creates a new object to insert into the state's list object. Only does so
  // if the length of the string is at least one character (eg. not zero)
  // and then resets the text area back to an empty string.
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const cb = {
      'text': this.state.text,
      'id': this.state.list.length,
      'done': false
    };
    this.setState(prevState => ({
      'list': prevState.list.concat(cb),
      'text': ''
    }));
    this.setState({'checkall': false});
  }
}

export default TodoList;
