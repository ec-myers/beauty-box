export const mascaras = (state=[], action) => {
  switch(action.type) {
    case 'SET_MASCARAS':
      return action.mascaras; 
    default:
      return state;    
  }
}