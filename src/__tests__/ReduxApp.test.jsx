import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import ReduxApp from '../Pages/Todo/ReduxApp';

const initialState = {
  'checkall': false,
  'todos': []
};
const mockStore = configureStore();
const store = mockStore(initialState);

describe('ReduxApp testing', () => {
  test('Create ReduxApp component', () => {
    const tree = renderer.create(<Provider store={store}>
                                  <ReduxApp />
                                 </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
