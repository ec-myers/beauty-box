import React from 'react';
import { shallow } from 'enzyme';
import { Product, mapStateToProps} from './Product';

describe('Product', () => {
  let toggleCollection = jest.fn();
  let collection = [{}, {}];
  let product = {
    id: 1047,
    brand: "colourpop",
    name: "Blotted Lip",
    image_link: "https://file.com",
    product_link: "https://colourpop.com/",
    description: "Description",
    tag_list: ['tag1', 'tag2']
  }
  let wrapper = shallow(
  <Product 
    toggleCollection={toggleCollection}
    collection={collection}
    product={product}
  />);
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleCollection when button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(toggleCollection).toHaveBeenCalled();
  });
});

describe('mapStateToProps', () => {
  it('should return an array of objects', () => {
    let mockState = {
      collection: [{
      id: 1047,
      brand: "colourpop",
      name: "Blotted Lip",
      image_link: "https://file.com",
      product_link: "https://colourpop.com/",
      description: "Description",
      tag_list: ['tag1', 'tag2']
      }]
    };

    let expected = {
      collection: [{
      id: 1047,
      brand: "colourpop",
      name: "Blotted Lip",
      image_link: "https://file.com",
      product_link: "https://colourpop.com/",
      description: "Description",
      tag_list: ['tag1', 'tag2']
      }]
    };

    let mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});