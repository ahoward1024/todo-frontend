import {
  SUCCESS_GET_STATE,
  SUCCESS_ADD_TODO,
  SUCCESS_TOGGLE_TODO,
  SUCCESS_TOGGLE_ALL,
  FAILURE_ACTION
} from './ActionsRedux';

function ReducerRedux(state, action) {
  switch (action.type) {
    case SUCCESS_GET_STATE:
      console.log(action.state);
      const todos = [];
      let checkall = state.checkall;
      action.state.forEach(todo => {
        if (todo['_id'] === 'checkall') {
          checkall = todo.checkall;
        } else {
          todos.push(todo.todo);
        }
      });

      return {
        checkall,
        todos
      };
    case SUCCESS_ADD_TODO:
      return {
        'checkall': state.checkall,
        'todos': [
          ...state.todos,
          action.todo
        ]
      };
    case SUCCESS_TOGGLE_TODO:
      return {
        'checkall': state.checkall,
        'todos': state.todos.map(todo => {
              if (todo.id === action.id) {
                return {
                  ...todo,
                  'completed': action.completed
                };
              }

              return todo;
            }
          )
      };
    case SUCCESS_TOGGLE_ALL:
      return {
        'checkall': action.completed,
        'todos': state.todos.map(todo => {
          return {
            ...todo,
            'completed': action.completed
          };
        })
      };
    case FAILURE_ACTION:
      console.log(action.message);

      return state;
    default:
      return state;
  }
}

export default ReducerRedux;
