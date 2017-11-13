import { combineReducers } from 'redux'
import {
  SET_TOKEN, SELECT_ACCOUNT,
  REQUEST_ACCOUNTS, RECEIVE_ACCOUNTS,
  REQUEST_TRANSACTIONS, RECEIVE_TRANSACTIONS
} from '../actions'

const accessToken = (state = '', action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.token
    default:
      return state
  }
}

const selectedAccount = (state = '', action) => {
  switch (action.type) {
    case SELECT_ACCOUNT:
      return action.account
    default:
      return state
  }
}

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
    default:
      return state
  }
}

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
    default:
      return state
  }
}

const transactionsByAccountId = (state = { }, action) => {
  switch (action.type) {
    case REQUEST_TRANSACTIONS:
    case RECEIVE_TRANSACTIONS:
      return {
        ...state,
        [action.accountId]: transactions(state[action.accountId], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  accessToken,
  selectedAccount,
  accounts,
  transactionsByAccountId
})

export default rootReducer
