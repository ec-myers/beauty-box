import { combineReducers } from 'redux';
import { lipsticks } from './lipsticks';
import { mascaras } from './mascaras';
import { foundations } from './foundations';
import { blushes } from './blushes';
import { eyeshadows } from './eyeshadows';

const rootReducer = combineReducers({
  lipsticks,
  mascaras,
  foundations,
  blushes,
  eyeshadows
});

export default rootReducer;