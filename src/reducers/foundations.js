export const foundations = (state=[], action) => {
  switch(action.type) {
    case('SET_FOUNDATIONS'):
      return action.foundations;
    default:
      return state;  
  }
}