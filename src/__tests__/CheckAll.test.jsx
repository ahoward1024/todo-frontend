import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import ConnectedCheckAll, {CheckAll} from '../Pages/Todo/CheckAll';

Enzyme.configure({'adapter': new Adapter()});

describe('CHECKALL: Testing ==REACT== component', () => {
  let wrapper = '';
  const completed = false;
  const dispatch = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<CheckAll dispatch={dispatch} completed={completed}/>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Test if ==REACT== component did render', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('Test ==REACT== prop equals initial state', () => {
    expect(wrapper.find('input[checked=false]').prop('checked'))
      .toEqual(completed);
  });

  test('Test ==REACT== component onChange fired', () => {
    const event = {'target': {'completed': false}};
    wrapper.find('input').simulate('change', event);
  });
});

describe('CHECKALL : Testing ==REDUX CONNECTED== component', () => {
  const mockStore = configureStore();
  const initialState = {'checkall': false};
  let store = '';
  let container = '';

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<ConnectedCheckAll store={store}/>);
  });

  test('Test if ==REDUX CONNECTED== component did render', () => {
    expect(container.length).toEqual(1);
  });

  test('Test ==REDUX CONNECTED== component equals initial state', () => {
    expect(container.prop('checkall')).toEqual(initialState.checkAll);
  });
});

describe('CHECKALL : Testing ==REACT REDUX== component', () => {
  const mockStore = configureStore();
  const initalState = {'checkall': false};
  let store = '';
  let wrapper = '';

  beforeEach(() => {
    store = mockStore(initalState);
    wrapper = mount(<Provider store={store}>
                      <ConnectedCheckAll/>
                    </Provider>);
  });

  test('Test render the ==REACT REDUX== connected component', () => {
    expect(wrapper.find(ConnectedCheckAll).length).toEqual(1);
  });
});
