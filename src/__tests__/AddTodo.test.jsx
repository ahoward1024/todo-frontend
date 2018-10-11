import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import sinon from 'sinon';
import ConnectedAddTodo, {AddTodo} from '../Pages/Todo/AddTodo';

Enzyme.configure({'adapter': new Adapter()});

describe('ADDTODO : Testing ==REACT== component', () => {
  let wrapper = {};
  const dispatch = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<AddTodo dispatch={dispatch}/>);
  });

  test('Test if ==REACT== component did render', () => {
    expect(wrapper.length).toEqual(1);
  });
});

describe('ADDTODO : Testing mount component', () => {
  let wrapper = {};
  const dispatch = jest.fn();

  beforeEach(() => {
    wrapper = mount(<AddTodo dispatch={dispatch}/>);
  });

  test('Test component did mount', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('Test call on submit with empty (initial) text', () => {
    wrapper.find('form').simulate('submit');
    expect(dispatch.mock.calls.length).toBe(0);
  });

  test('Test call on submit with actual text', () => {
    wrapper.find('input').instance().value = 'test text';
    wrapper.find('form').simulate('submit');
    expect(dispatch.mock.calls.length).toBe(1);
  });
});
