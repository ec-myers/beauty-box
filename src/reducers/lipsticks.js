export const lipsticks = (state=[], action) => {
  switch (action.type) {
    case 'SET_LIPSTICKS': 
      return action.lipsticks
    default:
      return state
  }
};