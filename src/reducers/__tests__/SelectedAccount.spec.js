import reducer from '../SelectedAccount'
import { SELECT_ACCOUNT } from '../../actions/Accounts'

describe('Reducers::SelectedAccount', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('')
  })

  it('should handle SELECT_ACCOUNT', () => {
    const accountId = 'account123'

    expect(
      reducer(undefined, { type: SELECT_ACCOUNT, accountId })
    ).toEqual(accountId)
  })
})
