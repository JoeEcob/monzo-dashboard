import React from 'react';
import Header from '../containers/Header';
import Error from '../containers/Error';
import AccessToken from '../containers/AccessToken';
import Accounts from '../containers/Accounts';
import Charts from '../containers/Charts';
import Transactions from '../containers/Transactions';
import Footer from './Footer';

const App = () => (
  <div>
    <Error />
    <Header />
    <AccessToken />
    <Accounts />
    <Charts />
    <Transactions />
    <Footer />
  </div>
);

export default App;
