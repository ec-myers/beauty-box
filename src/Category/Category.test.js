import React from 'react';
import { shallow } from 'enzyme';
import { Category, mapStateToProps } from './Category';

describe('Category', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Category isLoading={false} />)
    
    expect(wrapper).toMatchSnapshot();
  });

});
