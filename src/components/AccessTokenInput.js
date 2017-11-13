import React from 'react'
import PropTypes from 'prop-types'

let AccessTokenInput = ({ onClick }) => {
  let input

  return (
    <section className="access-token section">
      <h2 className="title">Access token</h2>
      <form onSubmit={e => onClick(e, input)}>
        <div className="field has-addons">
          <div className="control">
            <input className="input"
              type="text"
              placeholder="Access token"
              ref={node => { input = node }} />
          </div>
          <button className="button is-link" type="submit">Load accounts</button>
        </div>
      </form>
    </section>
  )
}

AccessTokenInput.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default AccessTokenInput
