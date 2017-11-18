import React from 'react'
import PropTypes from 'prop-types'

const AccountList = ({
  accounts,
  isFetching,
  selectedAccount,
  onClick
}) => (
  accounts.length === 0
  ? ''
  : <section className="accounts hero is-dark is-medium is-bold">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="has-text-left">
          <h2 className="title">Awesome!</h2>
          <p className="content">Which account would you like to view?</p>
          <div className="buttons">
          {!isFetching && accounts.length
            ? accounts.map(account =>
              [<button key={account.id}
                className={'button is-link'
                  + (account.id === selectedAccount ? '' : ' is-outlined is-inverted')}
                onClick={() => onClick(account.id)}>
                  <span className="icon"><i className="fa fa-fw fa-user-circle"></i></span>
                  <span>{account.type}</span>
              </button>, ' '])
            : (isFetching
              ? <button className="button is-loading">Loading...</button>
              : '')
          }
          </div>
        </div>
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
