import {
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

global.fetch = require('jest-fetch-mock');

const mockState = {
  'checkall': false,
  'todos': [
    {
      'id': 'mock-id',
      'text': 'mock-text',
      'time': 'mock-time',
      'completed': false
    },
    {
      'id': 'test-id',
      'text': 'test-text',
      'time': 'test-time',
      'completed': true
    }
  ]
};

describe('Test Actions', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Test get state success action', () => {
      const getState = successGetState(mockState);
      expect(getState).toEqual({
        'type': SUCCESS_GET_STATE,
        'state': mockState
      });
    });

  test('Test add todo success action', () => {
    const addState = mockState.todos[0];
    const addAction = successAddTodo(addState);
    expect(addAction).toEqual({
      'type': SUCCESS_ADD_TODO,
      'id': addState.id,
      'text': addState.text,
      'time': addState.time,
      'completed': addState.completed
    });
  });

  test('Test toggle todo success action', () => {
    const id = 'test-id';
    const completed = false;
    const toggleAction = successToggleTodo(id, completed);
    expect(toggleAction).toEqual({
      'type': SUCCESS_TOGGLE_TODO,
      id,
      completed
    });
  });

  test('Test toggle all success action', () => {
    const completed = true;
    const toggleAllAction = successToggleAll(completed);
    expect(toggleAllAction).toEqual({
      'type': SUCCESS_TOGGLE_ALL,
      completed
    });
  });

  test('Test failure action', () => {
    const message = 'error';
    const failure = failureAction(message);
    expect(failure).toEqual({
      'type': FAILURE_ACTION,
      message
    });
  });
});
