import { connect } from 'react-redux';
import ChartList from '../components/ChartList';

const mapStateToProps = state => {
  const { transactionsByAccountId, selectedAccount } = state
  const {
    items: transactions,
    isFetching
  } = transactionsByAccountId[selectedAccount] || { isFetching: false, items: [] }

  return {
    transactions,
    isFetching
  };
};

const Charts = connect(mapStateToProps)(ChartList);

export default Charts;
