import { CLEAR_ERROR } from '../actions/Error'
import { REJECT_ACCOUNTS } from '../actions/Accounts'
import { REJECT_TRANSACTIONS } from '../actions/Transactions'

const error = (state = {
  type: null,
  description: null
}, action) => {
  switch (action.type) {
    case REJECT_ACCOUNTS:
    case REJECT_TRANSACTIONS:
      return {
        ...state,
        type: action.error.code,
        description: action.error.message
      }
    case CLEAR_ERROR:
      return {
        ...state,
        type: null,
        description: null
      }
    default:
      return state
  }
}

export default error
