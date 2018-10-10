import {
  fetchGetState,
  fetchAddTodo,
  fetchToggleTodo,
  fetchToggleAll
} from './ServerFetches';

export const SUCCESS_GET_STATE = 'SUCCESS_GET_TODOS';
export const SUCCESS_ADD_TODO = 'SUCCESS_ADD_TODO';
export const SUCCESS_TOGGLE_TODO = 'SUCCESS_TOGGLE_TODO';
export const SUCCESS_TOGGLE_ALL = 'SUCCESS_TOGGLE_ALL';
export const FAILURE_ACTION = 'FAILURE_ACTION';

// ======== PRIVATE INTERFACE ========//
// EXPORTED ONLY FOR TESTING
// DO NOT USE PUBLICLY
export function successGetState(state) {
  return {
    'type': SUCCESS_GET_STATE,
    state
  };
}

export function successAddTodo(json) {
  return {
    'type': SUCCESS_ADD_TODO,
    'id': json.id,
    'text': json.text,
    'time': json.time,
    'completed': json.completed
  };
}

export function successToggleTodo(id, completed) {
  return {
    'type': SUCCESS_TOGGLE_TODO,
    id,
    completed
  };
}

export function successToggleAll(completed) {
  return {
    'type': SUCCESS_TOGGLE_ALL,
    completed
  };
}

export function failureAction(message) {
  return {
    'type': FAILURE_ACTION,
    message
  };
}

// ========================================================================== //

// ======== PUBLIC INTERFACE ======== //
export function requestGetState() {
  return dispatch => {
    return fetchGetState().then(
      response => {
        if (response.ok) {
          dispatch(successGetState(response.json()));
        } else {
          dispatch(failureAction(`Failure to toggle all todos: ${response.status}`));
        }

        return response;
      },
      error => dispatch(failureAction('Failure to toggle all todos'))
    );
  };
}

export function requestAddTodo(text) {
  return dispatch => {
    return fetchAddTodo(text).then(
      response => {
        if (response.ok) {
          dispatch(successAddTodo(response.json()));
        } else {
          dispatch(failureAction(`Failure to toggle all todos: ${response.status}`));
        }

        return response;
      },
      error => dispatch(failureAction('Failure to toggle all todos'))
    );
  };
}

export function requestToggleTodo(id, completed) {
  return dispatch => {
    return fetchToggleTodo(completed).then(
      response => {
        if (response.ok) {
          dispatch(successToggleTodo(id, completed));
        } else {
          dispatch(failureAction(`Failure to toggle all todos: ${response.status}`));
        }

        return response;
      },
      error => dispatch(failureAction('Failure to toggle all todos'))
    );
  };
}

export function requestToggleAll(completed) {
  return dispatch => {
    return fetchToggleAll(completed).then(
      response => {
        if (response.ok) {
          dispatch(successToggleAll(completed));
        } else {
          dispatch(failureAction(`Failure to toggle all todos: ${response.status}`));
        }

        return response;
      },
      error => dispatch(failureAction('Failure to toggle all todos'))
    );
  };
}
