import { combineReducers } from 'redux';
import accessToken from './AccessToken';
import selectedAccount from './SelectedAccount';
import accounts from './Accounts';
import transactionsByAccountId from './TransactionsByAccountId';
import error from './Error';
import { LOGOUT } from '../actions/Logout';

const appReducer = combineReducers({
  accessToken,
  selectedAccount,
  accounts,
  transactionsByAccountId,
  error
});

const rootReducer= (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
