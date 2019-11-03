import { error } from './error';

describe('error', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = error(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should match case SET_ERROR if action type is correct', () => {
    const initialState = '';
    const action = {
      type: 'SET_ERROR',
      error: 'error'
    };
    const result = 'error';

    expect(error(initialState, action)).toEqual(result);
  });
});