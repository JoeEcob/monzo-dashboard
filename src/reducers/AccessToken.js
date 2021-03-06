import { SET_TOKEN } from '../actions/AccessToken'

const accessToken = (state = '', action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.token
    default:
      return state
  }
}

export default accessToken
