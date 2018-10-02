import {
  fetchGetState,
  fetchNewTodo,
  fetchToggleTodo,
  fetchToggleAll
} from './ServerRedux';

export const SUCCESS_GET_STATE = 'SUCCESS_GET_TODOS';
export const SUCCESS_ADD_TODO = 'SUCCESS_ADD_TODO';
export const SUCCESS_TOGGLE_TODO = 'SUCCESS_TOGGLE_TODO';
export const SUCCESS_TOGGLE_ALL = 'SUCCESS_TOGGLE_ALL';
export const FAILURE_ACTION = 'FAILURE_ACTION';

function successGetState(state) {
  return {
    'type': SUCCESS_GET_STATE,
    state
  };
}

function successAddTodo(todo) {
  return {
    'type': SUCCESS_ADD_TODO,
    todo
  };
}

function successToggleTodo(id, completed) {
  return {
    'type': SUCCESS_TOGGLE_TODO,
    id,
    completed
  };
}

function successToggleAll(completed) {
  return {
    'type': SUCCESS_TOGGLE_ALL,
    completed
  };
}

function failureAction(message) {
  return {
    'type': FAILURE_ACTION,
    message
  };
}

export function requestGetState() {
  return dispatch => {
    return fetchGetState()
    .then(response => {
      if (response.ok === false) {
        throw Error(response.statusText);
      }

      return response;
    })
    .then(response => response.json())
    .then(state => dispatch(successGetState(state)))
    .catch(error => dispatch(failureAction(`Failed to get state | ${error}`)));
  };
}

export function requestAddTodo(text) {
  return dispatch => {
    const todo = {
      'id': Date.now(),
      text,
      'completed': false
    };

    return fetchNewTodo(todo)
    .then(response => {
      if (response.ok === false) {
        throw Error(response.statusText);
      }

      return response;
    })
    .then(() => dispatch(successAddTodo(todo)))
    .catch(error => dispatch(
      failureAction(`Failed to add ${todo.id}: ${todo.text} | ${error}`
    )));
  };
}

export function requestToggleTodo(id, completed) {
  return dispatch => {
    return fetchToggleTodo(id, completed)
    .then(response => {
      if (response.ok === false) {
        throw Error(response.statusText);
      }

      return response;
    })
    .then(() => dispatch(successToggleTodo(id, completed)))
    .catch(error => dispatch(
      failureAction(`Failed to toggle todo: ${id} | ${error}`)));
  };
}

export function requestToggleAll(completed) {
  return dispatch => {
    return fetchToggleAll(completed)
    .then(response => {
      if (response.ok === false) {
        throw Error(response.statusText);
      }

      return response;
    })
    .then(() => dispatch(successToggleAll(completed)))
    .catch(error => dispatch(failureAction(
      `Failed to toggle all todos | ${error}`)));
  };
}
