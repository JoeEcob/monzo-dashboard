import React from 'react'
import PropTypes from 'prop-types'

const AccountList = ({
  accounts,
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
        {accounts.map(account =>
          [<button key={account.id}
            className={account.id === selectedAccount ? '' : 'button-outline'}
            onClick={() => onClick(account.id)}>
              {account.type}
          </button>, ' '])}
      </div>
    </div>
  </section>
)

AccountList.propTypes = {
  accounts: PropTypes.array.isRequired,
  selectedAccount: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default AccountList
