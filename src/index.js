import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './localStorage/localStorage';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools());

// store.subscribe(() => {
//   saveState({
//     user: store.getState().user
//   });
// });

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>, 
  document.getElementById('root'));

serviceWorker.unregister();
