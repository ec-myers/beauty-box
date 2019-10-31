export const blushes = (state=[], action) => {
  switch(action.type) {
    case 'SET_BLUSHES':
      return action.blushes
    default:
      return state;  
  }
}