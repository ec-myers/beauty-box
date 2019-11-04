import React from 'react';
import { shallow } from 'enzyme';
import { Category, mapStateToProps } from './Category';

describe('Category', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Category isLoading={false} />)
    
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return an object with an isLoading property', () => {
    let mockState = {
      isLoading: false
    };

    let expected = {
      isLoading: false
    };

    let mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});
