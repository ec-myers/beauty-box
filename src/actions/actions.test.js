import * as actions from './index';

describe('actions', () => {
  it('should have a type SET_LIPSTICKS', () => {
    const lipsticks = [{}, {}, {}];
    const expectedAction = {
      type: 'SET_LIPSTICKS',
      lipsticks
    };

    const result = actions.setLipsticks(lipsticks);

    expect(result).toEqual(expectedAction);
  });

 
});