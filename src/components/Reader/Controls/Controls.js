import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ increasePage, decreasePage, length, currentPage }) => {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        name="decrease"
        className={styles.button}
        onClick={decreasePage}
        disabled={currentPage === 0}
      >
        Назад
      </button>
      <button
        type="button"
        name="increase"
        className={styles.button}
        onClick={increasePage}
        disabled={currentPage + 1 === length}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  increasePage: PropTypes.func.isRequired,
  decreasePage: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Controls;
