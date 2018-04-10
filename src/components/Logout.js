import React from 'react'

const Logout = ({ onClick, hasAccessToken }) => (
  hasAccessToken
    ? <div className="logout float-right">
        <button className="button button-outline" onClick={onClick}>Logout</button>
      </div>
    : ''
);

export default Logout;
