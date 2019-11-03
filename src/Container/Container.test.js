import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Container', () => {
  it('should match the snapshot if there is a productType', () => {
    let toggleCollection = jest.fn();
    let type = '';
    let collection = [{
      id: 1047,
      brand: "colourpop",
      name: "Blotted Lip",
      image_link: "https://file.com",
      product_link: "https://colourpop.com/",
      description: "Description",
      tag_list: ['tag1', 'tag2']
    }];
    let allCategories = [{
      id: 1047,
      brand: "colourpop",
      name: "Blotted Lip",
      image_link: "https://file.com",
      product_link: "https://colourpop.com/",
      description: "Description",
      tag_list: ['tag1', 'tag2']
    }];
    let productType = ['mascara'];

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

  it('should match the snapshot if type is collection', () => {
    let toggleCollection = jest.fn();
    let type = 'collection';
    let collection = [{
      id: 1047,
      brand: "colourpop",
      name: "Blotted Lip",
      image_link: "https://file.com",
      product_link: "https://colourpop.com/",
      description: "Description",
      tag_list: ['tag1', 'tag2']
    }];
    let allCategories = [{
      id: 1047,
      brand: "colourpop",
      name: "Blotted Lip",
      image_link: "https://file.com",
      product_link: "https://colourpop.com/",
      description: "Description",
      tag_list: ['tag1', 'tag2']
    }];
    let productType = [''];

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

  it('should match the snapshot if type is shopall', () => {
    let toggleCollection = jest.fn();
    let type = 'shopall';
    let collection = [{
      id: 1047,
      brand: "colourpop",
      name: "Blotted Lip",
      image_link: "https://file.com",
      product_link: "https://colourpop.com/",
      description: "Description",
      tag_list: ['tag1', 'tag2']
    }];
    let allCategories = [{
      id: 1047,
      brand: "colourpop",
      name: "Blotted Lip",
      image_link: "https://file.com",
      product_link: "https://colourpop.com/",
      description: "Description",
      tag_list: ['tag1', 'tag2']
    }];
    let productType = [''];

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