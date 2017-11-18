import React from 'react'
import PropTypes from 'prop-types'

let AccessTokenInput = ({ shouldHide, isFetching, onClick }) => {
  let input

  return (
    shouldHide
    ? ''
    : <section className="access-token hero is-dark is-medium is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="has-text-left">
            <h2 className="title">Access token</h2>
            <p className="content">
              To get an access token you'll need to visit
              <a className="has-text-info" href="https://developers.monzo.com/"
                title="Monzo Developers" target="_blank" rel="noopener noreferrer"> Monzo Developers </a>
              and login with your email address.
            </p>
            <form onSubmit={e => onClick(e, input)}>
              <div className="field has-addons">
                <div className="control">
                  <input className="input"
                    type="text"
                    placeholder="Access token"
                    ref={node => { input = node }} />
                </div>
                <button className={'button is-link'
                  + (isFetching ? ' is-loading' : '')}
                  type="submit">
                  Load accounts
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

AccessTokenInput.propTypes = {
  shouldHide: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default AccessTokenInput
