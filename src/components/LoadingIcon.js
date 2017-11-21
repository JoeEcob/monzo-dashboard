import React from 'react'

const LoadingIcon = ({ size = 3 }) => (
  <div className="loading-icon">
    <i className={'fa fa-circle-o-notch fa-spin fa-' + size + 'x fa-fw'}></i>
    <span className="sr-only">Loading...</span>
  </div>
)

export default LoadingIcon
