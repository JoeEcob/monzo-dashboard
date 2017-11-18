import React from 'react'
import Header from './Header'
import Error from '../containers/Error'
import AccessToken from '../containers/AccessToken'
import Accounts from '../containers/Accounts'
import Transactions from '../containers/Transactions'
import Footer from './Footer'

const App = () => (
  <div>
    <Header />
    <Error />
    <AccessToken />
    <Accounts />
    <Transactions />
    <Footer />
  </div>
)

export default App
