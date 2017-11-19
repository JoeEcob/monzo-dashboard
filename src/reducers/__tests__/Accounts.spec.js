import reducer from '../Accounts'
import {
  REQUEST_ACCOUNTS, RECEIVE_ACCOUNTS, REJECT_ACCOUNTS
} from '../../actions/Accounts'

describe('Reducers::Accounts', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isFetching: false,
      items: []
    })
  })

  it('should handle REQUEST_ACCOUNTS', () => {
    expect(
      reducer(undefined, { type: REQUEST_ACCOUNTS })
    ).toEqual({
      isFetching: true,
      items: []
    })
  })

  it('should handle RECEIVE_ACCOUNTS', () => {
    expect(
      reducer(undefined, {
        type: RECEIVE_ACCOUNTS,
        accounts: ['foo', 'bar', 'baz'],
        receivedAt: 123456
      })
    ).toEqual({
      isFetching: false,
      items: ['foo', 'bar', 'baz'],
      lastUpdated: 123456
    })
  })

  it('should handle REJECT_ACCOUNTS', () => {
    expect(
      reducer(undefined, { type: REJECT_ACCOUNTS })
    ).toEqual({
      isFetching: false,
      items: []
    })
  })
})
