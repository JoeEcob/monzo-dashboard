import { connect } from 'react-redux'
import TransactionList from '../components/TransactionList'

const mapStateToProps = state => {
  const { transactionsByAccountId, selectedAccount } = state
  const { items: transactions } = transactionsByAccountId[selectedAccount] || {
    items: []
  }

  return {
    transactions
  }
}

const Transactions = connect(mapStateToProps)(TransactionList)

export default Transactions
