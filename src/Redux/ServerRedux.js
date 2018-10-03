import config from '../config';

const urlGet = config.TODO_URL_GET;
const urlAdd = config.TODO_URL_ADD;
const urlToggle = config.TODO_URL_TOGGLE;
const urlToggleAll = config.TODO_URL_TOGGLEALL;

export function fetchGetState() {
  return fetch(urlGet, {'method': 'GET'});
}

 export async function fetchNewTodo(text) {
  let response = '';
  try {
    response = await fetch(urlAdd, {
      'method': 'POST',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify({text})
    });
  } catch (exception) {
    console.log(`Error: ${exception}`);
  }

  return response;
}

export async function fetchToggleTodo(id, completed) {
  let response = '';
  try {
    response = await fetch(urlToggle, {
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
  } catch (exception) {
    console.log(`Error: ${exception}`);
  }

  return response;
}

export async function fetchToggleAll(completed) {
  let response = '';
  try {
    response = await fetch(urlToggleAll, {
      'method': 'PUT',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify({completed})
    });
    console.log(response);
  } catch (exception) {
    console.log(`Error: ${exception}`);
  }

  return response;
}
