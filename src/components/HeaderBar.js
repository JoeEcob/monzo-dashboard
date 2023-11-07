import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logout from './Logout';

const HeaderBar = ({ hasAccessToken, logoutOnClick }) => (
  <header className="header">
    <div className="container">
      <NavLink to="/" title="Home">
        <h1>Monzo Dashboard</h1>
      </NavLink>
      <Logout hasAccessToken={hasAccessToken} onClick={logoutOnClick} />
      <nav>
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/transactions" activeClassName="active">Transactions</NavLink>
      </nav>
    </div>
  </header>
);

HeaderBar.propTypes = {
  hasAccessToken: PropTypes.bool.isRequired,
  logoutOnClick: PropTypes.func.isRequired
};

export default HeaderBar;
