import MonzoApi from 'monzo-api'

export const SELECT_ACCOUNT = 'SELECT_ACCOUNT'
export const REQUEST_ACCOUNTS = 'REQUEST_ACCOUNTS'
export const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS'
export const REJECT_ACCOUNTS = 'REJECT_ACCOUNTS'

export const selectAccount = accountId => ({
  type: SELECT_ACCOUNT,
  accountId
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

export const rejectAccounts = error => ({
  type: REJECT_ACCOUNTS,
  error: error.response.body.error,
  errorDescription: error.response.body.error_description,
  receivedAt: Date.now()
})

const fetchAccounts = accessToken => dispatch => {
  dispatch(requestAccounts(accessToken))

  const api = new MonzoApi()
  api.accessToken = accessToken

  return api.accounts()
    .then(
      json => dispatch(receiveAccounts(json)),
      error => dispatch(rejectAccounts(error))
    )
}

export const fetchAccountsIfNeeded = accessToken => (dispatch, getState) => {
  var state = getState()

  // TODO - check for different access token
  if (!state.accounts.items.length && !state.accounts.isFetching) {
    return dispatch(fetchAccounts(accessToken))
  }
}
