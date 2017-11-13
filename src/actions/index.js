import MonzoApi from 'monzo-api'

export const SET_TOKEN = 'SET_TOKEN'

export const setToken = token => ({
  type: SET_TOKEN,
  token
})

export const SELECT_ACCOUNT = 'SELECT_ACCOUNT'
export const REQUEST_ACCOUNTS = 'REQUEST_ACCOUNTS'
export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS'

export const selectAccount = account => ({
  type: SELECT_ACCOUNT,
  account
})

export const requestAccounts = accessToken => ({
  type: REQUEST_ACCOUNTS,
  accessToken
})

export const receiveAccounts = json => ({
  type: RECEIVE_ACCOUNTS,
  accounts: json.accounts,
  receivedAt: Date.now()
})

const fetchAccounts = accessToken => dispatch => {
  dispatch(requestAccounts(accessToken))

  const api = new MonzoApi()
  api.accessToken = accessToken

  return api.accounts()
    .then(json => dispatch(receiveAccounts(json)))
}

export const fetchAccountsIfNeeded = accessToken => (dispatch, getState) => {
  var state = getState()

  // TODO - check for different access token
  if (!state.accounts.items.length && !state.accounts.isFetching) {
    return dispatch(fetchAccounts(accessToken))
  }
}

export const REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS'
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS'

export const requestTransactions = accountId => ({
  type: REQUEST_TRANSACTIONS,
  accountId
})

export const receiveTransactions = (accountId, json) => ({
  type: RECEIVE_TRANSACTIONS,
  accountId,
  transactions: json.transactions,
  receivedAt: Date.now()
})

const fetchTransactions = (accessToken, accountId) => dispatch => {
  dispatch(requestTransactions(accountId))

  const api = new MonzoApi()
  api.accessToken = accessToken

  return api.transactions(accountId, true)
    .then(json => dispatch(receiveTransactions(accountId, json)))
}

export const fetchTransactionsIfNeeded = accountId => (dispatch, getState) => {
  const state = getState()
  const transactions = state.transactionsByAccountId[accountId]

  if (!transactions) {
    return dispatch(fetchTransactions(state.accessToken, accountId))
  }
}
