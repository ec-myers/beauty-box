import { combineReducers } from 'redux';
import { lipsticks } from './lipsticks';
import { mascaras } from './mascaras';
import { foundations } from './foundations';
import { blushes } from './blushes';

const rootReducer = combineReducers({
  lipsticks,
  mascaras,
  foundations,
  blushes
});

export default rootReducer;