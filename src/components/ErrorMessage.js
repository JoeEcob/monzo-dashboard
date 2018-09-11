import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ type, description, onClick }) => {
  if (!description) {
    return null;
  }

  return <div className="error-message container">
    <div className="row">
      <div className="column column-50" data-code={type}>
        <i className="close-icon fa fa-times" aria-hidden="true" onClick={onClick}></i>
        <p>{description}</p>
      </div>
    </div>
  </div>
};

ErrorMessage.propTypes = {
  type: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default ErrorMessage;
