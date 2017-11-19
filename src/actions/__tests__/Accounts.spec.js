import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as module from '../Accounts'

Date.now = jest.fn(() => 1483228800000)
const mockStore = configureMockStore([thunk])

describe('Actions::Accounts', () => {
  it('should create an action to select an account', () => {
    var accountId = 'TEST123'
    const expected = {
      type: module.SELECT_ACCOUNT,
      accountId
    }
    expect(module.selectAccount(accountId)).toEqual(expected)
  })

  it('creates a receive action when fetching accounts is finished', () => {
    const accessToken = 'token123'
    const expectedActions = [
      { type: module.REQUEST_ACCOUNTS, accessToken},
      {
        type: module.RECEIVE_ACCOUNTS,
        accounts: [
          {
            id: 'test123',
            description: 'Test account',
            created: '2017-01-01T00:00:00Z'
          }
        ],
        receivedAt: 1483228800000
      }
    ]

    const store = mockStore({ accounts: { items: [], isFetching: false } })

    return store.dispatch(module.fetchAccountsIfNeeded(accessToken)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('skips fetching accounts if items already exist', () => {
    const accessToken = 'token123'
    const store = mockStore({ accounts: { items: ['foo'], isFetching: false } })

    store.dispatch(module.fetchAccountsIfNeeded(accessToken))
    expect(store.getActions()).toEqual([])
  })

  it('skips fetching accounts if already fetching', () => {
    const accessToken = 'token123'
    const store = mockStore({ accounts: { items: [], isFetching: true } })

    store.dispatch(module.fetchAccountsIfNeeded(accessToken))
    expect(store.getActions()).toEqual([])
  })
})
