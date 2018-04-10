import * as module from '../Logout';

describe('Actions::Logout', () => {
  it('should create an action to logout', () => {
    const expected = { type: module.LOGOUT };

    expect(module.logout()).toEqual(expected);
  });
});

