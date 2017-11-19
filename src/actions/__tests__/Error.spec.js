import * as module from '../Error'

describe('Actions::Error', () => {
  it('should create an action to clear the error', () => {
    const expected = { type: module.CLEAR_ERROR }

    expect(module.clearError()).toEqual(expected)
  })
})
