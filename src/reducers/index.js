import { combineReducers } from 'redux'
import accessToken from './AccessToken'
import selectedAccount from './SelectedAccount'
import accounts from './Accounts'
import transactionsByAccountId from './TransactionsByAccountId'
import error from './Error'

const rootReducer = combineReducers({
  accessToken,
  selectedAccount,
  accounts,
  transactionsByAccountId,
  error
})

export default rootReducer
