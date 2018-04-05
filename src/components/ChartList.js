import React from 'react';
import PropTypes from 'prop-types';
import ByCategoryAndMonth from './Charts/ByCategoryAndMonth'
import LoadingIcon from './LoadingIcon';

const ChartList = ({ transactions, isFetching }) => (
  <section className="charts">
    <div className="container">
      <h2>Charts</h2>
      {!isFetching && transactions.length
        ? <ByCategoryAndMonth data={transactions} />
        : (isFetching
          ? <LoadingIcon />
          : <p>Nothing to show!</p>)
      }
    </div>
  </section>
);

ChartList.propTypes = {
  transactions: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default ChartList;
