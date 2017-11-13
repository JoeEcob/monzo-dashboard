import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

let i = 0;
const RenderMerchant = (merchant) => {
  const span = <span key={"merchant-span" + ++i}
    className="fa fa-fw fa-credit-card text-secondary">&nbsp;</span>

  if (!merchant) {
    return [span, ' ', 'Monzo']
  }

  var img = merchant.logo
    ? <img key={merchant.id} src={merchant.logo} width="20" alt={merchant.name} />
    : span
  return [img, ' ', merchant.name]
}

const IsTopUp = (transaction) => {
  return transaction.category.toLowerCase() === 'mondo'
    || transaction.description.toLowerCase() === 'monzo'
}

const TransactionRow = ({ transaction }) => (
  <tr className="transaction" key={transaction.id}>
    <td title={transaction.created}>
      {moment.utc(transaction.created).format('DD/MM/YYYY')}
    </td>
    <td>
      {RenderMerchant(transaction.merchant)}
    </td>
    <td className="is-capitalized">
      {transaction.merchant ? transaction.merchant.emoji : ''}
      &nbsp;
      {IsTopUp(transaction) ? transaction.description : transaction.category}
    </td>
    <td className="is-capitalized">
      {IsTopUp(transaction) ? '' : transaction.description.toLowerCase()}
    </td>
    <td>
      {transaction.notes}
    </td>
    <td className="has-text-right">
      {(transaction.amount / 100).toFixed(2)} {transaction.currency}
    </td>
  </tr>
)

TransactionRow.propTypes = {
  transaction: PropTypes.object.isRequired
}

export default TransactionRow
