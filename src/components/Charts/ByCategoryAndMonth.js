import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';
import _ from 'underscore';
import Colours from './Colours';

const PrettifyCategory = (str) => (
  (str.charAt(0).toUpperCase() + str.slice(1)).replace('_', ' ')
);

const ToPositivePounds = (num) => ((num * -1) / 100);

/**
 * Builds a map of Category => Date => Total
 */
const BuildCategoryDateTree = (transactionsByCategoryAndDate) => {
  let totals = {};
  let monthsList = [];
  _.each(transactionsByCategoryAndDate, (group) => {
    let category = group[0].category;

    if (category === 'mondo')
      return;

    let monthAndYear = group[0].created.substring(0, 7);
    monthsList.push(monthAndYear);

    totals[category] = totals[category] || {};

    // Sum all the transactions in this group, and convert from pence to pounds.
    totals[category][monthAndYear] = _.reduce(
      _.reject(group, (r) => (!r.include_in_spending)),
      (memo, t) => (memo + ToPositivePounds(t.amount)), 0);
  });

  return { monthsList, totals };
};

const Convert = (transactions) => {
  let byCategoryAndDate = _.groupBy(transactions,
    (t) => (t.category + '|' + t.created.substring(0, 7)));

  let { monthsList, totals } = BuildCategoryDateTree(byCategoryAndDate);

  // Sort ascending
  monthsList = _.sortBy(_.uniq(monthsList), (m) => (m));

  let labels = _.map(monthsList,
    (l) => (moment.utc(l, 'YYYY-MM').format('MMM YY')));

  let datasets = _.map(_.keys(totals), (category, index) => ({
      label: PrettifyCategory(category),
      backgroundColor: Colours[index],
      borderColor: Colours[index],
      data: _.map(monthsList, (m) => (totals[category][m] || 0))
    })
  );

  return { labels, datasets };
};

const Options = () => ({
  animation: false,
  legend: false,
  title: {
    display: true,
    fontSize: 20,
    text: "Spending By Category Per Month"
  },
  tooltips: {
    callbacks: {
      label: (ele, data) => {
        let category = data.datasets[ele.datasetIndex].label;
        let amount = "£" + ele.yLabel.toFixed(2);
        return category + ": " + amount;
      }
    }
  },
  scales: {
    xAxes: [{
      stacked: true
    }],
    yAxes: [{
      stacked: true
    }]
  }
});

const ByCategoryAndMonth = ({ data }) => (
  <Bar data={Convert(data)} options={Options()} />
);

ByCategoryAndMonth.propTypes = {
  data: PropTypes.array.isRequired
};

export default ByCategoryAndMonth;
