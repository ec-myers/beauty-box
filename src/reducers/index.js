import { combineReducers } from 'redux';
import { lipsticks } from './lipsticks';
import { mascaras } from './mascaras';
import { foundations } from './foundations';
import { blushes } from './blushes';
import { eyeshadows } from './eyeshadows';
import { collection } from './collection';
import { error } from './error';
import { isLoading } from './isLoading';

const rootReducer = combineReducers({
  lipsticks,
  mascaras,
  foundations,
  blushes,
  eyeshadows,
  collection,
  error,
  isLoading
});

export default rootReducer;