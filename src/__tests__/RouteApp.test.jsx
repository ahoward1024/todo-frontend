import React from 'react';
import renderer from 'react-test-renderer';
import RouteApp from '../RouteApp';

describe('RouteApp testing', () => {
  test('Create RouteApp component', () => {
    const tree = renderer.create(<RouteApp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
