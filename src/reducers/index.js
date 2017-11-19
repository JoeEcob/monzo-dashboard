import { combineReducers } from 'redux'
import {
  SET_TOKEN, CLEAR_ERROR, SELECT_ACCOUNT,
  REQUEST_ACCOUNTS, RECEIVE_ACCOUNTS, REJECT_ACCOUNTS,
  REQUEST_TRANSACTIONS, RECEIVE_TRANSACTIONS, REJECT_TRANSACTIONS
} from '../actions/ActionTypes'

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
      return action.accountId
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
    case REJECT_ACCOUNTS:
      return {
        ...state,
        isFetching: false,
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
      return {
        ...state,
        [action.accountId]: transactions(state[action.accountId], action)
      }
    default:
      return state
  }
}

const error = (state = {
  type: null,
  description: null
}, action) => {
  switch (action.type) {
    case REJECT_ACCOUNTS:
    case REJECT_TRANSACTIONS:
      return {
        ...state,
        type: action.error,
        description: action.errorDescription
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

const rootReducer = combineReducers({
  accessToken,
  selectedAccount,
  accounts,
  transactionsByAccountId,
  error
})

export default rootReducer
