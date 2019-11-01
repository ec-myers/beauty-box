export const eyeshadows = (state=[], action) => {
  switch(action.type) {
    case 'SET_EYESHADOWS':
      return action.eyeshadows;
    default:
      return state;  
  }
}