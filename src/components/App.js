import React from 'react'
import Header from './Header'
import AccessToken from '../containers/AccessToken'
import Accounts from '../containers/Accounts'
import Transactions from '../containers/Transactions'

const App = () => (
  <div>
    <Header />
    <div className="container">
      <div className="columns">
        <div className="column"><AccessToken /></div>
        <div className="column"><Accounts /></div>
      </div>
      <Transactions />
    </div>
  </div>
)

export default App
