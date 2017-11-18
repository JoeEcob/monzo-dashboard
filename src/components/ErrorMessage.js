import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessage = ({ type, description, onClick }) => {
  if (!type || !description) {
    return null
  }

  return <div className="notification is-danger">
    <button className="delete" onClick={onClick}></button>
    <p>{type} - {description}</p>
  </div>
}

ErrorMessage.propTypes = {
  type: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default ErrorMessage
