import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import ReduxApp, {networkError} from '../Pages/Todo/ReduxApp';

global.fetch = require('jest-fetch-mock');

Enzyme.configure({'adapter': new Adapter()});

const response = {'test': 'message'};

const initialState = {
  'checkall': false,
  'todos': []
};
const mockStore = configureStore();
let store = mockStore(initialState);
let reduxApp = '';

describe('ReduxApp testing', () => {

  beforeEach(() => {
    store = mockStore();
    fetch.resetMocks();
    reduxApp = <ReduxApp />;
  });

  test('Create ReduxApp component', () => {
    const tree = renderer.create(<Provider store={store}>
                                  <ReduxApp />
                                 </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Test loading failure generic', async () => {
    fetch.mockResponse(JSON.stringify(response), {'status': 500});
    const wrapper = await shallow(reduxApp);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state('isErrored')).toBe(true);
  });

  test('Test loading failure cannot reach server', async () => {
    fetch.mockReject(networkError);
    const wrapper = await shallow(reduxApp);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state('isErrored')).toBe(true);
    expect(wrapper.state('errorMessage')).toBe('Error: Could not reach server');
  });

  test('Test loading success', async () => {
    fetch.mockResponse(JSON.stringify(response), {'status': 200});
    const wrapper = await shallow(reduxApp);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state('isErrored')).toBe(false);
    expect(wrapper.state('isLoaded')).toBe(true);
  });

});
