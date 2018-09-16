import MonzoApi from 'monzo-api';

export const REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS';
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';
export const REJECT_TRANSACTIONS = 'REJECT_TRANSACTIONS';

export const requestTransactions = accountId => ({
  type: REQUEST_TRANSACTIONS,
  accountId
});

export const receiveTransactions = (accountId, json) => ({
  type: RECEIVE_TRANSACTIONS,
  accountId,
  transactions: json.transactions,
  receivedAt: Date.now()
});

export const rejectTransactions = (accountId, error) => ({
  type: REJECT_TRANSACTIONS,
  receivedAt: Date.now(),
  accountId,
  error
});

const fetchTransactions = (accessToken, accountId) => dispatch => {
  dispatch(requestTransactions(accountId));

  const api = new MonzoApi();
  api.accessToken = accessToken;

  return api.transactions(accountId, true)
    .then(
      json => dispatch(receiveTransactions(accountId, json)),
      error => dispatch(rejectTransactions(accountId, error))
    );
};

export const fetchTransactionsIfNeeded = accountId => (dispatch, getState) => {
  const state = getState();
  const transactions = state.transactionsByAccountId[accountId];
  const maxTimeDifference = 21600000; // 6 hours in ms

  if (typeof(transactions) !== 'undefined' && transactions.isFetching)
    return;

  if (!transactions
      || transactions.items.length === 0
      || transactions.lastUpdated < (Date.now() - maxTimeDifference)) {
    return dispatch(fetchTransactions(state.accessToken, accountId));
  }
};
