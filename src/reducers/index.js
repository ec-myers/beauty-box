import { combineReducers } from 'redux';
import { lipsticks } from './lipsticks';
import { mascaras } from './mascaras';

const rootReducer = combineReducers({
  lipsticks,
  mascaras
});

export default rootReducer;