import { connect } from 'react-redux'
import { selectAccount } from '../actions/Accounts'
import { fetchTransactionsIfNeeded } from '../actions/Transactions'
import AccountList from '../components/AccountList'

const mapStateToProps = state => ({
  accounts: state.accounts.items || { items: [] },
  selectedAccount: state.selectedAccount
})

const mapDispatchToProps = dispatch => ({
  onClick: accountId => {
    dispatch(selectAccount(accountId))
    dispatch(fetchTransactionsIfNeeded(accountId))
  }
})

const Accounts = connect(mapStateToProps, mapDispatchToProps)(AccountList)

export default Accounts
