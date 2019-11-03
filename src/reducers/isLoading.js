export const isLoading = (state='', action) => {
  switch(action.type) {
    case 'SET_LOADING':
      return action.isLoading
    default:
      return state  
  }
}