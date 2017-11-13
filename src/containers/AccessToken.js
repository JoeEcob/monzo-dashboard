import { connect } from 'react-redux'
import { setToken, fetchAccountsIfNeeded } from '../actions'
import AccessTokenInput from '../components/AccessTokenInput'

const mapDispatchToProps = dispatch => ({
  onClick: (e, input) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }

    dispatch(setToken(input.value))
    dispatch(fetchAccountsIfNeeded(input.value))
  }
})

const AccessToken = connect(null, mapDispatchToProps)(AccessTokenInput)

export default AccessToken
