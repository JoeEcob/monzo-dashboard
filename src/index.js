import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './components/App';
import { loadState, saveState } from './localStorage';
import registerServiceWorker from './registerServiceWorker';
import throttle from 'lodash/throttle';
import 'normalize.css/normalize.css';
import 'milligram/dist/milligram.css';
import 'font-awesome/css/font-awesome.css';
import './css/app.css';

const persistedStore = loadState();
const store = createStore(
  reducer,
  persistedStore,
  applyMiddleware(thunk)
);

store.subscribe(throttle(() => {
  const { accessToken, accounts, transactionsByAccountId } = store.getState();

  saveState({
    accessToken,
    accounts,
    transactionsByAccountId
  });
}, 1000));

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
