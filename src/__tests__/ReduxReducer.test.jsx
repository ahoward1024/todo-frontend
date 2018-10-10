import {
  SUCCESS_GET_STATE,
  SUCCESS_ADD_TODO,
  SUCCESS_TOGGLE_TODO,
  SUCCESS_TOGGLE_ALL,
  FAILURE_ACTION
} from '../Pages/Todo/ReduxActions';

import reduxReducer from '../Pages/Todo/ReduxReducer';

describe('Test ReduxReducer', () => {
  let state = {};
  let actionType = {};
  let expectedState = {};

  beforeEach(() => {
    state = {
      'checkall': false,
      'todos': []
    };
  });

  afterEach(() => {
    const newState = reduxReducer(state, actionType);
    expect(newState).toEqual(expectedState);
  });

  test('Send unknown action type', () => {
    const UNKNOWN_ACTION = 'UNKNOWN_ACTION';
    const UNKNOWN_ACTION_TYPE = {'type': 'UNKNOWN_ACTION'};
    expectedState = {
      'checkall': false,
      'todos': []
    };
  });

  test('Send known action type success get state', () => {
    const newTodo = {
      'id': 'test-id',
      'text': 'test-text',
      'time': 'test-time',
      'completed': true
    };
    actionType = {
      'type': SUCCESS_GET_STATE,
      'state': [
        {
          'id': 'checkall',
          'completed': true
        },
        newTodo
      ]
    };
    expectedState = {
      'checkall': true,
      'todos': [newTodo]
    };
  });

  test('Send known action type success add todo', () => {
    const newTodo = {
      'id': 'test-id',
      'text': 'test-text',
      'time': 'test-time',
      'completed': false
    };
    actionType = {
      'type': SUCCESS_ADD_TODO,
      'id': newTodo.id,
      'text': newTodo.text,
      'time': newTodo.time,
      'completed': newTodo.completed
    };
    expectedState = {
      'checkall': false,
      'todos': [newTodo]
    };
  });

  test('Send known action type success toggle todo', () => {
    const newTodo = {
      'id': 'test-id',
      'text': 'test-text',
      'time': 'test-time',
      'completed': false
    };
    state.todos.push(newTodo);
    actionType = {
      'type': SUCCESS_TOGGLE_TODO,
      'id': newTodo.id,
      'completed': !newTodo.completed
    };
    const expectedTodo = {
      'id': newTodo.id,
      'text': newTodo.text,
      'time': newTodo.time,
      'completed': !newTodo.completed
    };
    expectedState = {
      'checkall': false,
      'todos': [expectedTodo]
    };
  });

  test('Send known action type success toggle todo (check id)', () => {
    const newTodo = {
      'id': 'test-id',
      'text': 'test-text',
      'time': 'test-time',
      'completed': false
    };
    const newTodo2 = {
      'id': 'test-id222222',
      'text': 'test-text',
      'time': 'test-time',
      'completed': false
    };
    state.todos.push(newTodo);
    state.todos.push(newTodo2);
    actionType = {
      'type': SUCCESS_TOGGLE_TODO,
      'id': newTodo.id,
      'completed': !newTodo.completed
    };
    const expectedTodo = {
      'id': newTodo.id,
      'text': newTodo.text,
      'time': newTodo.time,
      'completed': !newTodo.completed
    };
    expectedState = {
      'checkall': false,
      'todos': [
        expectedTodo,
        newTodo2
      ]
    };
  });

  test('Send known action type success toggle all', () => {
    actionType = {
      'type': SUCCESS_TOGGLE_ALL,
      'completed': true
    };
    const newTodo = {
      'id': 'test-id',
      'text': 'test-text',
      'time': 'test-time',
      'completed': false
    };
    state.todos.push(newTodo);
    const expectedTodo = {
      'id': newTodo.id,
      'text': newTodo.text,
      'time': newTodo.time,
      'completed': !newTodo.completed
    };
    expectedState = {
      'checkall': actionType.completed,
      'todos': [expectedTodo]
    };
  });
});
