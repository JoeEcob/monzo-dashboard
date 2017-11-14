import React from 'react'
import AccessToken from '../containers/AccessToken'
import Accounts from '../containers/Accounts'
import Transactions from '../containers/Transactions'

const App = () => (
  <div>
    <div className="columns">
      <div className="column">
        <AccessToken />
      </div>
      <div className="column">
        <Accounts />
      </div>
    </div>
    <Transactions />
  </div>
)

export default App
