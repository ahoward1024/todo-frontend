import config from '../../config';

const urlGet = config.TODO_URL_GET;
const urlAdd = config.TODO_URL_ADD;
const urlToggle = config.TODO_URL_TOGGLE;
const urlToggleAll = config.TODO_URL_TOGGLEALL;

export function fetchGetState() {
  return fetch(urlGet, {'method': 'GET'});
}

 export function fetchAddTodo(text) {
  return fetch(urlAdd, {
    'method': 'POST',
    'headers': {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({text})
  });
}

export function fetchToggleTodo(id, completed) {
  return fetch(urlToggle, {
    'method': 'PUT',
    'headers': {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({
      id,
      completed
    })
  });
}

export function fetchToggleAll(completed) {
  return fetch(urlToggleAll, {
    'method': 'PUT',
    'headers': {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({completed})
  });
}
