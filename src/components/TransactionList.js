import React from 'react'
import PropTypes from 'prop-types'
import TransactionTable from './TransactionTable'

const TransactionList = ({ transactions }) => (
  <section className="section transactions">
    <h2 className="title">Transactions</h2>
    {transactions.length
      ? <TransactionTable transactions={transactions} />
      : <p>Nothing to show!</p>
    }
  </section>
)

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired
}

export default TransactionList
