import React from 'react';
import { shallow } from 'enzyme';
import { Product, mapStateToProps} from './Product';

describe('Product', () => {
  it('should match the snapshot', () => {
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

    expect(wrapper).toMatchSnapshot();
  });
});