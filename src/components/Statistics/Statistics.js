import PropTypes from 'prop-types';
import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  //   console.log(stats);
  return (
    <section className={styles.statisticsData}>
      {title && <h2 className={styles.title}>Upload stats</h2>}

      <ul className={styles.statList}>
        {stats.map(el => {
          const { id, label, percentage } = el;
          return (
            <li className={styles.item} key={id}>
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.defaultProps = {
  title: 'string',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

// function generateColor() {
//   return '#' + Math.floor(Math.random()*16777215).toString(16)
// };

//  const color = generateColor();
