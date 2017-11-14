import React from 'react'

const Header = () => (
  <nav class="navbar is-dark">
    <div class="container">
      <div class="navbar-brand navbar-item">
        <h1 class="title has-text-white">Spendy <span class="subtitle is-6 has-text-grey-lighter">beta</span></h1>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/">Transactions</a>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
