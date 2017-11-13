import { connect } from 'react-redux'
import TransactionList from '../components/TransactionList'

const mapStateToProps = state => {
  const { transactionsByAccountId, selectedAccount } = state
  const {
    items: transactions,
    isFetching
  } = transactionsByAccountId[selectedAccount] || { isFetching: false, items: [] }

  return {
    transactions,
    isFetching
  }
}

const Transactions = connect(mapStateToProps)(TransactionList)

export default Transactions
