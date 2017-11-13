import { connect } from 'react-redux'
import { selectAccount, fetchTransactionsIfNeeded } from '../actions'
import AccountList from '../components/AccountList'

const mapStateToProps = state => ({
  accounts: state.accounts.items || { items: [] },
  isFetching: state.accounts.isFetching
})

const mapDispatchToProps = dispatch => ({
  onClick: accountId => {
    dispatch(selectAccount(accountId))
    dispatch(fetchTransactionsIfNeeded(accountId))
  }
})

const Accounts = connect(mapStateToProps, mapDispatchToProps)(AccountList)

export default Accounts
