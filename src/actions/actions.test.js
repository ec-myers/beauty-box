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

  it('should have a type SET_MASCARAS', () => {
    const mascaras = [{}, {}, {}];
    const expectedAction = {
      type: 'SET_MASCARAS',
      mascaras
    };

    const result = actions.setMascaras(mascaras);

    expect(result).toEqual(expectedAction);
  });

  
});