import { SELECT_ACCOUNT } from '../actions/Accounts'

const selectedAccount = (state = '', action) => {
  switch (action.type) {
    case SELECT_ACCOUNT:
      return action.accountId
    default:
      return state
  }
}

export default selectedAccount
