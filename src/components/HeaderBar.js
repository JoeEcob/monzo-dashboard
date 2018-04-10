import React from 'react';
import PropTypes from 'prop-types';
import Logout from './Logout';

const HeaderBar = ({ hasAccessToken, logoutOnClick }) => (
  <nav className="header">
    <div className="container">
      <a href="/" title="Home">
        <h1>Spendy</h1>
        <h4>beta</h4>
      </a>
      <Logout hasAccessToken={hasAccessToken} onClick={logoutOnClick} />
    </div>
  </nav>
);

HeaderBar.propTypes = {
  hasAccessToken: PropTypes.bool.isRequired,
  logoutOnClick: PropTypes.func.isRequired
};

export default HeaderBar;
