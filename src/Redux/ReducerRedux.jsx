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
      let checkall = false;
      const server = action.state;
      const todos = [];
      for (let iter = 0; iter < server.length; iter += 1) {
        const todo = server[iter];
        if (todo.id === 'checkall') {
          checkall = todo.completed;
        } else {
          todos.push(todo);
        }
      }

      return {
        checkall,
        todos
      };
    case SUCCESS_ADD_TODO:
      return {
        'checkall': false,
        'todos': [
          ...state.todos,
          {
            '_id': action.id,
            'id': action.id,
            'text': action.text,
            'time': action.time,
            'completed': action.completed
          }
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
