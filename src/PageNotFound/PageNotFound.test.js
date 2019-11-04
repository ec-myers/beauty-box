import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(<PageNotFound />);

    expect(wrapper).toMatchSnapshot();
  });
});