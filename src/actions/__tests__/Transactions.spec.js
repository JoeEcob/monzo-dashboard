import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as module from '../Transactions';

Date.now = jest.fn(() => 1483228800000);
const mockStore = configureMockStore([thunk]);
const accountId = 'account123';

describe('Actions::Transactions', () => {
  it('creates a receive action when fetching transactions is finished', () => {
    const accessToken = 'token123';
    const expectedActions = [
      { type: module.REQUEST_TRANSACTIONS, accountId},
      {
        type: module.RECEIVE_TRANSACTIONS,
        accountId,
        transactions: [
          {
            id: 1,
            description: 'Test transaction',
            created: '2017-01-01T00:00:00Z'
          }
        ],
        receivedAt: 1483228800000
      }
    ];

    const store = mockStore({
      accessToken,
      transactionsByAccountId: { }
    });

    return store.dispatch(module.fetchTransactionsIfNeeded(accountId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('skips fetching transactions if items already exist', () => {
    const accessToken = 'token123';
    const store = mockStore({
      accessToken,
      transactionsByAccountId: { [accountId]: { items: ['foo'], isFetching: false } }
    });

    store.dispatch(module.fetchTransactionsIfNeeded(accountId));
    expect(store.getActions()).toEqual([]);
  });

  it('skips fetching transactions if already fetching', () => {
    const accessToken = 'token123';
    const store = mockStore({
      accessToken,
      transactionsByAccountId: { [accountId]: { items: [], isFetching: true } }
    });

    store.dispatch(module.fetchTransactionsIfNeeded(accountId));
    expect(store.getActions()).toEqual([]);
  });

  it('fetches transactions if past expiry date', () => {
    const accessToken = 'token123';
    const store = mockStore({
      accessToken,
      transactionsByAccountId: {
        [accountId]: {
          items: [],
          isFetching: true,
          lastUpdated: 1483207199999 // 6 hours and 1 ms before
        }
      }
    });

    store.dispatch(module.fetchTransactionsIfNeeded(accountId));
    expect(store.getActions()).toEqual([
      {
        accountId,
        type: module.REQUEST_TRANSACTIONS
      }
    ]);
  });
});
