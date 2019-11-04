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

 it('should add a product to collection', () => {
  let newCollection = [{}, {}];

  expect(setCollection(newCollection)).toEqual(newCollection);
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

  it('should call dispatch with a setFoundations action', () => {
    const actionToDispatch = setFoundations([{}, {}, {}]);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setFoundations([{}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setBlushes action', () => {
    const actionToDispatch = setBlushes([{}, {}, {}]);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setBlushes([{}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setEyeshadows action', () => {
    const actionToDispatch = setEyeshadows([{}, {}, {}]);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setEyeshadows([{}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setCollection action', () => {
    const actionToDispatch = setCollection([{}, {}, {}]);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setCollection([{}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setError action', () => {
    const actionToDispatch = setError('Error');
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setError('Error');

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setLoading action', () => {
    const actionToDispatch = setLoading(true);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setLoading(true);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
