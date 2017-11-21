import React from 'react'
import PropTypes from 'prop-types'
import LoadingIcon from './LoadingIcon'

let AccessTokenInput = ({ shouldHide, isFetching, onClick }) => {
  let input

  return (
    shouldHide
    ? ''
    : <section className="access-token hero">
        <div className="container">
          <h2>Access token</h2>
          <p>
            To get an access token you'll need to visit
            <a href="https://developers.monzo.com/" title="Monzo Developers"
              target="_blank" rel="noopener noreferrer"> Monzo Developers </a>
            and login with your email address.
          </p>
          <form onSubmit={e => onClick(e, input)}>
            <input
              type="text"
              placeholder="Access token"
              ref={node => { input = node }} />
            {isFetching
              ? <LoadingIcon size='2' />
              : <button type="submit">Load accounts</button>}
          </form>
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
