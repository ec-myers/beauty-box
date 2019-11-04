import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { setLipsticks, setMascaras, setFoundations, setBlushes, setEyeshadows, setCollection, setError, setLoading } from '../actions/index';

jest.mock('../util/apiCalls.js');

describe('App', () => {
 it.skip('should match the snapshot', () => {
  let wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
 });
});

describe('mapStateToProps', () => {
  it('should return an object with 8 properties', () => {
    let lipsticks, mascaras, foundations, blushes, eyeshadows, collection, error, isLoading;
    let mockState = {
      lipsticks,
      mascaras,
      foundations,
      blushes,
      eyeshadows,
      collection,
      error,
      isLoading
    };

    let expected = {
      lipsticks,
      mascaras,
      foundations,
      blushes,
      eyeshadows,
      collection,
      error,
      isLoading
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it('should call dispatch with a setLipsticks action', () => {
    const actionToDispatch = setLipsticks([{}, {}, {}]);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setLipsticks([{}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setMascaras action', () => {
    const actionToDispatch = setMascaras([{}, {}, {}]);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setMascaras([{}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
