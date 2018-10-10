import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import ConnectedTodoList, {TodoList} from '../Pages/Todo/TodoList';
import Todo from '../Pages/Todo/Todo';

Enzyme.configure({'adapter': new Adapter()});

describe('TODOLIST : Testing ==REACT== component', () => {
  let wrapper = '';
  const todos = [];
  const dispatch = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<TodoList todos={todos}/>);

  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Test if ==REACT== component did render', () => {
    expect(wrapper.length).toEqual(1);
  });
});

describe('TODOLIST : Testing ==REACT REDUX== component', () => {
  const mockStore = configureStore();
  const todo = {
    'id': 'test-id',
    'text': 'test-text',
    'time': 'test-time',
    'completed': false
  };
  const initalState = {'todos': [todo]};
  let store = '';
  let wrapper = '';

  beforeEach(() => {
    store = mockStore(initalState);
    wrapper = mount(<Provider store={store}>
                      <ConnectedTodoList/>
                    </Provider>);
  });

  test('TODOLIST : Test ==REACT REDUX== connected component did render', () => {
    expect(wrapper.find(ConnectedTodoList).length).toEqual(1);
  });
});
