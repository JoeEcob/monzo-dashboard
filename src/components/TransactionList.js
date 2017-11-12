import React from 'react'
import PropTypes from 'prop-types'

const TransactionList = ({ transactions }) => (
  <section className="section transactions">
    <h2 className="title">Transactions</h2>
    {transactions.length
      ? transactions.map(transaction =>
        <div className="transaction" key={transaction.id}>
            {transaction.created}
            {transaction.description}
            {transaction.amount / 100}
            {transaction.currency}
            {transaction.category}
        </div>)
      : <p>Nothing to show!</p>
    }
  </section>
)

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired
}

export default TransactionList
