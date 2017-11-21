import React from 'react'
import PropTypes from 'prop-types'
import TransactionTable from './TransactionTable'
import LoadingIcon from './LoadingIcon'

const TransactionList = ({ transactions, isFetching }) => (
  <section className="transactions">
    <div className="container">
      <h2>Transactions</h2>
      {!isFetching && transactions.length
        ? <TransactionTable transactions={transactions} />
        : (isFetching
          ? <LoadingIcon />
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
