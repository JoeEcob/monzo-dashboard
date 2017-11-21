import React from 'react'
import PropTypes from 'prop-types'
import TransactionRow from './TransactionRow'

const TransactionTable = ({ transactions }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Payee</th>
        <th>Category</th>
        <th>Description</th>
        <th>Notes</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
    {transactions.map(transaction =>
      <TransactionRow transaction={transaction} key={transaction.id} />)}
    </tbody>
  </table>
)

TransactionTable.propTypes = {
  transactions: PropTypes.array.isRequired
}

export default  TransactionTable
