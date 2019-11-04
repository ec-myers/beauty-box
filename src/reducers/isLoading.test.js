import { isLoading } from './isLoading';

describe('isLoading', () => {
  it('should return the initial state', () => {
    const expected = false;
    const result = isLoading(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should match case SET_LOADING if action type is correct', () => {
    const initialState = false;
    const action = {
      type: 'SET_LOADING',
      isLoading: true
    };
    const result = true;

    expect(isLoading(initialState, action)).toEqual(result);
  });

  it('should not match case SET_LOADING if action type is incorrect', () => {
    const initialState = false;
    const action = {
      type: 'WRONG_TYPE',
      isLoading: true
    };

    expect(isLoading(initialState, action)).toEqual(initialState);
  }); 
});