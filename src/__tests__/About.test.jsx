import React from 'react';
import renderer from 'react-test-renderer';
import About from '../Pages/About';

describe('About testing', () => {
  test('Create About component', () => {
    const tree = renderer.create(<About/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
