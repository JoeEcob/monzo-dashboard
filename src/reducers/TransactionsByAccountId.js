import {
  REQUEST_TRANSACTIONS, RECEIVE_TRANSACTIONS, REJECT_TRANSACTIONS
} from '../actions/Transactions'

const transactions = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_TRANSACTIONS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_TRANSACTIONS:
      return {
        ...state,
        isFetching: false,
        items: action.transactions.reverse(),
        lastUpdated: action.receivedAt
      }
    case REJECT_TRANSACTIONS:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

const transactionsByAccountId = (state = { }, action) => {
  switch (action.type) {
    case REQUEST_TRANSACTIONS:
    case RECEIVE_TRANSACTIONS:
    case REJECT_TRANSACTIONS:
      return {
        ...state,
        [action.accountId]: transactions(state[action.accountId], action)
      }
    default:
      return state
  }
}

export default transactionsByAccountId
