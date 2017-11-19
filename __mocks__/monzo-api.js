export default class MonzoApi {
  accounts = () => {
    return new Promise((resolve, reject) => {
      resolve({
        accounts: [
          {
            id: 'test123',
            description: 'Test account',
            created: '2017-01-01T00:00:00Z'
          }
        ]
      })
    })
  }

  transactions = (accountId, expand) => {
    return new Promise((resolve, reject) => {
      resolve({
        transactions: [
          {
            id: 1,
            description: 'Test transaction',
            created: '2017-01-01T00:00:00Z'
          }
        ]
      })
    })
  }
}
