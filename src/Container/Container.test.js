import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Container', () => {
  it('should match the snapshot', () => {
    let toggleCollection = jest.fn();
    let type = '';
    let collection = [{}, {}, {}];
    let allCategories = [{}, {}, {}];
    let productType = [{}, {}, {}];

    const collectionWrapper = shallow(
      <Container
        productType={productType}
        toggleCollection={toggleCollection}
        type={type}
        collection={collection}
        allCategories={allCategories}
        />
    );

    expect(collectionWrapper).toMatchSnapshot();
  });
});