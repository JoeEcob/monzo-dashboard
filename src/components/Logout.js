import React from 'react'

const Logout = ({ onClick, hasAccessToken }) => (
  hasAccessToken
    ? <div className="logout">
        <button className="button-outline" onClick={onClick}>Logout</button>
      </div>
    : ''
);

export default Logout;
