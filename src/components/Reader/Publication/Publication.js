import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ item: { title, id, text } }) => {
  return (
    <article className={styles.publication} id={id}>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

Publication.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Publication;
