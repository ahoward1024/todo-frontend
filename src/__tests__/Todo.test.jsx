import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import ConnectedTodo, {Todo, mapDispatchToProps} from '../Pages/Todo/Todo';

Enzyme.configure({'adapter': new Adapter()});

const todo = {
  'id': 'test-id',
  'text': 'test-text',
  'time': 'test-time',
  'completed': false
};

describe('TODO : Testing ==REACT== component', () => {
  const dispatch = jest.fn();
  let wrapper = '';
  beforeEach(() => {
    wrapper = shallow(<Todo
                        dispatch={dispatch}
                        id={todo.id}
                        text={todo.text}
                        time={todo.time}
                        completed={todo.completed}
                      />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Test if ==REACT== component did render', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('Test ==REACT== component onChange fired', () => {
    const event = {'target': {'completed': false}};
    wrapper.find('input').simulate('change', event);
  });

  test('Test ==REACT== component text decoration', () => {
    const noLineThrough = wrapper.find('label').props().style.textDecoration;
    expect(noLineThrough).toEqual('none');
    wrapper.setProps({'completed': true});
    const lineThrough = wrapper.find('label').props().style.textDecoration;
    expect(lineThrough).toEqual('line-through');
  });
});

describe('TODO : Testing the ==REACT REDUX== component', () => {
  const mockStore = configureStore();
  const initialState = {'todos': []};
  const dispatch = jest.fn();
  let wrapper = '';
  let store = '';
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}>
                      <ConnectedTodo
                        id={todo.id}
                        text={todo.text}
                        time={todo.time}
                        completed={todo.completed}
                      />
                    </Provider>);
  });

  test('TODO : Test ==REACT REDUX== connected component did render', () => {
    expect(wrapper.find(ConnectedTodo).length).toEqual(1);
  });
});
