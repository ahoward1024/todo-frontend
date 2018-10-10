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
  let wrapper = '';
  const dispatch = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<AddTodo/>);
  });

  test('Test if ==REACT== component did render', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('Test ==REACT== onChange', () => {
    const text = 'test text';
    const event = {'target': {'value': text}};
    wrapper.find('input').simulate('change', event);
    expect(wrapper.state('text')).toEqual(text);
  });

  test('Test ==REACT== onClick with empty state', () => {
    expect(wrapper.state('text')).toEqual('');
    wrapper.find('button').simulate('click');
  });

  test('Test ==REACT== onClick with set state', () => {
    const text = 'test text';
    const event = {'target': {'value': text}};
    wrapper.find('input').simulate('change', event);
    expect(wrapper.state('text')).toEqual(text);
    wrapper.find('button').simulate('click');
  });
});
