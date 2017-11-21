import { connect } from 'react-redux'
import { clearError } from '../actions/Error'
import { setToken } from '../actions/AccessToken'
import { fetchAccountsIfNeeded } from '../actions/Accounts'
import AccessTokenInput from '../components/AccessTokenInput'

const mapStateToProps = state => ({
  isFetching: state.accounts.isFetching,
  shouldHide: state.accounts.items.length > 0
})

const mapDispatchToProps = dispatch => ({
  onClick: (e, input) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }

    dispatch(clearError())
    dispatch(setToken(input.value))
    dispatch(fetchAccountsIfNeeded(input.value))
  }
})

const AccessToken = connect(mapStateToProps, mapDispatchToProps)(AccessTokenInput)

export default AccessToken
