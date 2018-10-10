import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Pages/Home';

describe('Home testing', () => {
  test('Create Home component', () => {
    const tree = renderer.create(<Home/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
