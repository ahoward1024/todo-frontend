import {
  requestGetState,
  requestAddTodo,
  requestToggleTodo,
  requestToggleAll,

  successGetState,
  successAddTodo,
  successToggleTodo,
  successToggleAll,
  failureAction,

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

  //  GET STATE --------------------------------------------------------------//

  test('Test get state failure', () => {
    fetch.mockReject(new Error('Fake error'));
    store.dispatch(requestGetState())
    .then(() => expect(store.getActions()[0].type).toEqual(FAILURE_ACTION))
    .catch(error => console.log(`${error}`));
  });

  test('Test get state not ok', () => {
    fetch.mockResponse(JSON.stringify(mockState), {'status': 500});
    store.dispatch(requestGetState())
    .then(() => expect(store.getActions()[0].type).toEqual(FAILURE_ACTION))
    .catch(error => console.log(`${error}`));
  });

  test('Test get state success', () => {
    fetch.mockResponse(JSON.stringify(mockState), {'status': 200});
    store.dispatch(requestGetState())
    .then(() => expect(store.getActions()[0]).toEqual(successGetState(mockState)))
    .catch(error => console.log(`${error}`));
  });

  // ADD TODO ----------------------------------------------------------------//

  test('Test add todo failure', () => {
    fetch.mockReject(new Error('Fake error'));
    store.dispatch(requestAddTodo(mockAdd.text))
    .then(() => expect(store.getActions()[0].type).toEqual(FAILURE_ACTION))
    .catch(error => console.log(`${error}`));
  });

  test('Test add todo not ok', () => {
    fetch.mockResponse(JSON.stringify({'completed': true}), {'status': 500});
    store.dispatch(requestAddTodo(mockAdd.text))
    .then(() => expect(store.getActions()[0].type).toEqual(FAILURE_ACTION))
    .catch(error => console.log(`${error}`));
  });

  test('Test add todo success', () => {
    fetch.mockResponse(JSON.stringify(mockAdd), {'status': 200});
    store.dispatch(requestAddTodo(mockAdd.text))
    .then(() => expect(store.getActions()[0]).toEqual(successAddTodo(mockAdd)))
    .catch(error => console.log(`${error}`));
  });

  // TOGGLE TODO -------------------------------------------------------------//

  test('Test toggle todo failure', () => {
    fetch.mockReject(new Error('Fake error'));
    store.dispatch(requestToggleTodo(mockToggle.completed))
    .then(() => expect(store.getActions()[0].type).toEqual(FAILURE_ACTION))
    .catch(error => console.log(`${error}`));
  });

  test('Test toggle todo not ok', () => {
    fetch.mockResponse(JSON.stringify(mockToggle), {'status': 500});
    store.dispatch(requestToggleTodo(mockToggle.id, mockToggle.completed))
    .then(() => expect(store.getActions()[0].type).toEqual(FAILURE_ACTION))
    .catch(error => console.log(`${error}`));
  });

  test('Test toggle todo success', () => {
    fetch.mockResponse(JSON.stringify(mockToggle), {'status': 200});
    store.dispatch(requestToggleTodo(mockToggle.id, mockToggle.completed))
    .then(() => expect(store.getActions()[0]).toEqual(successToggleTodo(mockToggle.id, mockToggle.completed)))
    .catch(error => console.log(`${error}`));
  });

  // TOGGLE ALL --------------------------------------------------------------//

  test('Test toggle all failure', () => {
    fetch.mockReject(new Error('Fake error'));
    store.dispatch(requestToggleAll(mockToggleAll.completed))
    .then(() => expect(store.getActions()[0].type).toEqual(FAILURE_ACTION))
    .catch(error => console.log(`${error}`));
  });

  test('Test toggle all not ok', () => {
    fetch.mockResponse(JSON.stringify(mockToggleAll), {'status': 500});
    store.dispatch(requestToggleAll(mockToggleAll.completed))
    .then(() => expect(store.getActions()[0].type).toEqual(FAILURE_ACTION))
    .catch(error => console.log(`${error}`));
  });

  test('Test toggle all success', () => {
    fetch.mockResponse(JSON.stringify(mockToggleAll), {'status': 200});
    store.dispatch(requestToggleAll(mockToggleAll.completed))
    .then(() => expect(store.getActions()[0]).toEqual(successToggleAll(mockToggleAll.completed)))
    .catch(error => console.log(`${error}`));
  });
});
