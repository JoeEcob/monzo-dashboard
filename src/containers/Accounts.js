import { connect } from 'react-redux'
import { selectAccount, fetchTransactionsIfNeeded } from '../actions'
import AccountList from '../components/AccountList'

const mapStateToProps = state => ({
  accounts: state.accounts.items || { items: [] }
})

const mapDispatchToProps = dispatch => {
  return {
    onClick: accountId => {
      dispatch(selectAccount(accountId))
      dispatch(fetchTransactionsIfNeeded(accountId))
    } 
  }
}

const Accounts = connect(mapStateToProps, mapDispatchToProps)(AccountList)

export default Accounts
