import reducer from '../Error'
import { CLEAR_ERROR } from '../../actions/Error'
import { REJECT_ACCOUNTS } from '../../actions/Accounts'
import { REJECT_TRANSACTIONS } from '../../actions/Transactions'

describe('Reducers::Error', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      type: null,
      description: null
    })
  })

  it('should handle REJECT_ACCOUNTS', () => {
    expect(
      reducer(undefined, {
        type: REJECT_ACCOUNTS,
        error: 'reject_accounts',
        errorDescription: 'Something went wrong'
      })
    ).toEqual({
      type: 'reject_accounts',
      description: 'Something went wrong'
    })
  })

  it('should handle REJECT_TRANSACTIONS', () => {
    expect(
      reducer(undefined, {
        type: REJECT_TRANSACTIONS,
        error: 'reject_transactions',
        errorDescription: 'Something went wrong'
      })
    ).toEqual({
      type: 'reject_transactions',
      description: 'Something went wrong'
    })
  })

  it('should handle CLEAR_ERROR', () => {
    expect(
      reducer(undefined, { type: CLEAR_ERROR })
    ).toEqual({
      type: null,
      description: null
    })
  })
})
