import React from 'react'
import PropTypes from 'prop-types'

const AccountList = ({ accounts, onClick }) => (
  <section className="section accounts">
    <h2 className="title">Accounts</h2>
    {accounts.length
      ? accounts.map(account =>
        [<button className="button" key={account.id}
          onClick={() => onClick(account.id)}>
            {account.type}
        </button>, ' '])
      : <p>Nothing to show!</p>
    }
  </section>
)

AccountList.propTypes = {
  accounts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default AccountList
