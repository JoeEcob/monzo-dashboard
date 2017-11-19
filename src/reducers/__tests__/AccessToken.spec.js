import reducer from '../AccessToken'
import { SET_TOKEN } from '../../actions/AccessToken'

describe('Reducers::AccessToken', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('')
  })

  it('should handle SET_TOKEN', () => {
    const token = 'token123'

    expect(
      reducer(undefined, { type: SET_TOKEN, token })
    ).toEqual(token)
  })
})
