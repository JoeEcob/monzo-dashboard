import React from 'react'
import { connect } from 'react-redux'
import { setToken, fetchAccountsIfNeeded } from '../actions'

let AccessToken = ({ dispatch }) => {
  let input

  return (
    <section className="access-token section">
      <h2 className="title">Access token</h2>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }

        dispatch(setToken(input.value))
        dispatch(fetchAccountsIfNeeded(input.value))
      }}>
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

AccessToken = connect()(AccessToken)

export default AccessToken
