import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HealthCheck, {successMessage, errorMessage} from '../Pages/HealthCheck';

global.fetch = require('jest-fetch-mock');

Enzyme.configure({'adapter': new Adapter()});

const mockCallback = jest.fn();
let healthCheck = '';
const response = {'test': 'message'};

describe('HealthCheck testing', () => {
  beforeEach(() => {
    fetch.resetMocks();
    healthCheck = <HealthCheck />;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Create HealthCheck component', async () => {
    fetch.mockResponse(JSON.stringify(response));
    const tree = await renderer.create(healthCheck).toJSON();
    await expect(tree).toMatchSnapshot();
  });

  test('HealthCheck success, server is up', async () => {
    fetch.mockResponse(JSON.stringify(response), {'status': 200});
    const wrapper = await shallow(healthCheck);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state('message')).toBe(successMessage);
  });

  test('HealthCheck failure, server error', async () => {
    fetch.mockResponse(JSON.stringify(response), {'status': 500});
    const wrapper = await shallow(healthCheck);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state('message')).toBe(errorMessage);
  });

  test('HealthCheck component cancelled no error', async () => {
    fetch.mockResponse(JSON.stringify(response), {'status': 200});
    const wrapper = await shallow(healthCheck);
    await wrapper.instance().componentWillUnmount();
    expect(wrapper.state('message')).toBe('Checking...');
  });

  test('HealthCheck failure, server is down', async () => {
    const error =
      'Error: TypeError: NetworkError when attempting to fetch resource.';
    fetch.mockReject(error);
    const wrapper = await shallow(healthCheck);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state('message')).toBe(errorMessage);
    expect(wrapper.state('status')).toBe(error);
  });

  test('HealthCheck componentWillUnmount()', async () => {
    const wrapper = await shallow(healthCheck);
    await wrapper.instance().componentWillUnmount();
    expect(wrapper.instance().isCancelled).toBe(true);
  });
});
