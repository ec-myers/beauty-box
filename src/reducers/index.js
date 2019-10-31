import { combineReducers } from 'redux';
import { lipsticks } from './lipsticks';
import { mascaras } from './mascaras';
import { foundations } from './foundations';

const rootReducer = combineReducers({
  lipsticks,
  mascaras,
  foundations
});

export default rootReducer;