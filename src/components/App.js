import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AccessToken from '../containers/AccessToken';
import Accounts from '../containers/Accounts';
import Header from '../containers/Header';
import Error from '../containers/Error';
import Charts from '../containers/Charts';
import NotFound from './NotFound';
import Transactions from '../containers/Transactions';
import Footer from './Footer';

const App = () => (
  <div>
    <Error />
    <Header />
    <AccessToken />
    <Accounts />
    <Switch>
      <Route exact path="/" component={Charts} />
      <Route path="/transactions" component={Transactions} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default App;
