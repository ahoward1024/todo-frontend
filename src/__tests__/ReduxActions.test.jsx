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
  beforeEach(() => {
    store = mockStore();
    fetch.resetMocks();
  });

  test('Test add todo failure', () => {
    fetch.mockReject(new Error('Fake error'));
    store.dispatch(requestGetState())
      .then(response => expect(response.type).toEqual(FAILURE_ACTION));
  });

  test('Test add todo not ok', () => {
    fetch.mockResponse(JSON.stringify({'completed': true}), {'status': 500});
    store.dispatch(requestGetState())
      .then(response => expect(response.ok).toEqual(false));
  });

  test('Test get state success', () => {
    fetch.mockResponse(JSON.stringify({'completed': true}), {'status': 200});
    store.dispatch(requestGetState())
      .then(response => expect(response.ok).toEqual(true));
  });

  test('Test add todo failure', () => {
    fetch.mockReject(new Error('Fake error'));
    store.dispatch(requestAddTodo('test-todo'))
      .then(response => expect(response.type).toEqual(FAILURE_ACTION));
  });

  test('Test add todo not ok', () => {
    fetch.mockResponse(JSON.stringify({'completed': true}), {'status': 500});
    store.dispatch(requestAddTodo('test-todo'))
      .then(response => expect(response.ok).toEqual(false));
  });

  test('Test add todo success', () => {
    fetch.mockResponse(JSON.stringify({'completed': true}), {'status': 200});
    store.dispatch(requestAddTodo('test-todo'))
      .then(response => expect(response.ok).toEqual(true));
  });

  test('Test toggle todo failure', () => {
    fetch.mockReject(new Error('Fake error'));
    store.dispatch(requestToggleTodo('test-id', false))
      .then(response => expect(response.type).toEqual(FAILURE_ACTION));
  });

  test('Test toggle todo not ok', () => {
    fetch.mockResponse(JSON.stringify({'completed': true}), {'status': 500});
    store.dispatch(requestToggleTodo('test-id', true))
      .then(response => expect(response.ok).toEqual(false));
  });

  test('Test toggle todo success', () => {
    fetch.mockResponse(JSON.stringify({'completed': true}), {'status': 200});
    store.dispatch(requestToggleTodo('test-id', true))
      .then(response => expect(response.ok).toEqual(true));
  });

  test('Test toggle all failure', () => {
    fetch.mockReject(new Error('Fake error'));
    store.dispatch(requestToggleAll(false))
      .then(response => expect(response.type).toEqual(FAILURE_ACTION));
  });

  test('Test toggle all not ok', () => {
    fetch.mockResponse(JSON.stringify({'completed': true}), {'status': 500});
    store.dispatch(requestToggleAll(true))
      .then(response => expect(response.ok).toEqual(false));
  });

  test('Test toggle all success', () => {
    fetch.mockResponse(JSON.stringify({'completed': true}), {'status': 200});
    store.dispatch(requestToggleAll(true))
      .then(response => expect(response.ok).toEqual(true));
  });
});
