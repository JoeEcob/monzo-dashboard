import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

let i = 0
const RenderMerchant = (merchant) => {
  const span = <span key={"merchant-span" + ++i}
    className="fa fa-fw fa-credit-card">&nbsp;</span>

  if (!merchant) {
    return [span, ' ', 'Monzo']
  }

  var img = merchant.logo
    ? <img key={merchant.id} src={merchant.logo} alt={merchant.name} />
    : span
  return [img, ' ', merchant.name]
}

const IsEqual = (a, b) => {
  return a.trim().toLowerCase() === b.trim().toLowerCase()
}

const FormatDate = (date, includeTime = false) => {
  return moment.utc(date).format('DD/MM/YYYY'
    + (includeTime ? ' HH:mm:ss' : ''))
}

const TransactionRow = ({ transaction }) => (
  <tr className="transaction" key={transaction.id}>
    <td className="date" title={FormatDate(transaction.created, true)}>
      {FormatDate(transaction.created)}
    </td>
    <td className="payee">
      {RenderMerchant(transaction.merchant)}
    </td>
    <td className="category">
      {transaction.merchant
        ? <span className="emoji">{transaction.merchant.emoji}</span>
        : ''}
      &nbsp;
      {transaction.category}
    </td>
    <td className="description">
      {transaction.description.toLowerCase()}
    </td>
    <td className="notes">
      {IsEqual(transaction.description, transaction.notes)
        ? ''
        : transaction.notes}
    </td>
  <td className={'amount ' + (transaction.amount >= 0 ? 'positive' : 'negative')}>
      {(transaction.amount / 100).toFixed(2)} {transaction.currency}
    </td>
  </tr>
)

TransactionRow.propTypes = {
  transaction: PropTypes.object.isRequired
}

export default TransactionRow
