import { connect } from 'react-redux'
import { clearError } from '../actions'
import ErrorMessage from '../components/ErrorMessage'

const mapStateToProps = state => (state.error)

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(clearError())
  }
})

const Error = connect(mapStateToProps, mapDispatchToProps)(ErrorMessage)

export default Error
