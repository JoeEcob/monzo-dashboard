import React from 'react'
import PropTypes from 'prop-types'
import LoadingIcon from './LoadingIcon'

const AccountList = ({
  accounts,
  isFetching,
  selectedAccount,
  onClick
}) => (
  accounts.length === 0
  ? ''
  : <section className="accounts hero">
    <div className="container">
      <h2>Awesome!</h2>
      <p>Which account would you like to view?</p>
      <div>
      {!isFetching && accounts.length
        ? accounts.map(account =>
          [<button key={account.id}
            className={account.id === selectedAccount ? '' : 'button-outline'}
            onClick={() => onClick(account.id)}>
              {account.type}
          </button>, ' '])
        : (isFetching
          ? <LoadingIcon />
          : '')
      }
      </div>
    </div>
  </section>
)

AccountList.propTypes = {
  accounts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  selectedAccount: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default AccountList
