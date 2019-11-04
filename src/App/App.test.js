import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import * as actions from '../actions/index';
import { getProduct } from '../util/apiCalls';

jest.mock('../util/apiCalls.js');
jest.mock('../actions');

describe('App', () => {
  let lipsticks = [{}, {}, {}]
  let mascaras = [{}, {}, {}]
  let foundations = [{}, {}, {}]
  let blushes = [{}, {}, {}]
  let eyeshadows = [{}, {}, {}]
  let allCategories=[{}, {}, {}]
  let wrapper = shallow(<App 
    setLipsticks={actions.setLipsticks}
    setMascaras={actions.setMascaras}
    setFoundations={actions.setFoundations}
    setBlushes={actions.setBlushes}
    setEyeshadows={actions.setEyeshadows}
    setCollection={actions.setCollection}
    setError={actions.setError}
    setLoading={actions.setLoading}
    allCategories={allCategories}
    lipsticks={lipsticks}
    mascaras={mascaras}
    foundations={foundations}
    blushes={blushes}
    eyeshadows={eyeshadows}
  />);

 it('should match the snapshot', () => {

  expect(wrapper).toMatchSnapshot();
 });

 it('should call setLipsticks', () => {
   
  expect(actions.setLipsticks).toHaveBeenCalled();
 });

 it('should add a product to collection', () => {
  let newCollection = [{}, {}];
  let mockAction = 

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
    const actionToDispatch = actions.setLipsticks([{}, {}, {}]);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setLipsticks([{}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setMascaras action', () => {
    const actionToDispatch = actions.setMascaras([{}, {}, {}]);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setMascaras([{}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setFoundations action', () => {
    const actionToDispatch = actions.setFoundations([{}, {}, {}]);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setFoundations([{}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setBlushes action', () => {
    const actionToDispatch = actions.setBlushes([{}, {}, {}]);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setBlushes([{}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setEyeshadows action', () => {
    const actionToDispatch = actions.setEyeshadows([{}, {}, {}]);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setEyeshadows([{}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setCollection action', () => {
    const actionToDispatch = actions.setCollection([{}, {}, {}]);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setCollection([{}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setError action', () => {
    const actionToDispatch = actions.setError('Error');
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setError('Error');

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setLoading action', () => {
    const actionToDispatch = actions.setLoading(true);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setLoading(true);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
