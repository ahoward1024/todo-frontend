import {
  requestGetState,
  requestAddTodo,
  requestToggleTodo,
  requestToggleAll,

  SUCCESS_GET_STATE,
  SUCCESS_ADD_TODO,
  SUCCESS_TOGGLE_TODO,
  SUCCESS_TOGGLE_ALL,
  FAILURE_ACTION
} from '../Pages/Todo/ReduxActions';

import {
  fetchGetState,
  fetchNewTodo,
  fetchToggleTodo,
  fetchToggleAll
} from '../Pages/Todo/ServerFetches';

import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

global.fetch = require('jest-fetch-mock');

describe('Test Requests', () => {
  let store = {};
  const mockToggleAll = {'completed': true};
  const mockToggle = {
    'id': 'testid',
    'completed': true
  };
  const mockAdd = {
    'id': 'testid',
    'text': 'test text',
    'time': 'test time',
    'completed': false
  };
  const mockState = {
    'checkall': false,
    'todos': []
  };

  beforeEach(() => {
    store = mockStore();
    fetch.resetMocks();
  });

  test('Test get state failure', () => {
    fetch.mockReject(new Error('Fake error'));
    const expectedActions = [
      {
        'type': FAILURE_ACTION,
        'message': 'Error: Fake error'
      }
    ];
    store.dispatch(requestGetState())
    .then(() => expect(store.getActions()).toEqual(expectedActions))
    .catch(error => console.log(`${error}`));
  });

  test('Test get state not ok', () => {
    fetch.mockResponse(JSON.stringify(mockState), {'status': 500});
    const expectedActions = [
      {
        'type': FAILURE_ACTION,
        'message': 'Error: Response not ok'
      }
    ];
    store.dispatch(requestGetState())
    .then(() => expect(store.getActions()).toEqual(expectedActions))
    .catch(error => console.log(`${error}`));
  });

  test('Test get state success', () => {
    fetch.mockResponse(JSON.stringify(mockState), {'status': 200});
    const expectedActions = [
      {
        'type': SUCCESS_GET_STATE,
        'state': {
          'checkall': mockState.checkall,
          'todos': mockState.todos
        }
      }
    ];
    store.dispatch(requestGetState())
    .then(() => expect(store.getActions()).toEqual(expectedActions))
    .catch(error => console.log(`${error}`));
  });

  test('Test add todo failure', () => {
    fetch.mockReject(new Error('Fake error'));
    const expectedActions = [
      {
        'type': FAILURE_ACTION,
        'message': 'Error: Fake error'
      }
    ];
    store.dispatch(requestAddTodo(mockAdd.text))
    .then(() => expect(store.getActions()).toEqual(expectedActions))
    .catch(error => console.log(`${error}`));
  });

  test('Test add todo not ok', () => {
    fetch.mockResponse(JSON.stringify({'completed': true}), {'status': 500});
    const expectedActions = [
      {
        'type': FAILURE_ACTION,
        'message': 'Error: Response not ok'
      }
    ];
    store.dispatch(requestAddTodo(mockAdd.text))
    .then(() => expect(store.getActions()).toEqual(expectedActions))
    .catch(error => console.log(`${error}`));
  });

  test('Test add todo success', () => {
    fetch.mockResponse(JSON.stringify(mockAdd), {'status': 200});
    const expectedActions = [
      {
        'type': SUCCESS_ADD_TODO,
        'id': mockAdd.id,
        'text': mockAdd.text,
        'time': mockAdd.time,
        'completed': mockAdd.completed
      }
    ];
    store.dispatch(requestAddTodo(mockAdd.text))
    .then(() => expect(store.getActions()).toEqual(expectedActions))
    .catch(error => console.log(`${error}`));
  });


  test('Test toggle todo failure', () => {
    fetch.mockReject(new Error('Fake error'));
    const expectedActions = [
      {
        'type': FAILURE_ACTION,
        'message': 'Error: Fake error'
      }
    ];
    store.dispatch(requestToggleTodo(mockToggle.completed))
    .then(() => expect(store.getActions()).toEqual(expectedActions))
    .catch(error => console.log(`${error}`));
  });

  test('Test toggle todo not ok', () => {
    fetch.mockResponse(JSON.stringify(mockToggle), {'status': 500});
    const expectedActions = [
      {
        'type': FAILURE_ACTION,
        'message': 'Error: Response not ok'
      }
    ];
    store.dispatch(requestToggleTodo(mockToggle.id, mockToggle.completed))
    .then(() => expect(store.getActions()).toEqual(expectedActions))
    .catch(error => console.log(`${error}`));
  });

  test('Test toggle todo success', () => {
    fetch.mockResponse(JSON.stringify(mockToggle), {'status': 200});
    const expectedActions = [
      {
        'type': SUCCESS_TOGGLE_TODO,
        'id': mockToggle.id,
        'completed': mockToggle.completed
      }
    ];
    store.dispatch(requestToggleTodo(mockToggle.id, mockToggle.completed))
    .then(() => expect(store.getActions()).toEqual(expectedActions))
    .catch(error => console.log(`${error}`));
  });

  test('Test toggle all failure', () => {
    fetch.mockReject(new Error('Fake error'));
    const expectedActions = [
      {
        'type': FAILURE_ACTION,
        'message': 'Error: Fake error'
      }
    ];
    store.dispatch(requestToggleAll(mockToggleAll.completed))
    .then(() => expect(store.getActions()).toEqual(expectedActions))
    .catch(error => console.log(`${error}`));
  });

  test('Test toggle all not ok', () => {
    fetch.mockResponse(JSON.stringify(mockToggleAll), {'status': 500});
    const expectedActions = [
      {
        'type': FAILURE_ACTION,
        'message': 'Error: Response not ok'
      }
    ];
    store.dispatch(requestToggleAll(mockToggleAll.completed))
    .then(() => expect(store.getActions()).toEqual(expectedActions))
    .catch(error => console.log(`${error}`));
  });

  test('Test toggle all success', () => {
    fetch.mockResponse(JSON.stringify(mockToggleAll), {'status': 200});
    const expectedActions = [
      {
        'type': SUCCESS_TOGGLE_ALL,
        'completed': mockToggleAll.completed
      }
    ];
    store.dispatch(requestToggleAll(mockToggleAll.completed))
    .then(() => expect(store.getActions()).toEqual(expectedActions))
    .catch(error => console.log(`${error}`));
  });
});
