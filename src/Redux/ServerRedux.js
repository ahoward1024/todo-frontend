const urlGet = 'http://localhost:5000/todos.get';
const urlAdd = 'http://localhost:5000/todos.add';
const urlToggle = 'http://localhost:5000/todos.toggle';
const urlToggleAll = 'http://localhost:5000/todos.toggleall';

export function fetchGetState() {
  return fetch(urlGet, {'method': 'GET'});
}

 export async function fetchNewTodo(todo) {
  let response = '';
  try {
    response = await fetch(urlAdd, {
      'method': 'POST',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify({todo})
    });
    console.log(response);
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
    console.log(response);
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
