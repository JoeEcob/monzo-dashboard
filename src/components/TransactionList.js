import React from 'react'
import PropTypes from 'prop-types'
import TransactionTable from './TransactionTable'

const TransactionList = ({ transactions, isFetching }) => (
  <section className="section transactions">
    <div className="container">
      <h2 className="title">Transactions</h2>
      {!isFetching && transactions.length
        ? <TransactionTable transactions={transactions} />
        : (isFetching
          ? <button className="button is-loading">Loading...</button>
          : <p>Nothing to show!</p>)
      }
    </div>
  </section>
)

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default TransactionList
