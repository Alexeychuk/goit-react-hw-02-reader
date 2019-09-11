import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ item }) => {
  const { title, id, text } = item;

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
