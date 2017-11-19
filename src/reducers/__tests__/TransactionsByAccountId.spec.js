import reducer from '../TransactionsByAccountId'
import {
  REQUEST_TRANSACTIONS, RECEIVE_TRANSACTIONS, REJECT_TRANSACTIONS
} from '../../actions/Transactions'

const accountId = 'account123'

describe('Reducers::TransactionsByAccountId', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { })).toEqual({ })
  })

  it('should handle REQUEST_TRANSACTIONS', () => {
    expect(
      reducer(undefined, { type: REQUEST_TRANSACTIONS, accountId })
    ).toEqual({
      [accountId]: {
        isFetching: true,
        items: []
      }
    })
  })

  it('should handle RECEIVE_TRANSACTIONS', () => {
    expect(
      reducer(undefined, {
        type: RECEIVE_TRANSACTIONS,
        accountId,
        transactions: ['foo', 'bar', 'baz'],
        receivedAt: 123456
      })
    ).toEqual({
      [accountId]: {
        isFetching: false,
        items: ['baz', 'bar', 'foo'],
        lastUpdated: 123456
      }
    })
  })

  it('should handle REJECT_TRANSACTIONS', () => {
    expect(
      reducer(undefined, { type: REJECT_TRANSACTIONS, accountId })
    ).toEqual({
      [accountId]: {
        isFetching: false,
        items: []
      }
    })
  })
})
