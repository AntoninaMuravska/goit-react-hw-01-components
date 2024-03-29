import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statisticsData}>
      {title && <h2 className={s.title}>Upload stats</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={s.item} key={id}>
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
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
