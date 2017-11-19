import * as module from '../AccessToken'

describe('Actions::AccessToken', () => {
  it('should create an action to set the access token', () => {
    const token = 'token123'
    const expected = { type: module.SET_TOKEN, token }

    expect(module.setToken(token)).toEqual(expected)
  })
})

