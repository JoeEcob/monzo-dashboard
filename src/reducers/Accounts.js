import {
  REQUEST_ACCOUNTS, RECEIVE_ACCOUNTS, REJECT_ACCOUNTS
} from '../actions/Accounts'

const accounts = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_ACCOUNTS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_ACCOUNTS:
      return {
        ...state,
        isFetching: false,
        items: action.accounts,
        lastUpdated: action.receivedAt
      }
    case REJECT_ACCOUNTS:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state
  }
}

export default accounts
